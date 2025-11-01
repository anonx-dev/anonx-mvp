'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { clearPersistedUser, persistSessionUser, getPersistedUser } from './lib/clientStorage';

const heroHighlights = [
  'Zero-identity posting with real-time encryption',
  'Intelligent feed curated for anonymous voices',
  'Community-led moderation over algorithm walls',
  'Verified drops & events for members-only access',
];

const testimonials = [
  {
    id: 1,
    handle: 'anon43',
    timeAgo: '3m ago',
    content:
      '“We just rolled out encrypted threads — ask me anything without revealing your origin.”',
    reactions: { fire: 128, comments: 12, reposts: 6 },
  },
  {
    id: 2,
    handle: 'anon86',
    timeAgo: '6m ago',
    content:
      '“Meeting founders from three continents in one anonymous room felt surreal. AnonX is wild.”',
    reactions: { fire: 256, comments: 24, reposts: 12 },
  },
  {
    id: 3,
    handle: 'anon129',
    timeAgo: '9m ago',
    content:
      '“If you crave liberation from social algorithms, this is the only space I trust.”',
    reactions: { fire: 384, comments: 30, reposts: 18 },
  },
];

const HomePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const isAuthenticating = status === 'loading';

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      const { id, name, email, image, isAnonymous } = session.user;

      persistSessionUser({ id, name, email, image, isAnonymous });
      router.replace('/feed');
    }
  }, [router, session, status]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      clearPersistedUser();
    }
  }, [status]);

  useEffect(() => {
    const storedUser = getPersistedUser();
    if (storedUser && status === 'loading') {
      router.replace('/feed');
    }
  }, [router, status]);

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/feed' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.28),_transparent_55%)] blur-3xl" />
        <div className="absolute left-16 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.4),_transparent_60%)] blur-2xl" />
        <div className="absolute right-24 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.35),_transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:py-8">
          <div className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ANONX
            </span>
          </div>
          <div className="flex items-center gap-4">
            {status === 'authenticated' ? (
              <Link
                href="/feed"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-200"
              >
                Go to Feed
                <ArrowRight size={16} />
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Sign in
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </nav>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-10 md:flex-row md:items-center md:gap-16 md:pt-20">
          <section className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-200/80">
              <Sparkles size={14} className="text-blue-300" />
              Next-gen anonymity
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Speak freely. Connect deeply. Stay truly anonymous.
            </h1>
            <p className="max-w-xl text-base text-gray-300 md:text-lg">
              AnonX is your encrypted social playground where honest voices shine without compromise. Join a trusted
              community that values privacy, creativity, and real conversations.
            </p>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/90">Continue with Google</p>
                  <p className="text-xs text-gray-400">Secure OAuth via Gmail — no passwords, no tracking.</p>
                </div>
                <button
                  onClick={handleGoogleSignIn}
                  disabled={isAuthenticating}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(96,165,250,0.35)] transition hover:scale-[1.02] hover:shadow-[0_14px_50px_rgba(96,165,250,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isAuthenticating ? 'Connecting…' : 'Sign in with Gmail'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <ul className="grid gap-4 text-sm text-gray-300 md:grid-cols-2 md:text-base">
              {heroHighlights.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-[2px] text-blue-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black/60 p-8 shadow-[0_30px_80px_rgba(14,63,148,0.2)]">
              <div className="absolute inset-x-6 top-6 flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                Real-time feed preview
              </div>
              <div className="mt-16 space-y-6">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-gray-300 backdrop-blur"
                  >
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{item.handle}</span>
                      <span>{item.timeAgo}</span>
                    </div>
                    <p className="mt-3 text-white">{item.content}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                      <span>🔥 {item.reactions.fire}</span>
                      <span>💬 {item.reactions.comments}</span>
                      <span>↪ {item.reactions.reposts}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5 text-sm text-blue-100 backdrop-blur">
                <p className="font-semibold text-blue-200">Encrypted identity vault</p>
                <p className="mt-2 text-blue-100/80">
                  Once you authenticate with Google, we store only the essentials locally so you jump back in instantly.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
