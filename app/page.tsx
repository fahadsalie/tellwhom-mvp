import Link from "next/link";
import { EmailGuard } from "@/components/EmailGuard";
import { Search, Filter } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <EmailGuard />

      <section className="flex items-center gap-3">
        <button className="btn btn-ghost rounded-full p-3" title="Filters">
          <Filter />
        </button>
        <div className="flex-1 card p-2">
          <div className="flex items-center gap-2">
            <Search className="shrink-0" />
            <input placeholder="Search…" className="input border-0 focus:ring-0" />
          </div>
        </div>
        <Link href="/profile" className="pill border-slate-300">Edit Profile</Link>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Hey, [first_name]</h2>
        <p className="text-slate-600">We&apos;re here to support you reach your dream job</p>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Advertisements</h3>
          <Link href="#" className="text-brand-600 font-medium">See all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({length:3}).map((_,i)=>(
            <div key={i} className="card p-4">
              <div className="font-semibold">Sponsored role #{i+1}</div>
              <p className="text-sm text-slate-600">Find opportunities tailored to your skills and interests</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Jobs Preferences</h3>
          <Link href="#" className="text-brand-600 font-medium">See all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Frontend Developer","Business Analyst"].map((title,i)=>(
            <div key={i} className="card p-5">
              <div className="text-lg font-bold">{title}</div>
              <div className="text-sm text-slate-600">[Company_Name] · Canberra</div>
              <div className="mt-4">
                <Link href={`/student/123`} className="btn btn-primary">View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
