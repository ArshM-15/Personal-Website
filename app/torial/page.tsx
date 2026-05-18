import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { publicUrl } from "../lib/supabase";

export const metadata: Metadata = {
  title: "Torial - Arsh Mundi",
  description:
    "Torial creates explainer videos for students' toughest questions in seconds. Acquired by a YC EdTech company.",
};

// Add a new screenshot:
//   1. Drop the file into `assets/images/` in the Supabase dashboard
//   2. Add an entry to this array (the file param is the filename in that folder)
const images: { file: string; caption: string }[] = [
  // { file: "screenshot-1.png", caption: "Landing page" },
];

const videoBoxStyle: CSSProperties = {
  width: "100%",
  borderRadius: "0.5rem",
  backgroundColor: "#000",
  display: "block",
  boxShadow:
    "0 12px 28px -10px rgba(15, 23, 42, 0.22), 0 4px 10px -4px rgba(15, 23, 42, 0.12)",
};

export default function TorialPage() {
  return (
    <main
      className="min-h-screen bg-gray-50 text-gray-900"
      style={{ display: "flex", justifyContent: "center", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
    >
      <div
        className="page-content"
        style={{ maxWidth: "672px", width: "100%", paddingTop: "3rem", display: "flex", flexDirection: "column", flex: 1 }}
      >
        <div style={{ marginBottom: "1.25rem" }}>
          <nav className="text-base" style={{ marginBottom: "1.25rem" }}>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            >
              ← /home
            </Link>
          </nav>

          <h1 className="text-5xl font-bold" style={{ marginBottom: "0.5rem" }}>
            Torial
          </h1>
          <p className="text-xl text-gray-600" style={{ marginBottom: "1.5rem" }}>
            AI explainer videos for student questions
          </p>

          {/* Main demo: full width, hero placement */}
          <figure style={{ margin: 0, marginBottom: "2rem" }}>
            <video
              src={publicUrl("videos/demo.mp4")}
              controls
              preload="metadata"
              playsInline
              style={videoBoxStyle}
            />
            <figcaption className="text-gray-600 text-base" style={{ marginTop: "0.5rem" }}>
              Main demo: generating an explainer in seconds
            </figcaption>
          </figure>

          <div className="text-gray-700 text-lg leading-relaxed" style={{ marginBottom: "2rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Torial is a platform that turns a student&apos;s toughest question into a short
              explainer video in seconds. Type or upload the problem, get back a narrated,
              animated walkthrough.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              I built the rendering pipeline, the LLM-driven script generation, and the
              front-end. It grew to thousands of generated videos.
            </p>
            <p className="font-semibold text-gray-900" style={{ marginBottom: "1rem" }}>
              Acquired by a YC EdTech company.
            </p>
            <p>
              <a
                href="https://www.youtube.com/@torial_explanations/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Torial on YouTube ↗
              </a>
            </p>
          </div>

          {/* Auto-publish to YouTube feature */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "0.5rem" }}>
              Auto-publish to YouTube
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed" style={{ marginBottom: "0.875rem" }}>
              <p style={{ marginBottom: "0.75rem" }}>
                Beyond on-demand generation, Torial could automatically produce explainers for
                trending student search queries and push them straight to YouTube. It ran as a
                hands-off content engine with zero editing in the loop.
              </p>
              <p>
                Each upload included a synthesized voiceover, an animated walkthrough, and
                SEO-tuned title, description, and tags, all generated end-to-end.
              </p>
            </div>
            <figure style={{ margin: 0 }}>
              <video
                src={publicUrl("videos/youtube-audit.mp4")}
                controls
                preload="metadata"
                playsInline
                style={videoBoxStyle}
              />
              <figcaption className="text-gray-600 text-base" style={{ marginTop: "0.5rem" }}>
                Auto-generated video pushed straight to YouTube
              </figcaption>
            </figure>
          </section>

          {/* Brainrot-style shorts: vertical 9:16 video */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "0.5rem" }}>
              Brainrot mode
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed" style={{ marginBottom: "0.875rem" }}>
              Torial could also remix explainers into vertical, brainrot-style shorts. They
              were designed to thrive on TikTok, Reels, and YouTube Shorts, where attention
              spans last about two seconds and a parkour overlay carries the eye through the
              lesson.
            </p>
            <figure style={{ margin: "0 auto", maxWidth: "230px" }}>
              <video
                src={publicUrl("videos/brainrot.mp4")}
                controls
                preload="metadata"
                playsInline
                style={videoBoxStyle}
              />
              <figcaption className="text-gray-600 text-sm" style={{ marginTop: "0.5rem", textAlign: "center" }}>
                Created using Torial in under 60 seconds
              </figcaption>
            </figure>
          </section>

          {/* Example outputs side-by-side */}
          <section style={{ marginBottom: "2rem" }}>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "0.75rem" }}>
              Example outputs
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
                marginLeft: "-1rem",
                marginRight: "-1rem",
              }}
            >
              <figure style={{ margin: 0 }}>
                <video
                  src={publicUrl("videos/use-case-1.mp4")}
                  controls
                  preload="metadata"
                  playsInline
                  style={videoBoxStyle}
                />
                <figcaption className="text-gray-600 text-sm" style={{ marginTop: "0.5rem" }}>
                  A student question turned into a video
                </figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <video
                  src={publicUrl("videos/sample1.mp4")}
                  controls
                  preload="metadata"
                  playsInline
                  style={videoBoxStyle}
                />
                <figcaption className="text-gray-600 text-sm" style={{ marginTop: "0.5rem" }}>
                  Another sample explainer
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Screenshots: only renders once you add images */}
          {images.length > 0 && (
            <section style={{ marginBottom: "2rem" }}>
              <h2 className="text-2xl font-semibold" style={{ marginBottom: "0.75rem" }}>
                Screenshots
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {images.map((img) => (
                  <figure key={img.file} style={{ margin: 0 }}>
                    <a
                      href={publicUrl(`images/${img.file}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg overflow-hidden bg-gray-200 hover:opacity-90 transition-opacity"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={publicUrl(`images/${img.file}`)}
                        alt={img.caption}
                        loading="lazy"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </a>
                    <figcaption className="text-gray-600 text-sm" style={{ marginTop: "0.5rem" }}>
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <div style={{ marginTop: "auto", paddingBottom: "2rem", textAlign: "center" }}>
          <p className="text-sm text-gray-500">Built with Next.js &amp; Tailwind</p>
        </div>
      </div>
    </main>
  );
}
