import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Incrementador",
  description: "Teste de reatividade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
