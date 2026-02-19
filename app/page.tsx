"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900" style={{ display: 'flex', justifyContent: 'center', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="page-content" style={{ maxWidth: '672px', width: '100%', paddingTop: '3rem', display: 'flex', flexDirection: 'column' as const, flex: 1 }}>
        <div style={{ marginBottom: '1.25rem' }}>
          {/* Profile Section - Always visible */}
          <div>
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200" style={{ marginBottom: '0.75rem', padding: '0.25rem' }}>
              <img 
                src="/images/profile-memoji.png" 
                alt="Arsh Mundi" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Name and Title */}
            <div style={{ marginBottom: '0.75rem' }}>
              <h1 className="text-5xl font-bold" style={{ marginBottom: '0.375rem' }}>Arsh Mundi</h1>
              <p className="text-xl text-gray-600">Software Engineering Student @ University of Guelph</p>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8 text-base" style={{ marginBottom: '0.75rem' }}>
              <button
                onClick={() => setActiveSection("about")}
                className={`hover:text-gray-900 transition-colors cursor-pointer ${
                  activeSection === "about" ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                /about
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`hover:text-gray-900 transition-colors cursor-pointer ${
                  activeSection === "projects" ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                /projects
              </button>
              <a
                href="/images/arshvir-mundi-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                /resume
              </a>
            </nav>
          </div>

          {/* About Section */}
          {activeSection === "about" && (
            <div className="text-gray-700 animate-fadeIn mt-6" style={{ marginBottom: '0.75rem' }}>
              <ul className="space-y-3 leading-relaxed text-lg">
                <li>• I build web apps that people actually use</li>
                <li>• Built an AI video tool, got acquired by a YC EdTech company</li>
                <li>• Looking for Summer 2026 and Fall 2026 opportunities</li>
                <li>
                  • Check out my{" "}
                  <button
                    onClick={() => setActiveSection("projects")}
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    /projects
                  </button>
                </li>
              </ul>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h3 className="text-base font-medium text-gray-900" style={{ marginBottom: '0.35rem' }}>Technical Skills</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {["C", "Java", "Python", "JavaScript", "HTML", "CSS", "React", "Next.js", "Vue", "Nuxt", "React Native", "Tailwind CSS", "Firebase", "MySQL", "MongoDB", "Figma", "Manim", "Git/GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-gray-600 bg-gray-200 rounded-md"
                      style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingTop: '0.125rem', paddingBottom: '0.125rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <div className="flex gap-8">
                  <a
                    href="https://github.com/ArshM-15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arshvir-mundi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="mailto:mundia@uoguelph.ca"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Email ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <div className="animate-fadeIn mt-6" style={{ marginBottom: '0.75rem' }}>
              <div style={{ marginBottom: '0.625rem' }}>
                <p className="text-gray-700 leading-relaxed" style={{ marginBottom: '0.2rem' }}>
                  <a
                    href="https://x.com/trytorial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Torial ↗
                  </a>
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  A platform that creates explainer videos for student's toughest questions in seconds. Acquired by a YC company.
                </p>
              </div>

              <div style={{ marginBottom: '0.625rem' }}>
                <p className="text-gray-700 leading-relaxed" style={{ marginBottom: '0.2rem' }}>
                  <a
                    href="https://github.com/ArshM-15/Nodsgy-Audio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Nodsgy ↗
                  </a>
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Turns documents and questions into simple verbal explanations. 300 signups and 5K+ audio explanations created. 
                </p>
              </div>

              <div style={{ marginBottom: '0.625rem' }}>
                <p className="text-gray-700 leading-relaxed" style={{ marginBottom: '0.2rem' }}>
                  <a
                    href="https://academates.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Academates ↗
                  </a>
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Platform like Reddit where high school students can get help in various subjects.
                </p>
              </div>

              <div style={{ marginBottom: '0.625rem' }}>
                <p className="text-gray-700 leading-relaxed" style={{ marginBottom: '0.2rem' }}>
                  <a
                    href="https://streamerloot.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Streamerloot ↗
                  </a>
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  E-commerce site where users can search for gaming and streaming 
                  equipment used by popular streamers.
                </p>
              </div>
            </div>
          )}

        </div>
        
        {/* Footer */}
        <div style={{ marginTop: 'auto', paddingBottom: '2rem', textAlign: 'center' as const }}>
          <p className="text-sm text-gray-500">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </main>
  );
}