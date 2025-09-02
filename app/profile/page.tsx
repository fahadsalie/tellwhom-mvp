export default function ProfileEdit() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="card p-5 space-y-2">
          <label className="label">Enter Company Name</label>
          <input className="input" placeholder="[Company_Name]" />
        </div>
        <div className="card p-5 space-y-2">
          <label className="label">Headline</label>
          <input className="input" placeholder="[headlines]" />
        </div>
        <div className="card p-5 space-y-2">
          <label className="label">Email</label>
          <input className="input" placeholder="[C_Email]" />
        </div>
        <div className="card p-5 space-y-2">
          <label className="label">Industry Type</label>
          <input className="input" placeholder="[C_industry_type]" />
        </div>
        <div className="card p-5 space-y-2">
          <label className="label">Location*</label>
          <input className="input" placeholder="[location]" />
          <button className="btn btn-ghost">Use GPS</button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="card p-5 space-y-2">
          <label className="label">About</label>
          <textarea className="input h-40" placeholder="[about]" />
        </div>
        <div className="card p-5 space-y-2">
          <label className="label">Video CV (URL)</label>
          <input className="input" placeholder="https://…" />
          <p className="text-xs text-slate-500">We&apos;ll embed this if it&apos;s a public link.</p>
        </div>
        <button className="btn btn-primary w-full">Save Profile</button>
      </div>
    </div>
  );
}
