import ProjectCarousel from "@/components/ProjectCarousel";
import Guestbook from "@/components/Guestbook";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-base-100 text-base-content pt-16 px-4 py-10 overflow-x-hidden">
      <div className="w-full flex flex-col gap-20">

        <section id="about" className="scroll-mt-20 w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p>
              bio
            </p>
          </div>
        </section>

        <Experience />

        <ProjectCarousel />

        <div className="scroll-smooth scroll-snap-y-mandatory" style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh' }}>
          <Guestbook />
        </div>

      </div>
    </main>
  );
}