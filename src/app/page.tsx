import ProjectCarousel from "@/components/ProjectCarousel";
import Guestbook from "@/components/Guestbook";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-base-100 text-base-content flex justify-center pt-16 px-4 py-10 overflow-x-hidden">
      <div className="w-full max-w-3xl flex flex-col gap-20">



        {/*about*/}
        <section id="about" className="scroll-mt-20">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p>
              bio
            </p>
          </div>
        </section>



        {/* Experience/Education */}
        <section id="experience" className="scroll-mt-20 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
          <div className="relative flex justify-center items-start gap-6 max-w-5xl mx-auto h-[450px] group">
            {/* CS */}
            <div className="relative w-1/2 h-full z-10 transition-all duration-500 ease-in-out bg-base-200 rounded-xl p-6 shadow-md
            group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-60
            hover:z-20 hover:scale-[1.5] hover:-translate-x-12 hover:opacity-100 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
              <div className="space-y-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="font-medium">Objective</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
                <div>
                  <h4 className="font-medium">Work Experience</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
                <div>
                  <h4 className="font-medium">Skills / Certs</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
              </div>
            </div>

            {/* BS */}
            <div className="relative w-1/2 h-full z-10 transition-all duration-500 ease-in-out bg-base-200 rounded-xl p-6 shadow-md group-hover:scale-100 
            group-hover:translate-x-0 group-hover:opacity-60 hover:z-20 hover:scale-[1.5] hover:translate-x-12 hover:opacity-100 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <div className="space-y-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="font-medium">Objective</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
                <div>
                  <h4 className="font-medium">Work Experience</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
                <div>
                  <h4 className="font-medium">Skills / Certs</h4>
                  <p className="text-sm">[placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <ProjectCarousel />


        <Guestbook/>


      </div>
    </main>
  );
}