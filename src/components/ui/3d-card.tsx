"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  actionText: string;
  href: string;
  onActionClick?: () => void;
  className?: string;
  accentColor?: string;
  icon?: string;
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
      icon,
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
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          border: `1px solid ${accentColor}22`,
        }}
        className={cn(
          "relative h-[26rem] w-80 rounded-2xl bg-transparent shadow-2xl",
          className
        )}
      >
        <div
          style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          className="absolute inset-4 grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] grid-rows-[1fr_auto] rounded-xl shadow-lg overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0 h-full w-full rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, #0C128D 0%, #220041 60%, #020008 100%)",
            }}
          />

          {/* Glow orb */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: accentColor }}
          />

          {/* Bottom glow line */}
          <div
            className="absolute bottom-0 left-4 right-4 h-px pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            }}
          />

          {/* Card content */}
          <div className="relative flex flex-col justify-between rounded-xl p-6 text-white h-full">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                {/* Icon */}
                <motion.div
                  style={{ transform: "translateZ(60px)" }}
                  className="text-4xl mb-4"
                >
                  {icon}
                </motion.div>

                {/* Subtitle / number */}
                <motion.p
                  style={{ transform: "translateZ(40px)", fontFamily: "var(--font-poppins)" }}
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                >
                  <span style={{ color: accentColor }}>{subtitle}</span>
                </motion.p>

                {/* Title */}
                <motion.h2
                  style={{
                    transform: "translateZ(50px)",
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="text-2xl font-bold text-white leading-tight"
                >
                  {title}
                </motion.h2>
              </div>

              {/* Arrow link */}
              <motion.a
                href={href}
                whileHover={{ scale: 1.1, rotate: "2.5deg" }}
                whileTap={{ scale: 0.9 }}
                style={{
                  transform: "translateZ(60px)",
                  background: `${accentColor}22`,
                  border: `1px solid ${accentColor}44`,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-colors flex-shrink-0"
                aria-label={`Go to ${title}`}
              >
                <ArrowUpRight className="h-5 w-5 text-white" />
              </motion.a>
            </div>

            {/* Footer button */}
            <motion.button
              onClick={onActionClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                transform: "translateZ(40px)",
                background: `linear-gradient(135deg, ${accentColor}33, #A614B233)`,
                border: `1px solid ${accentColor}44`,
                fontFamily: "var(--font-poppins)",
              }}
              className="w-full rounded-xl py-3 text-center font-semibold text-white text-sm backdrop-blur-md hover:opacity-90 transition-opacity"
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
