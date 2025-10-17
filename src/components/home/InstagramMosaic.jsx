"use client";

import { useEffect } from "react";

export default function InstagramMosaic() {
  useEffect(() => {
    // If script already exists, just reprocess embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Inject Instagram embed script
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full py-10 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        <span className="text-primary">#Connect </span> to us on Socials
      </h2>

      {/* Mosaic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center px-6">
        {/* Instagram Post Embed */}
        <div className="w-full max-w-[350px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DP0GgGyCEa9/?utm_source=ig_embed"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "12px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5), 0 4px 10px 0 rgba(0,0,0,0.15)",
              margin: "auto",
              padding: 0,
              width: "100%",
            }}
          ></blockquote>
        </div>

        <div className="w-full max-w-[350px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DPTtTCXjPrE/?utm_source=ig_embed"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "12px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5), 0 4px 10px 0 rgba(0,0,0,0.15)",
              margin: "auto",
              padding: 0,
              width: "100%",
            }}
          ></blockquote>
        </div>

        <div className="w-full max-w-[350px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DPLxX_7jFyx/?utm_source=ig_embed"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "12px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5), 0 4px 10px 0 rgba(0,0,0,0.15)",
              margin: "auto",
              padding: 0,
              width: "100%",
            }}
          ></blockquote>
        </div>
      </div>
    </section>
  );
}
