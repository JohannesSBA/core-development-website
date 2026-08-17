import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import {
  MapPin,
  Cpu,
  Smartphone,
  Globe,
  Battery,
  Activity,
  Users,
  Car,
  UserPlus,
  FileText,
  Star,
  Zap,
  Shield,
  Wifi,
  Lock,
  Building2,
  Server,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CORE Charge — Smart EV Charging App",
  description:
    "Africa's first intelligent EV charging platform. Find stations, start sessions, and manage your wallet — smart, fast, and reliable.",
};

// ── Inline SVG badges ───────────────────────────────────────────────────────

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
      <path
        d="M3.5 2.5C3.2 2.8 3 3.3 3 3.9V20.1C3 20.7 3.2 21.2 3.5 21.5L13.5 11.5L3.5 2.5Z"
        fill="#00D4FF"
      />
      <path
        d="M16.8 8.3L5.3 1.8C4.7 1.5 4.1 1.5 3.6 1.8L13.6 11.5L16.8 8.3Z"
        fill="#00F076"
      />
      <path
        d="M13.6 11.5L3.6 21.2C4.1 21.5 4.7 21.5 5.3 21.2L16.8 14.7L13.6 11.5Z"
        fill="#FF3A52"
      />
      <path
        d="M20.4 9.9L16.8 8.3L13.6 11.5L16.8 14.7L20.4 13.1C21.4 12.6 21.4 10.4 20.4 9.9Z"
        fill="#FFC700"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 shrink-0">
      <path d="M17.05 12.04c-.02-2.03 1.66-3.01 1.74-3.06-.95-1.39-2.42-1.58-2.94-1.6-1.25-.13-2.44.73-3.07.73-.64 0-1.62-.71-2.66-.69-1.37.02-2.62.79-3.31 2.01-1.41 2.45-.36 6.07 1 8.06.67.97 1.46 2.06 2.5 2.02 1-.04 1.38-.65 2.59-.65 1.2 0 1.55.65 2.6.63 1.07-.02 1.76-.97 2.42-1.95.76-1.11 1.07-2.2 1.09-2.27-.02-.01-2.08-.8-2.1-3.17l.14-.06z" />
      <path d="M14.78 5.84c.55-.67.93-1.6.83-2.53-.8.03-1.78.54-2.36 1.2-.51.59-.96 1.55-.84 2.46.9.07 1.81-.46 2.37-1.13z" />
    </svg>
  );
}

// ── Store Buttons ────────────────────────────────────────────────────────────

function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com/tr/app/core-charge/id6762530025"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="group flex items-center gap-3 bg-black border border-white/20 rounded-2xl px-5 h-14 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
    >
      <AppleIcon />
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-normal tracking-widest text-white/60 uppercase">
          Download on the
        </span>
        <span
          className="text-[17px] font-semibold text-white mt-0.5"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          App Store
        </span>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=org.coredevelopment.app"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="group flex items-center gap-3 bg-black border border-white/20 rounded-2xl px-5 h-14 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
    >
      <GooglePlayIcon />
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-normal tracking-widest text-white/60 uppercase">
          Available on
        </span>
        <span
          className="text-[17px] font-semibold text-white mt-0.5"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Google Play
        </span>
      </div>
    </a>
  );
}

// ── Phone mockup ─────────────────────────────────────────────────────────────

function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{
        width: "clamp(220px, 30vw, 320px)",
        aspectRatio: "9 / 19.5",
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "44px",
        padding: "11px",
        boxShadow:
          "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
    >
      {/* Dynamic island */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 bg-black rounded-full"
        style={{ top: "14px", width: "34%", height: "19px" }}
      />
      {/* Screen */}
      <div
        className="relative w-full h-full overflow-hidden bg-black/20"
        style={{ borderRadius: "34px" }}
      >
        <Image
          src="/corecharge-screenshot.jpg"
          alt="CORE Charge app map screen showing EV charging stations in Addis Ababa"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const highlights = [
  {
    icon: MapPin,
    title: "Real-Time Map",
    body: "Live station availability and exact pricing before you even leave your parking spot. No surprises. No wasted trips.",
  },
  {
    icon: Cpu,
    title: "Intelligent Battery Technology",
    body: "Proprietary SoC engine supports 200+ EV models across 30 global brands with accuracy that improves over every session.",
  },
  {
    icon: Smartphone,
    title: "Live on Your Lock Screen",
    body: "iOS Live Activity and Dynamic Island keep power, estimated charge, session cost, and wallet balance visible at a glance.",
  },
  {
    icon: Globe,
    title: "Built for Africa",
    body: "ETB wallet top-ups, transparent local pricing, and a charging network purpose-built for Ethiopian roads and cities.",
  },
];

const features: { icon: React.ElementType; label: string }[] = [
  {
    icon: MapPin,
    label: "Real-time station availability and live charger status",
  },
  {
    icon: Battery,
    label: "Estimated State of Charge for AC and DC charging sessions",
  },
  {
    icon: Activity,
    label: "Battery health monitoring with scientific degradation analysis",
  },
  {
    icon: Smartphone,
    label: "iOS Live Activity and Dynamic Island live session tracking",
  },
  {
    icon: Users,
    label: "Smart queue management with real-time position updates",
  },
  { icon: Car, label: "Multi-vehicle profile support for up to 3 vehicles" },
  {
    icon: UserPlus,
    label: "Guest vehicle mode for operators charging customer cars",
  },
  {
    icon: FileText,
    label: "Instant digital receipts with full session details",
  },
  { icon: Star, label: "Loyalty rewards on every charging session" },
  { icon: Zap, label: "Power outage detection with proximity alerts" },
  {
    icon: Shield,
    label: "Idle fee protection with automatic session safeguards",
  },
  { icon: Wifi, label: "Offline-ready with intelligent data caching" },
  {
    icon: Lock,
    label: "Bank-grade security with end-to-end encrypted transactions",
  },
];

const stats = [
  { value: "200+", label: "EV Models supported" },
  { value: "30+", label: "Global brands" },
  { value: "3", label: "Vehicle profiles per account" },
  { value: "99.9%", label: "Platform uptime target" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CoreChargePage() {
  return (
    <>
      <Navbar />

      <div
        className="text-white"
        style={{
          background:
            "linear-gradient(180deg, #0b3236 0%, #0d3a3e 40%, #0c2f32 100%)",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Ambient glow — fixed so it stays as you scroll */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56,189,178,0.13) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Copy */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-4 py-1.5 mb-8">
              <span className="text-teal-300 text-xs font-medium tracking-widest uppercase">
                Now Live on iOS and Android
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
            >
              Africa's First Intelligent EV Charging Platform
            </h1>

            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
              Find stations, start sessions, and manage your wallet — with
              faster sign-in and a smoother experience on any connection.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>

          {/* Phone */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────────────── */}
        <section
          className="relative z-10"
          style={{
            boxShadow: "0 1px 0 0 rgba(0,0,0,0.4), 0 -1px 0 0 rgba(0,0,0,0.4)",
          }}
        >
          <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center gap-1"
              >
                <span className="text-3xl font-bold text-white tracking-tight">
                  {s.value}
                </span>
                <span className="text-white/40 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HIGHLIGHTS ────────────────────────────────────────────────── */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-white font-bold text-3xl sm:text-4xl tracking-tight">
              Find. Charge. Go.
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto text-base leading-relaxed">
              Designed from the ground up for the modern African EV driver —
              reliability, transparency, and precision at every charge.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 rounded-2xl bg-white/4 p-6 hover:bg-white/7 transition-all duration-200"
                style={{
                  boxShadow:
                    "0 2px 16px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.25)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-teal-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE LIST + SECOND PHONE ───────────────────────────────── */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <div
            className="rounded-3xl bg-white/3 overflow-hidden"
            style={{
              boxShadow:
                "0 2px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Feature list */}
              <div
                className="p-10 lg:p-14"
                style={{ boxShadow: "inset -1px 0 0 rgba(0,0,0,0.3)" }}
              >
                <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-2">
                  Everything you need, nothing you don't
                </h2>
                <p className="text-white/40 text-sm mb-10">
                  Every session fully audited. Every transaction encrypted.
                  Every receipt instant.
                </p>

                <ul className="space-y-4">
                  {features.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-5 h-5 shrink-0 text-teal-400/70">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="text-white/65 text-sm leading-snug">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Second phone mockup */}
              <div className="flex items-center justify-center p-10 lg:p-14">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── OPERATOR + ENTERPRISE ─────────────────────────────────────── */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-5 sm:grid-cols-2">
            <div
              className="rounded-2xl bg-white/4 p-8"
              style={{
                boxShadow:
                  "0 2px 16px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.25)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center mb-6">
                <Building2
                  className="w-5 h-5 text-teal-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                Operator Ready
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Operator accounts support guest vehicle profiles, enabling
                seamless customer charging without saving personal data — ideal
                for hotels, parking facilities, and commercial charging
                businesses.
              </p>
            </div>

            <div
              className="rounded-2xl bg-white/4 p-8"
              style={{
                boxShadow:
                  "0 2px 16px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.25)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 flex items-center justify-center mb-6">
                <Server className="w-5 h-5 text-teal-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                Enterprise-Grade Infrastructure
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Powered by OCPP 1.6J certified communication, real-time network
                health monitoring, and automatic session recovery — engineered
                for 99.9% uptime and built to scale across Ethiopia and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="relative z-10 pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div
              className="mx-auto max-w-2xl text-center rounded-3xl bg-white/4 px-10 py-16"
              style={{
                boxShadow:
                  "0 2px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
                Get Started
              </span>
              <h2 className="mt-4 text-white font-bold text-3xl sm:text-4xl tracking-tight">
                Charging smarter starts here.
              </h2>
              <p className="mt-4 text-white/50 text-base">
                Join Africa's EV revolution. Download CORE Charge today.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
