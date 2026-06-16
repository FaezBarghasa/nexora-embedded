import { useRef, useEffect, useState } from 'react';

export interface HoloVertex {
  x: number;
  y: number;
  z: number;
}

export interface HoloModel {
  vertices: HoloVertex[];
  lines: number[][]; // array of [index1, index2]
}

const MODELS: Record<string, HoloModel> = (() => {
  const models: Record<string, HoloModel> = {};

  // -- 1. BLUE-PILL (STM32 Board)
  const bpVertices: HoloVertex[] = [];
  const bpLines: number[][] = [];
  
  // PCB (length 53mm, width 22mm scale by 1.5) -> L=80, W=33
  const pcbW = 33;
  const pcbL = 80;
  bpVertices.push(
    {x: -pcbW, y: -2, z: -pcbL}, {x: pcbW, y: -2, z: -pcbL}, 
    {x: pcbW, y: -2, z: pcbL}, {x: -pcbW, y: -2, z: pcbL},
    {x: -pcbW, y: 2, z: -pcbL}, {x: pcbW, y: 2, z: -pcbL}, 
    {x: pcbW, y: 2, z: pcbL}, {x: -pcbW, y: 2, z: pcbL}
  );
  bpLines.push([0,1],[1,2],[2,3],[3,0], [4,5],[5,6],[6,7],[7,4], [0,4],[1,5],[2,6],[3,7]);

  // Headers (20 pins per side)
  let vIdx = bpVertices.length;
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i < 20; i++) {
      const z = -pcbL + 8 + i * 3.8;
      const x = side * (pcbW - 2);
      bpVertices.push({x: x, y: 2, z: z}, {x: x, y: -8, z: z});
      bpLines.push([vIdx, vIdx + 1]);
      if (i > 0) {
        bpLines.push([vIdx, vIdx - 2]); 
      }
      vIdx += 2;
    }
  }

  // MCU (Square rotated 45 deg, center)
  const mcuW = 12;
  const mIdx = bpVertices.length;
  bpVertices.push(
    {x: 0, y: 2, z: -mcuW}, {x: mcuW, y: 2, z: 0},
    {x: 0, y: 2, z: mcuW}, {x: -mcuW, y: 2, z: 0},
    {x: 0, y: 5, z: -mcuW}, {x: mcuW, y: 5, z: 0},
    {x: 0, y: 5, z: mcuW}, {x: -mcuW, y: 5, z: 0}
  );
  bpLines.push(
    [mIdx,  mIdx+1],   [mIdx+1,mIdx+2], [mIdx+2,mIdx+3], [mIdx+3,mIdx],
    [mIdx+4,mIdx+5], [mIdx+5,mIdx+6], [mIdx+6,mIdx+7], [mIdx+7,mIdx+4],
    [mIdx,mIdx+4], [mIdx+1,mIdx+5], [mIdx+2,mIdx+6], [mIdx+3,mIdx+7]
  );
  
  // USB Port (top edge)
  const uIdx = bpVertices.length;
  bpVertices.push(
    {x:-6, y:2, z:-pcbL}, {x:6, y:2, z:-pcbL}, {x:6, y:2, z:-pcbL-6}, {x:-6, y:2, z:-pcbL-6},
    {x:-6, y:7, z:-pcbL}, {x:6, y:7, z:-pcbL}, {x:6, y:7, z:-pcbL-6}, {x:-6, y:7, z:-pcbL-6}
  );
  bpLines.push(
    [uIdx,uIdx+1],[uIdx+1,uIdx+2],[uIdx+2,uIdx+3],[uIdx+3,uIdx],
    [uIdx+4,uIdx+5],[uIdx+5,uIdx+6],[uIdx+6,uIdx+7],[uIdx+7,uIdx+4],
    [uIdx,uIdx+4],[uIdx+1,uIdx+5],[uIdx+2,uIdx+6],[uIdx+3,uIdx+7]
  );

  models['blue-pill'] = { vertices: bpVertices, lines: bpLines };

  // -- 2. HIGH-RPM MIXER
  const mxVertices: HoloVertex[] = [];
  const mxLines: number[][] = [];
  
  // Circle generator
  const addCylinder = (cx: number, cy: number, cz: number, r: number, h: number, segments: number) => {
    const startIdx = mxVertices.length;
    for (let i = 0; i < segments; i++) {
       const theta = (Math.PI * 2 * i) / segments;
       const px = cx + Math.cos(theta) * r;
       const pz = cz + Math.sin(theta) * r;
       mxVertices.push({x: px, y: cy, z: pz});
       mxVertices.push({x: px, y: cy + h, z: pz});
       
       const next = (i + 1) % segments;
       mxLines.push([startIdx + i * 2, startIdx + next * 2]);
       mxLines.push([startIdx + i * 2 + 1, startIdx + next * 2 + 1]);
       if (i % 2 === 0) mxLines.push([startIdx + i * 2, startIdx + i * 2 + 1]); // vertical struts
    }
  };

  // Base
  addCylinder(0, -60, 0, 30, 10, 16);
  // Column
  const cIdx = mxVertices.length;
  mxVertices.push({x:0, y:-50, z:-20}, {x:0, y:20, z:-20});
  mxLines.push([cIdx, cIdx+1]);
  // Motor Head
  addCylinder(0, 20, 0, 20, 40, 12);
  // Shaft
  const sIdx = mxVertices.length;
  mxVertices.push({x:0, y:-30, z:0}, {x:0, y:20, z:0});
  mxLines.push([sIdx, sIdx+1]);
  
  // Whisk impellor
  const wIdx = mxVertices.length;
  for (let i = 0; i < 4; i++) {
     const theta = (Math.PI / 2) * i;
     mxVertices.push({x: Math.cos(theta)*15, y:-45, z: Math.sin(theta)*15});
     mxLines.push([sIdx, wIdx + i]); // Shaft to whisk
     mxLines.push([wIdx+i, wIdx + ((i+1)%4)]); // Whisk ring
  }

  models['mixer'] = { vertices: mxVertices, lines: mxLines };

  // -- 3. BAIN-MARIE CONTROL
  const bmVertices: HoloVertex[] = [];
  const bmLines: number[][] = [];
  
  const addBox = (x:number, y:number, z:number, sx:number, sy:number, sz:number) => {
    const idx = bmVertices.length;
    bmVertices.push(
      {x:x-sx, y:y-sy, z:z-sz}, {x:x+sx, y:y-sy, z:z-sz}, {x:x+sx, y:y-sy, z:z+sz}, {x:x-sx, y:y-sy, z:z+sz},
      {x:x-sx, y:y+sy, z:z-sz}, {x:x+sx, y:y+sy, z:z-sz}, {x:x+sx, y:y+sy, z:z+sz}, {x:x-sx, y:y+sy, z:z+sz}
    );
    bmLines.push(
      [idx,idx+1],[idx+1,idx+2],[idx+2,idx+3],[idx+3,idx],
      [idx+4,idx+5],[idx+5,idx+6],[idx+6,idx+7],[idx+7,idx+4],
      [idx,idx+4],[idx+1,idx+5],[idx+2,idx+6],[idx+3,idx+7]
    );
  };

  // Outer shell
  addBox(0, -10, 0, 60, 30, 40);
  // Inner Tub
  addBox(0, 0, 0, 50, 20, 30);
  // Control Panel slope
  const cpIdx = bmVertices.length;
  bmVertices.push(
    {x:-60, y:20, z:40}, {x:60, y:20, z:40},
    {x:-60, y:10, z:50}, {x:60, y:10, z:50}
  );
  bmLines.push([cpIdx, cpIdx+1], [cpIdx+2, cpIdx+3], [cpIdx, cpIdx+2], [cpIdx+1, cpIdx+3]);
  
  // Heating tubes (U-shaped element)
  const hIdx = bmVertices.length;
  bmVertices.push(
    {x:-30, y:-15, z:-20}, {x:-30, y:-15, z:20},
    {x:-10, y:-15, z:20}, {x:-10, y:-15, z:-20},
    {x:10, y:-15, z:-20}, {x:10, y:-15, z:20},
    {x:30, y:-15, z:20}, {x:30, y:-15, z:-20}
  );
  bmLines.push([hIdx, hIdx+1], [hIdx+1, hIdx+2], [hIdx+2, hIdx+3], [hIdx+3, hIdx+4], [hIdx+4, hIdx+5], [hIdx+5, hIdx+6], [hIdx+6, hIdx+7]);

  models['bain-marie'] = { vertices: bmVertices, lines: bmLines };

  return models;
})();

interface HologramViewerProps {
  modelKey: string;
  yaw: number;
  pitch: number;
  autoRot: boolean;
  setYaw: (y: number | ((prev: number) => number)) => void;
  setPitch: (p: number | ((prev: number) => number)) => void;
  setAutoRot: (state: boolean) => void;
}

export function HologramViewer({ modelKey, yaw, pitch, autoRot, setYaw, setPitch, setAutoRot }: HologramViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });

  const yawRef = useRef(yaw);
  const pitchRef = useRef(pitch);
  const autoRotRef = useRef(autoRot);
  
  useEffect(() => {
    yawRef.current = yaw;
    pitchRef.current = pitch;
    autoRotRef.current = autoRot;
  }, [yaw, pitch, autoRot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeObserver = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    });
    resizeObserver.observe(container);

    const scaleFactor = 1.6;

    const project = (x: number, y: number, z: number, w: number, h: number) => {
      const currentYaw = yawRef.current;
      const currentPitch = pitchRef.current;

      const cosY = Math.cos(currentYaw);
      const sinY = Math.sin(currentYaw);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      const cosP = Math.cos(currentPitch);
      const sinP = Math.sin(currentPitch);
      const y2 = y * cosP - z1 * sinP;
      const z2 = y * sinP + z1 * cosP;

      const dist = 320;
      const scale = dist / (dist + z2);

      return {
        x: (w / 2) + x1 * scale * scaleFactor,
        y: (h / 2) + y2 * scale * scaleFactor,
        scale: scale
      };
    };

    const render = () => {
      if (autoRotRef.current) {
        setYaw((prev) => prev + 0.008);
      }

      ctx.clearRect(0, 0, width, height);

      const activeModel = MODELS[modelKey];
      if (activeModel) {
        ctx.strokeStyle = 'rgba(0, 229, 160, 0.05)';
        ctx.lineWidth = 1;
        for (let r = 50; r <= 200; r += 50) {
          ctx.beginPath();
          ctx.arc(width / 2, height / 2 + 20, r, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.strokeStyle = '#00E5A0';
        ctx.lineWidth = 1.4;

        activeModel.lines.forEach((pair) => {
          const v1 = activeModel.vertices[pair[0]];
          const v2 = activeModel.vertices[pair[1]];

          if (v1 && v2) {
            const p1 = project(v1.x, v1.y, v1.z, width, height);
            const p2 = project(v2.x, v2.y, v2.z, width, height);

            ctx.beginPath();
            
            // Apply slight glitch on X axis randomly
            let glitchOffsetX = 0;
            if (Math.random() > 0.95) {
              glitchOffsetX = (Math.random() - 0.5) * 10;
              ctx.strokeStyle = `rgba(0, 229, 160, ${Math.random()})`;
            }

            ctx.moveTo(p1.x + glitchOffsetX, p1.y);
            ctx.lineTo(p2.x + glitchOffsetX, p2.y);

            if (glitchOffsetX === 0) {
              ctx.strokeStyle = `rgba(0, 229, 160, ${Math.min(1.0, 0.15 + p1.scale * 0.75)})`;
            }
            ctx.stroke();
          }
        });

        activeModel.vertices.forEach((v) => {
          const p = project(v.x, v.y, v.z, width, height);
          ctx.fillStyle = '#00E5A0';
          ctx.beginPath();
          let glitchR = 0;
          if (Math.random() > 0.9) {
             glitchR = Math.random() * 2;
          }
          ctx.arc(p.x, p.y, 2.5 * p.scale + glitchR, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Scanline effect
        ctx.fillStyle = 'rgba(0, 229, 160, 0.03)';
        for (let i = 0; i < height; i += 4) {
          ctx.fillRect(0, i, width, 1);
        }
        
        // CRT Flicker
        if (Math.random() > 0.98) {
           ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
           ctx.fillRect(0, 0, width, height);
           
           // Chromatic shift
           ctx.globalCompositeOperation = 'screen';
           ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
           ctx.fillRect(-2, 0, width, height);
           ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
           ctx.fillRect(2, 0, width, height);
           ctx.globalCompositeOperation = 'source-over';
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, [modelKey, setYaw]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setAutoRot(false);
    setPrevMouse({ x: e.clientX, y: e.clientY });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - prevMouse.x;
    const deltaY = e.clientY - prevMouse.y;
    
    setYaw(y => y + deltaX * 0.01);
    setPitch(p => {
      let newPitch = p + deltaY * 0.01;
      return Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, newPitch));
    });

    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-move hover:cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-30" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00E5A0 2px, #00E5A0 4px)',
        backgroundSize: '100% 4px',
      }}></div>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="block w-full h-full touch-none"
        style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,160,0.5))' }}
      />
    </div>
  );
}
