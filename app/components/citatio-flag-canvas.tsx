"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";

/**
 * Pixelated header strip — same cadence and grid math as Citatio.py / website RainbowHeader
 * (SIMI2COOL/Citatio `website/index.html`): block=4, tick, drift, (floor(x/block)+i+floor(tick/2))%7.
 * Two stripes = Polish flag; accent tiles use light/dark overlays instead of rainbow palette.
 */
const RAINBOW_INTERVAL_MS = 120;
const BLOCK = 4;
const HEADER_H = 56;

/* Polish flag base stripes */
const STRIPE_LIGHT = ["#f4f4f4", "#c91634"] as const;
const STRIPE_DARK = ["#e6e6e6", "#a8122a"] as const;

/* Same accent palette + alpha as Citatio website RainbowHeader */
const CT_COLORS = ["#6ABD45", "#F5BC00", "#F6821F", "#E2231A", "#8A2BE2", "#009CDE"] as const;

function hexToRgb(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  };
}

export function CitatioFlagCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tickRef = useRef(0);
  const { resolvedTheme } = useTheme();

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const w = Math.max(1, Math.floor(wrap.getBoundingClientRect().width));
    const h = HEADER_H;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const w = Math.max(1, Math.floor(wrap.getBoundingClientRect().width));
    const h = HEADER_H;
    const dark = resolvedTheme === "dark";
    const stripes = dark ? STRIPE_DARK : STRIPE_LIGHT;
    const n = stripes.length;

    tickRef.current = (tickRef.current + 1) % 10000;
    const tick = tickRef.current;

    const stripeH = Math.max(1, Math.floor(h / n));
    const drift = (tick * 2) % (BLOCK * n);
    let y = 0;

    for (let i = 0; i < n; i++) {
      ctx.fillStyle = stripes[i]!;
      ctx.fillRect(0, y, w, stripeH);

      const accentHex = CT_COLORS[(i + ((tick / 2) | 0)) % CT_COLORS.length]!;
      const { r, g, b } = hexToRgb(accentHex);
      ctx.fillStyle = `rgba(${r},${g},${b},${60 / 255})`;

      for (let x = -drift; x < w + BLOCK; x += BLOCK) {
        if ((((x / BLOCK) | 0) + i + ((tick / 2) | 0)) % 7 === 0) {
          ctx.fillRect(x, y, BLOCK, stripeH);
        }
      }
      y += stripeH;
    }
    if (y < h) {
      ctx.fillStyle = stripes[n - 1]!;
      ctx.fillRect(0, y, w, h - y);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    resize();
    draw();
  }, [resize, draw]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(wrap);
    const id = window.setInterval(() => {
      draw();
    }, RAINBOW_INTERVAL_MS);
    return () => {
      ro.disconnect();
      window.clearInterval(id);
    };
  }, [resize, draw]);

  return (
    <div ref={wrapRef} className="pl-flag-canvas-wrap">
      <canvas ref={canvasRef} className="pl-flag-canvas" aria-hidden />
    </div>
  );
}
