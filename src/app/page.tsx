import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-base-100 text-base-content flex justify-center px-4 py-10 overflow-x-hidden">
      <div className="w-full max-w-3xl flex flex-col gap-20">
    


        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-20">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p>
              bio
            </p>
          </div>
        </section>



        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start">2023</div>
              <div className="timeline-middle">
                <div className="badge badge-primary"></div>
              </div>
              <div className="timeline-end mb-10">
                <h3 className="font-semibold">Software Engineer @ Company X</h3>
                <p className="text-sm opacity-70">description</p>
              </div>
            </li>
            <li>
              <div className="timeline-start">2021</div>
              <div className="timeline-middle">
                <div className="badge badge-secondary"></div>
              </div>
              <div className="timeline-end mb-10">
                <h3 className="font-semibold">Dev @ company Y</h3>
                <p className="text-sm opacity-70">description</p>
              </div>
            </li>
            {/* Add more as needed */}
          </ul>
        </section>




        {/* WORK SECTION */}
        <section id="work" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">Selected Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Work Card */}
            <div className="card bg-base-200 shadow-md">
              <figure>
                <Image src="/project1.png" alt="Project 1" width={400} height={250} className="rounded-t-xl object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project One</h3>
                <p className="text-sm opacity-70">description.</p>
                <div className="card-actions justify-end mt-2">
                  <Link href="#" className="btn btn-sm btn-outline">View</Link>
                </div>
              </div>
            </div>
            {/* Duplicate for more work */}
          </div>
        </section>



        {/* GUESTBOOK SECTION */}
        <section id="guestbook" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">Guestbook</h2>
          <div className="bg-base-200 p-6 rounded-lg shadow-md space-y-4">
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Your name" className="input input-bordered w-full" />
              <textarea placeholder="Leave a message..." className="textarea textarea-bordered w-full" rows={3}></textarea>
              <button type="submit" className="btn btn-primary self-end">Sign</button>
            </form>


            <div className="divider">Messages</div>
            <div className="space-y-2">
              <div className="bg-base-100 p-4 rounded-lg border">
                <p className="text-sm">"super hello! – Jane"</p>
              </div>
              <div className="bg-base-100 p-4 rounded-lg border">
                <p className="text-sm">"hello – Dev123"</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}