export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Startup Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          One dashboard for all startup metrics
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Stripe, Google Analytics, and social platforms. Get every KPI in one place — updated automatically, no spreadsheets needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $29/mo
        </a>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["MRR", "Stripe"],
            ["Sessions", "Google Analytics"],
            ["Followers", "Social Media"],
            ["Churn", "Real-time"],
          ].map(([metric, source]) => (
            <div key={metric} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{metric}</div>
              <div className="text-[#8b949e] text-xs mt-1">{source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Stripe MRR, ARR & churn tracking",
              "Google Analytics sessions & conversions",
              "Twitter, LinkedIn & Instagram metrics",
              "Automated daily data sync",
              "Shareable investor reports",
              "Unlimited team members",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "Which integrations are supported?",
              "We support Stripe, Google Analytics, Twitter, LinkedIn, Instagram, and more integrations are added regularly.",
            ],
            [
              "How often is data refreshed?",
              "Metrics sync automatically every 24 hours. You can also trigger a manual refresh at any time from your dashboard.",
            ],
            [
              "Can I share the dashboard with investors?",
              "Yes. Generate a read-only shareable link for any investor or stakeholder — no account required on their end.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} Startup KPI Dashboard. All rights reserved.
      </footer>
    </main>
  )
}
