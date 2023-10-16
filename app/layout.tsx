import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ref Buddy landing page",
  description:
    "Tailored specifically for hockey officials and assignors, Ref Buddy merges intuitive design with powerful features to transform the way you handle game assignments and track performance. With our unique, real-time stat tracking, officials can demonstrate their abilities, growth, and readiness for higher level games. This objective, data-driven approach ensures fair opportunities and aids in the professional development of every official. By focusing not just on assignment, but also on performance tracking, Ref Buddy fosters a culture of continuous improvement and high standards in the world of hockey officiating.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
