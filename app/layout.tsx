import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Startup KPI Dashboard — One dashboard for all startup metrics",
  description: "Aggregates key metrics from Stripe, Google Analytics, social media, and other tools into a single startup KPI dashboard."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cd27cc2b-1c87-4f3d-9a75-8539afe62242"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
