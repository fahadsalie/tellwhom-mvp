"use client";
import { useState } from "react";

function isEdu(email: string){
  return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.edu\.au\b$/i.test(email);
}

export function EmailGuard(){
  const [email, setEmail] = useState("");
  const valid = isEdu(email);
  return (
    <div className="card p-5 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="text-lg font-semibold">Please verify your student email address to access all features</div>
          <p className="text-slate-600 text-sm">
            To be considered a student profile, a valid <code>.edu.au</code> email is required.
          </p>
        </div>
        <div className="hidden sm:block pill border-slate-300">Student</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="your.name@university.edu.au"
          className="input"
          aria-invalid={!valid && email.length>0}
        />
        <button disabled={!valid} className="btn btn-primary disabled:opacity-50">Verify</button>
      </div>
      {!valid && email.length>0 && (
        <div className="text-red-600 text-sm">
          Error: Student email must end with <strong>.edu.au</strong>.
        </div>
      )}
    </div>
  );
}
