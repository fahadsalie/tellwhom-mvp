import { Tabs } from "@/components/Tabs";
import { ProfileHeader } from "@/components/ProfileHeader";

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <ProfileHeader
        name="GovRecruit Pty Ltd"
        headline="Specialists in BuyICT recruitment"
        location="Canberra, ACT"
        connections={25}
        avatar="company"
      />
      <Tabs
        tabs={[
          { id: "company", label: "Company", content: <CompanyInfo/> },
          { id: "employees", label: "Employees", content: <div className='card p-5'>Employee list (demo)</div> },
          { id: "posts", label: "Posts", content: <div className='card p-5'>Company posts (demo)</div> },
        ]}
      />
    </div>
  );
}

function CompanyInfo(){
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card p-5 space-y-4">
        <h3 className="text-xl font-semibold">About</h3>
        <p className="text-slate-700">GovRecruit connects government agencies with exceptional ICT talent through the BuyICT panel.</p>
      </div>
      <div className="space-y-4">
        <div className="card p-5 space-y-2">
          <div className="text-sm text-slate-500">Website Link</div>
          <div>https://www.govrecruit.com.au</div>
        </div>
        <div className="card p-5 space-y-2">
          <div className="text-sm text-slate-500">Industry</div>
          <div>Recruitment</div>
        </div>
        <div className="card p-5 space-y-2">
          <div className="text-sm text-slate-500">Contact Info</div>
          <div>hello@govrecruit.com.au</div>
        </div>
        <div className="card p-5 space-y-2">
          <div className="text-sm text-slate-500">Location</div>
          <div>Canberra, ACT</div>
        </div>
      </div>
    </div>
  )
}
