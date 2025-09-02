# TellWhom MVP (Next.js + Tailwind)

A clean, LinkedIn‑inspired MVP web app that matches your prototypes.
It includes:
- Student Home (search, email verification banner, ads, job preferences)
- Profile Edit (company/student fields)
- Company View with tabs (Company / Employees / Posts)
- Student View with tabs (Student / Post), Video CV placeholder
- Reusable components (NavBar, ProfileHeader, Tabs, EmailGuard, VideoPlayer)

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Where to edit
- `app/page.tsx` — student home
- `app/profile/page.tsx` — profile creation/edit
- `app/company/[id]/page.tsx` — company profile view
- `app/student/[id]/page.tsx` — student profile view
- `components/*` — shared UI pieces

## Notes
- Styling is Tailwind with a modern, accessible light theme (LinkedIn‑like).
- EmailGuard enforces `.edu.au` addresses and shows an inline error message.
- VideoPlayer shows a graceful placeholder if no source is provided.
- Replace demo data with your backend later (Firebase/Next API/Zoho/SEEK/BuyICT, etc.).
