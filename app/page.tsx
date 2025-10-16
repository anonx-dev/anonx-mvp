"use client";
import React, {
  useState,
  useEffect,
} from "react";

const Page = () => {
  const [mousePosition, setMousePosition] =
    useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );
    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return (
    <div className="relative pt-12 min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={gradientStyle}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite_2s]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite_4s]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo/Brand */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 animate-pulse" />
            <h1 className="relative text-7xl md:text-9xl font-black tracking-tighter">
              {"ANONX"
                .split("")
                .map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)",
                      backgroundSize: "200% 200%",
                      backgroundClip: "text",
                      WebkitBackgroundClip:
                        "text",
                      WebkitTextFillColor:
                        "transparent",
                      animation: `glitchLogo 3s ease-in-out infinite ${
                        idx * 0.15
                      }s, gradientShift 4s ease infinite`,
                    }}
                  >
                    {char}
                  </span>
                ))}
            </h1>
          </div>
        </div>

        {/* Coming Soon Text */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.3em] mb-12 overflow-hidden">
            {"COMING SOON"
              .split("")
              .map((char, idx) => (
                <span
                  key={idx}
                  className="inline-block animate-[glitch_2s_ease-in-out_infinite]"
                  style={{
                    animationDelay: `${
                      idx * 0.1
                    }s`,
                    background:
                      "linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)",
                    backgroundSize: "200% 200%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor:
                      "transparent",
                    animation: `glitch 2s ease-in-out infinite ${
                      idx * 0.1
                    }s, gradientShift 3s ease infinite`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
          </h2>
        </div>

        {/* Animated line */}
        <div
          className={`w-64 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-0"
          }`}
        />

        {/* Description */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-center max-w-md mb-12 text-sm md:text-base">
            Something extraordinary is on the
            horizon. Be ready for a new era of
            innovation.
          </p>
        </div>

        {/* Social links */}
        <div
          className={`flex gap-6 mt-16 transform transition-all duration-1000 delay-[1200ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {["Twitter", "LinkedIn", "Discord"].map(
            (social, idx) => (
              <div
                key={social}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer hover:scale-110 backdrop-blur-sm"
                style={{
                  animationDelay: `${
                    1400 + idx * 100
                  }ms`,
                }}
              >
                <span className="text-xs font-semibold">
                  {social[0]}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/20" />

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes glitch {
          0%, 100% {
            transform: translateY(0) skew(0deg);
            opacity: 1;
          }
          25% {
            transform: translateY(-5px) skew(-2deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(3px) skew(2deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-2px) skew(-1deg);
            opacity: 0.9;
          }
        }
        @keyframes glitchLogo {
          0%, 100% {
            transform: translateX(0) skew(0deg) scale(1);
            opacity: 1;
          }
          20% {
            transform: translateX(-3px) skew(-1deg) scale(1.02);
            opacity: 0.9;
          }
          40% {
            transform: translateX(3px) skew(1deg) scale(0.98);
            opacity: 1;
          }
          60% {
            transform: translateX(-2px) skew(-0.5deg) scale(1.01);
            opacity: 0.95;
          }
          80% {
            transform: translateX(2px) skew(0.5deg) scale(0.99);
            opacity: 1;
          }
        }
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
