'use client';

import { useState, useEffect } from "react";

type ResumeSection = {
  Objective: string;
  Education: {
    Degree: string;
    Institution: string;
    Graduation: string;
    Highlights: string[];
  };
  "Work Experience": {
    Role: string;
    Company: string;
    Location: string;
    Dates: string;
    Highlights: string[];
  }[];
  "Skills / Certs": Record<string, string[]>;
};

type ResumeData = {
  CS: ResumeSection;
  BS: ResumeSection;
};

export default function StackedCards() {
  const [selected, setSelected] = useState<"CS" | "BS">("CS");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch('/resume.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load resume');
        return res.json();
      })
      .then(data => {
        setResume(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function cardPosition(key: "CS" | "BS") {
    if (!isSmallScreen) return {};

    if (selected === key) {
      return {
        top: '35px',
        zIndex: 20,
        transform: 'translateY(32px)',
        opacity: 1,
        cursor: 'default',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.35)',
      };
    } else {
      return {
        top: '-20px',
        zIndex: 10,
        transform: 'translateY(20px)',
        opacity: 0.7,
        cursor: 'pointer',
      };
    }
  }

  if (loading) {
    return (
      <section id="experience" className="scroll-mt-20 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
        <p className="text-center">Loading...</p>
      </section>
    );
  }

  if (error || !resume) {
    return (
      <section id="experience" className="scroll-mt-20 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
        <p className="text-center text-red-500">{error || "No resume data found."}</p>
      </section>
    );
  }

  function renderSection(key: "CS" | "BS") {
    if (!resume) return null;
    const data = resume[key];
    return (
      <div className="space-y-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <div>
          <h4 className="font-medium">Objective</h4>
          <p className="text-sm">{data.Objective}</p>
        </div>
        <div>
          <h4 className="font-medium">Education</h4>
          <p className="text-sm font-semibold">{data.Education.Degree}</p>
          <p className="text-sm">{data.Education.Institution} &mdash; {data.Education.Graduation}</p>
          <ul className="list-disc list-inside text-sm mt-1">
            {data.Education.Highlights.map((hl, i) => (
              <li key={i}>{hl}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Work Experience</h4>
          {data["Work Experience"].map((job, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm font-semibold">{job.Role} @ {job.Company}</p>
              <p className="text-xs">{job.Location} &mdash; {job.Dates}</p>
              <ul className="list-disc list-inside text-sm mt-1">
                {job.Highlights.map((hl, j) => (
                  <li key={j}>{hl}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-medium">Skills / Certs</h4>
          {Object.entries(data["Skills / Certs"]).map(([cat, items], i) => (
            <div key={i}>
              <span className="text-xs font-semibold">{cat}:</span>
              <ul className="list-disc list-inside text-sm ml-4">
                {items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="experience" className="scroll-mt-20 py-12">
      <div
        className={`relative max-w-5xl mx-auto group 
        ${isSmallScreen ? 'w-full h-[80vh]' : 'flex justify-center items-start gap-6'}`}
      >
        {/* CS */}
        <div
          onClick={() => isSmallScreen && setSelected("CS")}
          style={cardPosition("CS")}
          className={`card card-compact bg-base-200 shadow-xl transition-all duration-500 ease-in-out
            ${isSmallScreen 
              ? 'absolute left-1/2 -translate-x-1/2 w-11/12 h-full' 
              : 'relative flex-1 min-w-0'}
            ${!isSmallScreen ? 'hover:scale-[1.4] hover:z-20 hover:shadow-2xl hover:-translate-x-[-70px] hover:opacity-100' : ''}
          `}
        >
          <div className="card-body cursor-pointer">
            <h3 className="card-title">Computer Science</h3>
            {(selected === "CS" || !isSmallScreen) && renderSection("CS")}
          </div>
        </div>

        {/* BS */}
        <div
          onClick={() => isSmallScreen && setSelected("BS")}
          style={cardPosition("BS")}
          className={`card card-compact bg-base-200 shadow-xl transition-all duration-500 ease-in-out
            ${isSmallScreen 
              ? 'absolute left-1/2 -translate-x-1/2 w-11/12 h-full' 
              : 'relative flex-1 min-w-0'}
            ${!isSmallScreen ? 'hover:scale-[1.4] hover:z-20 hover:shadow-2xl hover:-translate-x-[70px] hover:opacity-100' : ''}
          `}
        >
          <div className="card-body cursor-pointer">
            <h3 className="card-title">Business</h3>
            {(selected === "BS" || !isSmallScreen) && renderSection("BS")}
          </div>
        </div>
      </div>
    </section>
  );
}
