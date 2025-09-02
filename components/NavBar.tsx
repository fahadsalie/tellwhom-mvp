"use client";
import Link from "next/link";
import { Bell, Search, Menu } from "lucide-react";

export function NavBar(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex h-14 items-center gap-3">
        <button className="btn btn-ghost rounded-full p-2"><Menu/></button>
        <Link href="/" className="font-semibold text-xl tracking-tight">TellWhom</Link>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/profile" className="pill border-slate-300">Profile</Link>
          <button className="btn btn-ghost rounded-full p-2" title="Search"><Search/></button>
          <button className="btn btn-ghost rounded-full p-2" title="Notifications"><Bell/></button>
        </div>
      </div>
    </header>
  )
}
