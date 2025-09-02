"use client";
import { useState } from "react";
import clsx from "clsx";

export function Tabs({ tabs }: { tabs: {id: string; label: string; content: React.ReactNode;}[] }){
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={()=>setActive(t.id)}
            className={clsx(
              "pill",
              active===t.id ? "bg-brand-600 text-white border-brand-600" : "border-slate-300 hover:bg-slate-100"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.find(t => t.id===active)?.content}
      </div>
    </div>
  );
}
