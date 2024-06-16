import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweeps",
  description: "WIN PRIZES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
