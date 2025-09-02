export function VideoPlayer({ src }: { src?: string }){
  if(!src){
    return (
      <div className="aspect-video w-full grid place-items-center rounded-xl border border-dashed border-slate-300 text-slate-500">
        Video Player misconfigured
      </div>
    );
  }
  return (
    <video className="w-full rounded-xl" src={src} controls />
  );
}
