"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";

/**
 * Pixel-for-pixel same algorithm as Citatio `website/index.html` drawRainbow /
 * RainbowHeader (QTimer 120 ms, block=4, drift, %7 grid, accent rgba 60/255).
 * Only `COLORS` is swapped for a Polish white / red six-stripe band.
 */
const RAINBOW_INTERVAL_MS = 120;
const BLOCK = 4;
/** Multiple of stripe count so every band has the same pixel height (Citatio uses integer math). */
const HEADER_H = 54;
const ACCENT_ALPHA = 60 / 255;

/** Six bands: light greys → reds (Citatio uses 6 rainbow hues). */
const COLORS_LIGHT = ["#ffffff", "#f5f5f5", "#ebebeb", "#e2233a", "#c91634", "#a8142c"] as const;
const COLORS_DARK = ["#ececec", "#e4e4e4", "#dcdcdc", "#c01830", "#a8122a", "#901024"] as const;

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
    const COLORS = resolvedTheme === "dark" ? COLORS_DARK : COLORS_LIGHT;
    const n = COLORS.length;

    tickRef.current = (tickRef.current + 1) % 10000;
    const tick = tickRef.current;

    const stripeH = h / n;
    const drift = (tick * 2) % (BLOCK * n);
    let y = 0;

    for (let i = 0; i < n; i++) {
      const y0 = Math.round(y);
      const y1 = Math.round(y + stripeH);
      const bandH = Math.max(1, y1 - y0);
      ctx.fillStyle = COLORS[i]!;
      ctx.fillRect(0, y0, w, bandH);

      const accentHex = COLORS[(i + ((tick / 2) | 0)) % n]!;
      const { r, g, b } = hexToRgb(accentHex);
      ctx.fillStyle = `rgba(${r},${g},${b},${ACCENT_ALPHA})`;

      for (let x = -drift; x < w + BLOCK; x += BLOCK) {
        if ((((x / BLOCK) | 0) + i + ((tick / 2) | 0)) % 7 === 0) {
          ctx.fillRect(x, y0, BLOCK, bandH);
        }
      }
      y += stripeH;
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
