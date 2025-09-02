import "./globals.css";
import { ReactNode } from "react";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "TellWhom MVP",
  description: "Student ↔ Employer matching (MVP)"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <NavBar />
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
