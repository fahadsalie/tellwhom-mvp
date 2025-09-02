import { User2, Building2 } from "lucide-react";

export function ProfileHeader({
  name, headline, location, connections, avatar = "student"
}: { name: string; headline: string; location: string; connections?: number; avatar?: "student"|"company"}){
  return (
    <section className="card p-6 flex flex-col items-center text-center gap-4">
      <div className="rounded-full bg-slate-100 p-6">
        {avatar === "company" ? <Building2 size={56}/> : <User2 size={56}/>}
      </div>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="text-slate-600">{location}</div>
        <div className="text-lg">{headline}</div>
        {connections != null && <div className="text-slate-600">{connections} Connections</div>}
      </div>
      <button className="btn btn-primary text-lg px-8">Message</button>
    </section>
  )
}
