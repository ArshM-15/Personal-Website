"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex justify-center px-6">
      <div className="max-w-2xl w-10/12 md:w-full flex flex-col" style={{ minHeight: 'calc(100vh - 10rem)', paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="md:ml-12" style={{ marginBottom: '1.25rem', flexGrow: 1 }}>
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
              <p className="text-xl text-gray-600">Software Engineering Student</p>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8 text-sm" style={{ marginBottom: '0.75rem' }}>
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
              <button
                onClick={() => setActiveSection("contact")}
                className={`hover:text-gray-900 transition-colors cursor-pointer ${
                  activeSection === "contact" ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                /contact
              </button>
            </nav>
          </div>

          {/* About Section */}
          {activeSection === "about" && (
            <div className="text-gray-700 animate-fadeIn" style={{ marginBottom: '0.75rem' }}>
              <p className="leading-relaxed" style={{ marginBottom: '0.375rem' }}>
                I'm a university student with a deep passion for coding and technology. Creating, building, and always learning.
              </p>
              <p className="leading-relaxed" style={{ marginBottom: '0.625rem' }}>
                Currently working on{" "}
                <a
                  href="https://trytorial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium cursor-pointer"
                >
                  Torial ↗
                </a>
                , a platform that creates custom video explanations for student's toughest questions. I'm highly motivated and always eager to expand my skills while tackling challenging problems and crafting solutions that make a real difference.
              </p>
              
              <div style={{ marginTop: '0.625rem' }}>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {["Java", "Python", "C", "JavaScript", "Next.js", "Tailwind", "Firebase", "MySQL", "Git/GitLab"].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <div className="animate-fadeIn" style={{ marginBottom: '0.75rem' }}>
              <div style={{ marginBottom: '0.625rem' }}>
                <p className="text-gray-700 leading-relaxed" style={{ marginBottom: '0.2rem' }}>
                  <a
                    href="https://trytorial.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Torial ↗
                  </a>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A platform that creates custom video explanations for student's toughest questions in minutes.
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
                <p className="text-gray-600 text-sm leading-relaxed">
                  A platform where high school students can get help in various subjects. 
                  Features user authentication, live feed, and real-time chat functionality.
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
                <p className="text-gray-600 text-sm leading-relaxed">
                  An E-commerce site where users can search for gaming and streaming 
                  equipment used by popular streamers.
                </p>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <div className="animate-fadeIn" style={{ marginBottom: '0.75rem' }}>
              <p className="text-gray-700 leading-relaxed" style={{ marginBottom: '0.625rem' }}>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
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
                  href="mailto:arshvir.mundi@gmail.com"
                  className="text-blue-600 hover:underline font-medium cursor-pointer"
                >
                  Email ↗
                </a>
              </div>
            </div>
          )}

        </div>
        
        {/* Footer */}
        <div style={{ marginTop: 'auto', paddingTop: '4rem', textAlign: 'center' }}>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} - Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </main>
  );
}