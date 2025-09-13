import ProjectCarousel from "@/components/ProjectCarousel";
import Guestbook from "@/components/Guestbook";
import Experience from "@/components/Experience";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-base-100 text-base-content pt-20 px-4 py-10 overflow-x-hidden">
      <div className="w-full flex flex-col gap-20">

        <About/>

        <Experience />

        <ProjectCarousel />

        <div className="scroll-smooth scroll-snap-y-mandatory" style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh' }}>
          <Guestbook />
        </div>

      </div>
    </main>
  );
}