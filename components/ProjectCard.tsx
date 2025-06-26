type ProjectCardProps = {
  title: string;
  position: string;
};

export default function ProjectCard({ title, position }: ProjectCardProps) {
  return (
    <div
      className={`absolute ${position} w-[250px] h-[150px] bg-zinc-900 border border-cyan-400 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-transform flex items-center justify-center text-center`}
    >
      <h2 className="text-xl font-semibold font-space">{title}</h2>
    </div>
  );
}
