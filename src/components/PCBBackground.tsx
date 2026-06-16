import { useEffect, useRef } from 'react';

interface PCBTrace {
  points: { x: number; y: number }[];
  color: string;
  width: number;
  pulseProgress: number;
}

export default function PCBBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let staticTraces: PCBTrace[] = [];

    const compilePCBLayout = () => {
      staticTraces = [];
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      const adjustX = (xVal: number) => isRtl ? (w - xVal) : xVal;

      function addParallelBus(startX: number, startY: number, count: number, spacing: number, directions: any[]) {
        for (let i = 0; i < count; i++) {
          const pts: { x: number; y: number }[] = [];
          let curX = startX + i * spacing;
          let curY = startY;
          pts.push({ x: adjustX(curX), y: curY });

          for (const seg of directions) {
            let angle = seg.angle;
            if (isRtl) {
              angle = (180 - angle + 360) % 360;
            }
            const rad = (angle * Math.PI) / 180;
            curX += seg.length * Math.cos(rad);
            curY += seg.length * Math.sin(rad);
            pts.push({ x: adjustX(curX), y: curY });
          }

          staticTraces.push({
            points: pts,
            color: '#00E5A0', 
            width: 1.5,
            pulseProgress: Math.random()
          });
        }
      }

      addParallelBus(w * 0.18, 0, 6, 14, [
        { angle: 90, length: h * 0.12 },
        { angle: 135, length: 60 },
        { angle: 90, length: h * 0.14 }
      ]);

      addParallelBus(w * 0.05, h * 0.35, 8, 10, [
        { angle: 0, length: w * 0.12 },
        { angle: 45, length: 80 },
        { angle: 0, length: w * 0.10 }
      ]);

      addParallelBus(w * 0.85, 0, 4, 16, [
        { angle: 90, length: h * 0.10 },
        { angle: 225, length: 70 },
        { angle: 180, length: w * 0.08 }
      ]);

      addParallelBus(w * 0.65, h * 0.20, 7, 12, [
        { angle: 180, length: w * 0.10 },
        { angle: 135, length: 90 },
        { angle: 180, length: w * 0.08 }
      ]);

      addParallelBus(w * 0.48, h, 4, 20, [
        { angle: 270, length: h * 0.16 },
        { angle: 315, length: 110 },
        { angle: 270, length: h * 0.10 }
      ]);

      const scatterPaths = [
        { x: w * 0.08, y: h * 0.15, d: [{ angle: 45, length: 50 }, { angle: 0, length: 70 }] },
        { x: w * 0.90, y: h * 0.50, d: [{ angle: 135, length: 60 }, { angle: 180, length: 80 }] },
        { x: w * 0.28, y: h * 0.82, d: [{ angle: 315, length: 70 }, { angle: 0, length: 60 }] },
        { x: w * 0.72, y: h * 0.32, d: [{ angle: 135, length: 50 }, { angle: 180, length: 50 }] }
      ];

      scatterPaths.forEach(path => {
        const pts: { x: number; y: number }[] = [];
        let curX = path.x;
        let curY = path.y;
        pts.push({ x: adjustX(curX), y: curY });

        for (const seg of path.d) {
          let angle = seg.angle;
          if (isRtl) {
            angle = (180 - angle + 360) % 360;
          }
          const rad = (angle * Math.PI) / 180;
          curX += seg.length * Math.cos(rad);
          curY += seg.length * Math.sin(rad);
          pts.push({ x: adjustX(curX), y: curY });
        }

        staticTraces.push({
          points: pts,
          color: '#00E5A0',
          width: 1.6,
          pulseProgress: Math.random()
        });
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(26, 40, 48, 0.2)';
      ctx.lineWidth = 0.5;
      const step = 40;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      staticTraces.forEach(trace => {
        if (trace.points.length === 0) return;

        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let j = 1; j < trace.points.length; j++) {
          ctx.lineTo(trace.points[j].x, trace.points[j].y);
        }
        
        ctx.strokeStyle = 'rgba(0, 140, 95, 0.1)';
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.strokeStyle = 'rgba(0, 229, 160, 0.25)';
        ctx.lineWidth = trace.width;
        ctx.stroke();

        const lastPoint = trace.points[trace.points.length - 1];

        ctx.beginPath();
        ctx.arc(lastPoint.x, lastPoint.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#0A0E14';
        ctx.strokeStyle = '#00E5A0'; 
        ctx.lineWidth = 3.5; 
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(lastPoint.x, lastPoint.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00E5A0';
        ctx.fill();

        trace.pulseProgress += 0.0015;
        if (trace.pulseProgress >= 1) trace.pulseProgress = 0;

        const segmentCount = trace.points.length - 1;
        const progressPerSegment = 1 / segmentCount;
        const currentSegment = Math.min(
            Math.floor(trace.pulseProgress / progressPerSegment),
            segmentCount - 1
        );
        const segmentProgress = (trace.pulseProgress % progressPerSegment) / progressPerSegment;

        const ptA = trace.points[currentSegment];
        const ptB = trace.points[currentSegment + 1];

        if (ptA && ptB) {
          const pulseX = ptA.x + (ptB.x - ptA.x) * segmentProgress;
          const pulseY = ptA.y + (ptB.y - ptA.y) * segmentProgress;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#00E5A0';
          ctx.shadowColor = 'rgba(0, 229, 160, 0.4)';
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    compilePCBLayout();
    render();

    window.addEventListener('resize', compilePCBLayout);

    return () => {
      window.removeEventListener('resize', compilePCBLayout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="pcbBackgroundCanvas" 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
