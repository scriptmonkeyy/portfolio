import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = [
    { title: 'Project I', position: 'top-0 left-0' },
    { title: 'Project II', position: 'top-0 right-0' },
    { title: 'Project III', position: 'bottom-0 left-0' },
    { title: 'Project IV', position: 'bottom-0 right-0' },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4 text-white">
      <div className="relative w-[900px] h-[600px] max-w-full max-h-full">
        <div className="absolute top-1/2 left-1/2 z-10 flex flex-col items-center text-center -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-52 h-52 mb-12">
            <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px]">
              <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-cyan-400 animate-spin"></div>
              <div className="absolute inset-0 rounded-full border-l-4 border-r-4 border-cyan-400 animate-spin-reverse opacity-80"></div>
            </div>
            <Image
              src="/avatar.png"
              alt="Profile Avatar"
              fill
              className="rounded-full z-10 relative object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold font-space">Script Monkeyy</h1>
          <p className="text-sm text-gray-400">Junior Copy + Scrip + Ctrl-Z Specialist</p>
        </div>

        {projects.map((proj, idx) => (
          <ProjectCard key={idx} title={proj.title} position={proj.position} />
        ))}
      </div>
    </main>
  );
}
