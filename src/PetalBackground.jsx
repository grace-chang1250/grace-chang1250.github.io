import { useEffect, useRef } from "react";

const petalColors = {
  white: "#fffdf8",
  cream: "#F8F5EC",
  pink1: "#f7dfe2",
  pink2: "#efc3ca",
  pink3: "#df9fae",
};

const petalPatterns = [
  [
    [0,0,0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
];

const PETAL_COUNT_MOBILE = 12;
const PETAL_COUNT_DESKTOP = 24;

function createPetalCanvas(pattern) {
  const canvas = document.createElement('canvas');
  canvas.width = 12;
  canvas.height = 16;
  const pCtx = canvas.getContext('2d');

  pattern.forEach((row, y) => {
    row.forEach((pixel, x) => {
      if (pixel === 1) {
        if (y < 4) {
          pCtx.fillStyle = petalColors.white;
        } else if (y < 8) {
          pCtx.fillStyle = petalColors.cream;
        } else if (y < 10) {
          pCtx.fillStyle = petalColors.pink1;
        } else if (y < 12) {
          pCtx.fillStyle = petalColors.pink2;
        } else {
          pCtx.fillStyle = petalColors.pink3;
        }
        pCtx.fillRect(x, y, 1, 1);
      }
    });
  });

  return canvas;
}

function getPetalCount() {
  return window.innerWidth < 768 ? PETAL_COUNT_MOBILE : PETAL_COUNT_DESKTOP;
}

function setCanvasSize(canvas, ctx) {
  const ratio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  return { width, height };
}

export default function PetalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const petalImages = petalPatterns.map(createPetalCanvas);
    let { width, height } = setCanvasSize(canvas, ctx);
    let petals = [];
    let animationId;
    let lastTime = 0;

    class Petal {
      constructor(canvasWidth, canvasHeight) {
        this.reset(canvasWidth, canvasHeight, true);
      }

      reset(canvasWidth, canvasHeight, initial = false) {
        if (initial) {
          this.x = Math.random() * canvasWidth;
          this.y = Math.random() * canvasHeight;
        } else {
          const edgeBias = Math.random() > 0.6;
          this.x = edgeBias
            ? (Math.random() > 0.5 ? Math.random() * 0.3 : 0.7 + Math.random() * 0.3) * canvasWidth
            : Math.random() * canvasWidth;
          this.y = -50 - Math.random() * 100;
        }

        this.size = 10 + Math.random() * 38;
        this.variant = Math.floor(Math.random() * petalImages.length);
        const depthFactor = this.size / 48;
        this.velocityY = 0.3 + depthFactor * 0.7 + Math.random() * 0.3;
        this.velocityX = (Math.random() - 0.5) * 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.opacity = 0.25 + depthFactor * 0.75;
      }

      update(canvasWidth, canvasHeight) {
        this.y += this.velocityY;
        this.x += this.velocityX;
        this.rotation += this.rotationSpeed;

        if (this.y > canvasHeight + 50) {
          this.reset(canvasWidth, canvasHeight);
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        const scale = this.size / 12;
        ctx.scale(scale, scale);
        ctx.drawImage(petalImages[this.variant], -6, -8);
        ctx.restore();
      }
    }

    const createPetals = (count) => Array.from({ length: count }, () => new Petal(width, height));

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;

      if (deltaTime > 16) {
        ctx.clearRect(0, 0, width, height);
        const gradient = ctx.createRadialGradient(
          width * 0.18, height * 0.08, 0,
          width * 0.18, height * 0.08, width * 0.5
        );
        gradient.addColorStop(0, 'rgba(255, 244, 214, 0.08)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        petals.forEach((petal) => {
          petal.update(width, height);
          petal.draw(ctx);
        });

        lastTime = timestamp;
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const dims = setCanvasSize(canvas, ctx);
      width = dims.width;
      height = dims.height;
      petals = createPetals(getPetalCount());
    };

    window.addEventListener('resize', handleResize);
    petals = createPetals(getPetalCount());
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="petal-background"
    />
  );
}
