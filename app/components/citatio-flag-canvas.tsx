"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";

/**
 * Six seamless bands: 3 white, 3 red.
 * Sparse transparent grey squares (no gradients); opacity fades in/out; +0.1px offset per column.
 */
const TICK_MS = 100;
const BLOCK = 14;
const GRID_MOD = 15;
const HEADER_H = 52;

const STRIPES_LIGHT = ["#f4f4f4", "#f4f4f4", "#f4f4f4", "#c91634", "#c91634", "#c91634"] as const;
const STRIPES_DARK = ["#e6e6e6", "#e6e6e6", "#e6e6e6", "#a8122a", "#a8122a", "#a8122a"] as const;

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
    const stripeColors = dark ? STRIPES_DARK : STRIPES_LIGHT;
    const n = stripeColors.length;

    tickRef.current = (tickRef.current + 1) % 10000;
    const tick = tickRef.current;
    const drift = (tick * 2) % (BLOCK * n);

    for (let i = 0; i < n; i++) {
      const y0 = Math.floor((h * i) / n);
      const y1 = Math.floor((h * (i + 1)) / n);
      const stripeH = Math.max(1, y1 - y0);

      ctx.fillStyle = stripeColors[i]!;
      ctx.fillRect(0, y0, w, stripeH);

      for (let x = -drift; x < w + BLOCK; x += BLOCK) {
        const col = Math.floor((x + drift) / BLOCK);
        if ((col + i * 2 + ((tick / 2) | 0)) % GRID_MOD === 0) {
          const gx = x + col * 0.1;
          const alpha = 0.04 + 0.14 * (0.5 + 0.5 * Math.sin(tick * 0.22 + col * 0.09));
          ctx.fillStyle = `rgba(96, 96, 96, ${alpha})`;
          ctx.fillRect(gx, y0, BLOCK, stripeH);
        }
      }
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
    }, TICK_MS);
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
