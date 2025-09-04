import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
      <aside className="flex flex-col items-center space-y-2">
        <p className="font-semibold">Ander Barbot</p>
        <p>Phone: <a href="tel:2082302102" className="link">208-230-2102</a></p>
        <p>Address: 3102 N Treasure Dr, Boise, ID 83703</p>
        <p>Email: <a href="mailto:anderbarbot@gmail.com" className="link">anderbarbot@gmail.com</a></p>
        <div className="flex space-x-4 mt-2">
          <Link href="https://www.facebook.com" className="link" target="_blank" aria-label="Facebook">
            Facebook
          </Link>
          <Link href="https://www.linkedin.com" className="link" target="_blank" aria-label="LinkedIn">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com" className="link" target="_blank" aria-label="Instagram">
            Instagram
          </Link>
        </div>
      </aside>
    </footer>
  );
}
