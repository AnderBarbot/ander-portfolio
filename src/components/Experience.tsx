'use client';

import { useState, useEffect } from "react";

export default function StackedCards() {
  const [selected, setSelected] = useState("CS");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  return (
    <section id="experience" className="scroll-mt-20 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
      <div
        className={`relative max-w-5xl mx-auto group 
        ${isSmallScreen ? 'w-full h-[80vh]' : 'flex justify-center h-[60vh] items-start gap-6'}`}
      >
        {/* CS */}
        <div
          onClick={() => isSmallScreen && setSelected("CS")}
          style={cardPosition("CS")}
          className={`card card-compact bg-base-200 shadow-xl transition-all duration-500 ease-in-out
            ${isSmallScreen ? 'absolute left-1/2 -translate-x-1/2 w-11/12 h-full' : 'relative w-1/2 h-4/5 translate-y-[10vh]'}
            ${!isSmallScreen ? 'hover:scale-[1.7] hover:z-20 hover:shadow-2xl hover:opacity-100' : ''}
          `}
        >
          <div className="card-body cursor-pointer">
            <h3 className="card-title">Computer Science</h3>
            {(selected === "CS" || !isSmallScreen) && (
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
            )}
          </div>
        </div>

        {/* BS */}
        <div
          onClick={() => isSmallScreen && setSelected("BS")}
          style={cardPosition("BS")}
          className={`card card-compact bg-base-200 shadow-xl transition-all duration-500 ease-in-out
            ${isSmallScreen ? 'absolute left-1/2 -translate-x-1/2 w-11/12 h-4/5' : 'relative w-1/2 h-4/5 translate-y-[10vh]'}
            ${!isSmallScreen ? 'hover:scale-[1.7] hover:z-20 hover:shadow-2xl hover:opacity-100' : ''}
          `}
        >
          <div className="card-body cursor-pointer">
            <h3 className="card-title">Business</h3>
            {(selected === "BS" || !isSmallScreen) && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
