import { useEffect, useRef } from "react";

export default function PetalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Petal colors from spec - updated to match CSS
    const petalColors = {
      white: "#fffdf8",
      cream: "#F8F5EC",
      pink1: "#f7dfe2",
      pink2: "#efc3ca",
      pink3: "#df9fae",
      shadow: "#d6b7ad",
    };

    // Petal pixel patterns (12x16 grid)
    const petalPatterns = [
      // Petal 01 - broad magnolia
      [
        [0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,0],
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
      // Petal 02 - slightly curved
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
      // Petal 03 - partially folded
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
      // Petal 04 - small fragment
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

    // Generate petal images
    const petalImages = petalPatterns.map(pattern => {
      const canvas = document.createElement('canvas');
      canvas.width = 12;
      canvas.height = 16;
      const pCtx = canvas.getContext('2d');
      
      // Draw pixel petal
      pattern.forEach((row, y) => {
        row.forEach((pixel, x) => {
          if (pixel === 1) {
            // Determine color based on position for depth effect
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
    });

    // Petal class
    class Petal {
      constructor(canvasWidth, canvasHeight) {
        this.reset(canvasWidth, canvasHeight, true);
      }

      reset(canvasWidth, canvasHeight, initial = false) {
        // Bias toward edges to keep center relatively empty
        const edgeBias = Math.random() > 0.6;
        this.x = edgeBias 
          ? (Math.random() > 0.5 ? Math.random() * 0.3 : 0.7 + Math.random() * 0.3) * canvasWidth
          : Math.random() * canvasWidth;
        
        this.y = initial 
          ? Math.random() * canvasHeight 
          : -50 - Math.random() * 100;
        
        this.size = 10 + Math.random() * 38; // 10-48px
        this.variant = Math.floor(Math.random() * 4);
        
        // Velocity based on depth (smaller = slower)
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

        // Reset when off screen
        if (this.y > canvasHeight + 50) {
          this.reset(canvasWidth, canvasHeight);
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        
        // Scale up the pixel pattern
        const scale = this.size / 12;
        ctx.scale(scale, scale);
        
        ctx.drawImage(petalImages[this.variant], -6, -8);
        
        ctx.restore();
      }
    }

    // Create petals
    const PETAL_COUNT = window.innerWidth < 768 ? 12 : 24;
    const petals = Array.from({ length: PETAL_COUNT }, () => new Petal(canvas.width, canvas.height));

    // Animation loop
    let animationId;
    let lastTime = 0;

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;

      // Only update at ~60fps to respect reduced motion
      if (deltaTime > 16) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw subtle sunlight gradient
        const gradient = ctx.createRadialGradient(
          canvas.width * 0.18, canvas.height * 0.08, 0,
          canvas.width * 0.18, canvas.height * 0.08, canvas.width * 0.5
        );
        gradient.addColorStop(0, 'rgba(255, 244, 214, 0.08)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw petals
        petals.forEach(petal => {
          petal.update(canvas.width, canvas.height);
          petal.draw(ctx);
        });

        lastTime = timestamp;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animationId = requestAnimationFrame(animate);

    // Cleanup
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