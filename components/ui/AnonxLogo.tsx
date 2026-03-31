import React, { useId } from "react";

interface AnonxLogoProps {
  size?: "sm" | "md" | "lg";
  color?: "dark" | "light";
  showText?: boolean;
  hideTagline?: boolean;
}

const TAGLINE = "Apps for Educators";

const sizeMap = {
  sm: {
    icon: 32,
    wordmark: "text-lg",
    tagline: "text-[10px]",
    gap: "gap-2.5",
  },
  md: {
    icon: 40,
    wordmark: "text-2xl",
    tagline: "text-[11px]",
    gap: "gap-3",
  },
  lg: {
    icon: 56,
    wordmark: "text-4xl",
    tagline: "text-xs",
    gap: "gap-4",
  },
} as const;

const palettes = {
  dark: {
    tile: "#0f172a",
    tileEdge: "rgba(15, 23, 42, 0.10)",
    innerGlow: "rgba(255, 255, 255, 0.08)",
    primaryStroke: "#f8fafc",
    text: "text-navy-950",
    muted: "text-navy-500",
  },
  light: {
    tile: "#fff7ed",
    tileEdge: "rgba(255, 255, 255, 0.16)",
    innerGlow: "rgba(255, 255, 255, 0.52)",
    primaryStroke: "#0f172a",
    text: "text-white",
    muted: "text-white/65",
  },
} as const;

function LogoMark({
  size,
  color,
}: {
  size: number;
  color: keyof typeof palettes;
}) {
  const palette = palettes[color];
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
    >
      <defs>
        <linearGradient id={gradientId} x1="17" y1="18" x2="49" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fb923c" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="18" fill={palette.tile} />
      <rect x="4.75" y="4.75" width="54.5" height="54.5" rx="17.25" stroke={palette.tileEdge} strokeWidth="1.5" />
      <circle cx="48" cy="18" r="2.5" fill={`url(#${gradientId})`} />

      <path
        d="M18 44L26 22L34 44M21.75 34H30.25"
        stroke={palette.primaryStroke}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.5 23L46 41M46 23L36.5 41"
        stroke={`url(#${gradientId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AnonxLogo({
  size = "md",
  color = "dark",
  showText = true,
  hideTagline = false,
}: AnonxLogoProps) {
  const sizing = sizeMap[size];
  const palette = palettes[color];

  return (
    <div className={`group inline-flex items-center ${sizing.gap}`}>
      <div className="relative">
        <div className="absolute inset-1 rounded-[16px] bg-brand-orange/10 blur-md transition-opacity duration-300 group-hover:opacity-90" />
        <LogoMark size={sizing.icon} color={color} />
      </div>

      {showText ? (
        <div className="flex flex-col leading-none">
          <span className={`font-cabinet font-extrabold tracking-[-0.06em] ${sizing.wordmark} ${palette.text}`}>
            Anon<span className="text-brand-orange">x</span>
          </span>
          {!hideTagline ? (
            <span className={`${sizing.tagline} mt-1 font-semibold uppercase tracking-[0.24em] ${palette.muted}`}>
              {TAGLINE}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
