import { Globe } from "@/components/magicui/globe";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen w-full">
      <div className="absolute inset-0 flex flex-col items-center">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mt-24 mb-10">
          SusCampus
        </span>
        <Globe />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}
