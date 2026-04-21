"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  actionText: string;
  href: string;
  onActionClick?: () => void;
  className?: string;
  accentColor?: string;
  active?: boolean;
}

export const InteractiveServiceCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    {
      title,
      subtitle,
      actionText,
      href,
      onActionClick,
      className,
      accentColor = "#049DFF",
      active = true,
    },
    ref
  ) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!active) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: active ? rotateX : 0,
          rotateY: active ? rotateY : 0,
          transformStyle: "preserve-3d",
          // Exact 21st.dev border: border border-border/30
          border: "1px solid rgba(255,255,255,0.3)",
        }}
        className={cn(
          "relative h-[26rem] w-80 rounded-2xl bg-transparent shadow-2xl",
          className
        )}
      >
        {/* Inner container with 3D depth */}
        <div
          style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          className="absolute inset-4 grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] grid-rows-[1fr_auto] rounded-xl shadow-lg overflow-hidden"
        >
          {/* Dark gradient background */}
          <div
            className="absolute inset-0 h-full w-full rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, #0C128D 0%, #220041 60%, #020008 100%)",
            }}
          />

          {/* Accent glow orb */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: accentColor }}
          />

          {/* Bottom glow line */}
          <div
            className="absolute bottom-0 left-4 right-4 h-px pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col justify-between rounded-xl p-6 text-white h-full">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                {/* Subtitle / number */}
                <motion.p
                  style={{
                    transform: "translateZ(40px)",
                    fontFamily: "var(--font-poppins)",
                    color: accentColor,
                  }}
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                >
                  {subtitle}
                </motion.p>

                {/* Title */}
                <motion.h2
                  style={{
                    transform: "translateZ(50px)",
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="text-3xl font-extrabold text-white leading-tight"
                >
                  {title}
                </motion.h2>
              </div>

              {/* Arrow link — ring-1 ring-inset ring-white/30 exact match */}
              <motion.a
                href={href}
                whileHover={{ scale: 1.1, rotate: "2.5deg" }}
                whileTap={{ scale: 0.9 }}
                style={{ transform: "translateZ(60px)" }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/30 flex-shrink-0"
                aria-label={`Go to ${title}`}
              >
                <ArrowUpRight className="h-5 w-5 text-white" />
              </motion.a>
            </div>

            {/* Action button — ring-1 ring-inset ring-white/20 exact match */}
            <motion.button
              onClick={onActionClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                transform: "translateZ(40px)",
                fontFamily: "var(--font-poppins)",
              }}
              className="w-full rounded-xl py-3 text-center font-semibold text-white text-sm backdrop-blur-md bg-white/10 ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
            >
              {actionText}
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }
);
InteractiveServiceCard.displayName = "InteractiveServiceCard";
