import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
      <aside className="flex flex-col items-center space-y-2">
        <a href="tel:2082302102" className="link font-semibold">208-230-2102</a>
        <p className="font-semibold">3102 N Treasure Dr, Boise, ID 83703</p>
        <a href="mailto:anderbarbot@gmail.com" className="link font-semibold">anderbarbot@gmail.com</a>
        <div className="flex space-x-4 mt-2">
          <Link href="https://www.facebook.com/ander.barbot/" className="link font-semibold" target="_blank" aria-label="Facebook">
            Facebook
          </Link>
          <Link href="https://www.https://www.linkedin.com/in/ander-barbot-025627183.com" className="link font-semibold" target="_blank" aria-label="LinkedIn">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com" className="link font-semibold" target="_blank" aria-label="Instagram">
            Instagram
          </Link>
        </div>
      </aside>
    </footer>
  );
}
