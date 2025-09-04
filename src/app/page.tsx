import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center m-auto p-5">
      {/* Hero Section */}
      <div className="bg-base-200 p-8 rounded-xl shadow-lg border border-base-content/10 max-w-xl w-full text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/profile.jpg"
            width={120}
            height={120}
            alt="Ander Barbot"
            className="rounded-full border border-base-content/20"
          />
        </div>
        <h1 className="text-3xl font-bold">Ander Barbot</h1>
        <p className="text-sm mt-2 opacity-80">
          Full-stack developer based in Boise, ID. Passionate about crafting scalable web apps, clean UI, and solving meaningful problems through code.
        </p>
        <div className="divider my-6"></div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="btn btn-primary btn-sm">
            About Me
          </Link>
          <Link href="/portfolio" className="btn btn-secondary btn-sm">
            View Portfolio
          </Link>
          <a
            href="/resume.pdf"
            className="btn btn-outline btn-sm"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="text-center text-sm opacity-60">
        <p>Email: <a href="mailto:anderbarbot@gmail.com" className="link">anderbarbot@gmail.com</a></p>
        <p>Phone: <a href="tel:2082302102" className="link">208-230-2102</a></p>
        <p>Location: 3102 N Treasure Dr, Boise, ID 83703</p>
      </div>
    </div>
  );
}
