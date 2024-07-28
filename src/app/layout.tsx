import type { Metadata } from "next";
import "./globals.css";
import Theme from "@/lib/theme/Theme";
import { AuthProvider } from "@/components/AuthContext";
import NextAuthProvider from "@/components/NextAuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <NextAuthProvider>
          <AuthProvider>
            <Theme>{children}</Theme>
          </AuthProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
