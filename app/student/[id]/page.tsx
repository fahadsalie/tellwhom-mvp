import { ProfileHeader } from "@/components/ProfileHeader";
import { Tabs } from "@/components/Tabs";
import { VideoPlayer } from "@/components/VideoPlayer";

export default function StudentPage(){
  return (
    <div className="space-y-6">
      <ProfileHeader
        name="Hello World"
        headline="Aspiring Business Analyst"
        location="Canberra, ACT"
        connections={25}
        avatar="student"
      />

      <Tabs
        tabs={[
          { id:"student", label:"Student", content: <StudentTab/> },
          { id:"posts", label:"Post", content: <div className='card p-5'>Posts placeholder</div> }
        ]}
      />
    </div>
  )
}

function StudentTab(){
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="card p-5 space-y-2">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="text-slate-700">Motivated student focusing on data and analysis with strong communication skills.</p>
        </div>
        <div className="card p-5 space-y-2">
          <h3 className="text-xl font-semibold">Resume</h3>
          <a className="pill border-slate-300 inline-block" href="#" onClick={e=>e.preventDefault()}>View</a>
        </div>
        <div className="card p-5 space-y-2">
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Intern, Gov Agency (2024)</li>
            <li>Volunteer, Uni Society (2023)</li>
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <div className="card p-5 space-y-2">
          <h3 className="text-xl font-semibold">Video CV</h3>
          <VideoPlayer src="" />
        </div>
      </div>
    </div>
  );
}
