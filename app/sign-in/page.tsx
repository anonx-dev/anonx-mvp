"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import {
  clearPersistedUser,
  getPersistedUser,
  persistSessionUser,
} from "../lib/clientStorage";

const SignInPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isAnonymousLoading, setIsAnonymousLoading] = useState(false);

  const isCheckingSession = status === "loading";

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const { id, name, email, image, isAnonymous } = session.user;

      persistSessionUser({ id, name, email, image, isAnonymous });
      router.replace("/feed");
    }
  }, [router, session, status]);

  useEffect(() => {
    if (status === "unauthenticated") {
      clearPersistedUser();
    }
  }, [status]);

  useEffect(() => {
    const storedUser = getPersistedUser();
    if (storedUser && status === "loading") {
      router.replace("/feed");
    }
  }, [router, status]);

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/feed" });
  };

  const handleAnonymousSignIn = async () => {
    setIsAnonymousLoading(true);
    try {
      const response = await signIn("anonymous", {
        redirect: false,
        callbackUrl: "/feed",
      });
      if (!response?.error) {
        router.replace(response?.url ?? "/feed");
      }
    } finally {
      setIsAnonymousLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.35),_transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_65%)]" />

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/70 p-8 shadow-[0_20px_80px_rgba(59,130,246,0.25)] backdrop-blur">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-gray-200"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <span className="text-sm font-semibold text-blue-200">ANONX</span>
        </div>

        <div className="mt-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-200/80">
            <Sparkles size={14} className="text-blue-300" />
            Join the network
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Sign in to AnonX
          </h1>
          <p className="text-sm text-gray-400">
            Use your Google account to access verified drops, curated feeds, and
            encrypted communities. Your identity never leaves your device.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={isCheckingSession}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(96,165,250,0.45)] transition hover:scale-[1.01] hover:shadow-[0_18px_60px_rgba(96,165,250,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isCheckingSession ? "Checking session…" : "Continue with Gmail"}
            <ArrowRight size={16} />
          </button>

          <button
            onClick={handleAnonymousSignIn}
            disabled={isCheckingSession || isAnonymousLoading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:text-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isCheckingSession || isAnonymousLoading
              ? "Preparing…"
              : "Explore anonymously"}
          </button>
        </div>

        <div className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3 text-sm text-white/80">
            <ShieldCheck size={18} className="text-blue-300" />
            <span>
              Zero tracking — we only store an encrypted session locally for
              instant re-entry.
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Disconnect anytime from your profile menu. We immediately clear
            local and session data when you sign out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
