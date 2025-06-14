import React, { useEffect, useRef } from "react";

export default function PixelTrailCursor() {
  const canvasRef = useRef(null);
  const lastPosRef = useRef(null);
  const pathLengthRef = useRef(0);
  const isDrawingRef = useRef(true);
  const colorIndexRef = useRef(0);
  const pixelTrailRef = useRef([]); // Store pixels for clearing
  const animationFrameRef = useRef(null);
  const inactivityTimeoutRef = useRef(null);
  const maxPathLengthRef = useRef(800); // Varies between 700 and 1500

  const STEP_SIZE = 7;
  const COLORS = [
    "rgb(102, 102, 102)",
    "rgb(123, 99, 137)",
    "rgb(193, 141, 82)",
  ];

  const INACTIVITY_CLEAR_DELAY = 30; // ms
  const POST_LIMIT_CLEAR_DELAY = 0;   // ms
  const CLEAR_SPEED = 7;              // pixels per frame

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const setRandomMaxPathLength = () => {
      maxPathLengthRef.current = Math.floor(Math.random() * (1500 - 700 + 1)) + 700;
    };

    const animateClearTrail = () => {
      const pixels = pixelTrailRef.current;
      if (pixels.length === 0) {
        // Reset state after trail is cleared
        lastPosRef.current = null;
        pathLengthRef.current = 0;
        isDrawingRef.current = true;
        pixelTrailRef.current = [];
        colorIndexRef.current = (colorIndexRef.current + 1) % COLORS.length;

        setRandomMaxPathLength(); // Set new random limit
        return;
      }

      for (let i = 0; i < CLEAR_SPEED && pixels.length > 0; i++) {
        const { x, y } = pixels.shift();
        ctx.clearRect(x, y, STEP_SIZE, STEP_SIZE);
      }

      animationFrameRef.current = requestAnimationFrame(animateClearTrail);
    };

    const drawPixel = (x, y) => {
      ctx.fillStyle = COLORS[colorIndexRef.current];
      ctx.fillRect(x, y, STEP_SIZE, STEP_SIZE);
      pixelTrailRef.current.push({ x, y });
    };

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = setTimeout(() => {
        isDrawingRef.current = false;
        animationFrameRef.current = requestAnimationFrame(animateClearTrail);
      }, INACTIVITY_CLEAR_DELAY);
    };

    const handleMouseMove = (e) => {
      if (!isDrawingRef.current) return;

      const x = Math.floor(e.clientX / STEP_SIZE) * STEP_SIZE;
      const y = Math.floor(e.clientY / STEP_SIZE) * STEP_SIZE;
      const currentPos = { x, y };

      if (lastPosRef.current) {
        const { x: lx, y: ly } = lastPosRef.current;
        const dx = x - lx;
        const dy = y - ly;
        const dist = Math.sqrt(dx * dx + dy * dy);
        pathLengthRef.current += dist;

        const steps = Math.max(Math.abs(dx), Math.abs(dy)) / STEP_SIZE;

        for (let i = 0; i <= steps; i++) {
          const ix = Math.floor(lx + (dx * i) / steps);
          const iy = Math.floor(ly + (dy * i) / steps);
          drawPixel(ix, iy);
        }

        if (pathLengthRef.current >= maxPathLengthRef.current) {
          isDrawingRef.current = false;
          clearTimeout(inactivityTimeoutRef.current);
          setTimeout(() => {
            animationFrameRef.current = requestAnimationFrame(animateClearTrail);
          }, POST_LIMIT_CLEAR_DELAY);
          return;
        }
      }

      lastPosRef.current = currentPos;
      resetInactivityTimer();
    };

    setRandomMaxPathLength(); // Initialize on mount
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimeoutRef.current);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
