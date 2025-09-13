'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaLinkedinIn, FaFileDownload } from 'react-icons/fa';

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-1000">
      <div className={`fab fab-flower ${open ? 'active' : ''}`}>
        {/* Trigger FAB */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-success"
          onClick={() => setOpen(!open)}
          title="Contact Me"
        >
          <FaUser />
        </div>

        {/* Main button when FAB is open */}
        <a
          href="/AnderBarbotResume.pdf"
          download
          className="btn btn-lg btn-circle"
          title="Learn About Me"
        >
          <FaFileDownload />
        </a>

        <a
          href="tel:2082302102"
          className="btn btn-lg btn-circle"
          title="Call Me at 208-230-2102"
        >
          <FaPhone />
        </a>

        <a
          href="mailto:anderbarbot@gmail.com"
          className="btn btn-lg btn-circle"
          title="Email Me at anderbarbot@gmail.com"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=3102+N+Treasure+Dr+Boise+ID+83703"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-circle"
          title="Find me"
        >
          <FaMapMarkerAlt />
        </a>

        <a
          href="https://www.linkedin.com/in/ander-barbot-025627183"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-circle"
          title="Connect with me"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
