import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutsProvider from "@/context/WorkoutsContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FitLog — Workout Library",
    template: "%s | FitLog",
  },
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="fitlog"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base-100 font-sans text-white">
        <WorkoutsProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

          <ToastContainer theme="dark" position="bottom-right" autoClose={2500} />
        </WorkoutsProvider>
      </body>
    </html>
  );
}
