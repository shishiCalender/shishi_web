import React, { useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";

export const ArtboardCopy = (): JSX.Element => {
  // Navigation categories that appear at top and bottom
  const categories = [
    "Layouts",
    "Fonts",
    "Plugins",
    "Editable",
    "Graphics",
    "Shapes",
    "Gradients",
    "Texture",
  ];

  // Updated layout images, without individual positioning classes
  const layoutImages = [
    { src: "/092bfa4b6c3e7b77464c6d75fa508c4.png", alt: "Layout 1" },
    { src: "/ca68f05618405661cc74d2e698b3a7e.png", alt: "Layout 2" },
    { src: "/e5fbdb60c1c11cd48ecc14feb316486.png", alt: "Layout 3" },
    { src: "/19d2e4c7018f3ff2d7a8d52f70707f5.png", alt: "Layout 4" },
    { src: "/78564406f452c65c7c34076632636c3.png", alt: "Layout 5" },
    { src: "/70d7cd04122b44c785f7d0852078467.png", alt: "Layout 6" },
  ];

  // Duplicate images for seamless scrolling effect
  // We need enough duplicates to ensure content always fills the visible area during scroll
  // and for the loop to appear seamless. 3-4 repetitions usually suffice.
  const duplicatedLayoutImages = [
    ...layoutImages,
    ...layoutImages,
    ...layoutImages,
    ...layoutImages,
  ];

  useEffect(() => {
    // Inject custom CSS for animations if Tailwind doesn't have it configured
    // This is a workaround as I cannot modify tailwind.config.js or global CSS files.
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";

    // Calculate the total width of one set of images including margins
    // Each image is 300px width, and mx-6 means 24px left + 24px right margin = 48px
    // So, total width per image including margins is 300px + 48px = 348px
    const singleSetWidth = layoutImages.length * 348;

    styleSheet.innerText = `
      @keyframes scroll-rtl {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-${singleSetWidth}px);
        }
      }

      @keyframes scroll-ltr {
        from {
          transform: translateX(-${singleSetWidth}px);
        }
        to {
          transform: translateX(0);
        }
      }

      .animate-scroll-rtl {
        animation: scroll-rtl ${layoutImages.length * 3}s linear infinite; /* Adjust speed based on number of images */
      }

      .animate-scroll-ltr {
        animation: scroll-ltr ${layoutImages.length * 3}s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [layoutImages.length]); // Re-run if number of images changes (unlikely)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none"></div>
      
      {/* Warm cinematic gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-amber-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-900/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-700/20 to-transparent"></div>
      
      {/* Soft spotlight effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-yellow-200/10 via-transparent to-transparent rounded-full blur-3xl"></div>

      <Card className="bg-transparent flex flex-row justify-center w-full min-h-screen border-none">
        <CardContent className="bg-transparent overflow-hidden w-full max-w-[1400px] h-screen p-0 relative">
          
          {/* TOP Film Reel Banner */}
          <div className="absolute top-[120px] left-0 w-full overflow-hidden z-10 transform -skew-y-12">
            <div className="flex flex-nowrap animate-scroll-rtl py-4 px-6">
              {duplicatedLayoutImages.map((image, index) => (
                <div
                  key={`top-film-image-${index}`}
                  className="flex-shrink-0 w-[300px] h-[200px] mx-6 relative group cursor-pointer transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-xl"
                >
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt={image.alt}
                    src={image.src}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Film-like border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  {/* Subtle vignette on each card */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM Film Reel Banner */}
          <div className="absolute bottom-[120px] left-0 w-full overflow-hidden z-10 transform -skew-y-12">
            <div className="flex flex-nowrap animate-scroll-ltr py-4 px-6">
              {duplicatedLayoutImages.map((image, index) => (
                <div
                  key={`bottom-film-image-${index}`}
                  className="flex-shrink-0 w-[300px] h-[200px] mx-6 relative group cursor-pointer transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-xl"
                >
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt={image.alt}
                    src={image.src}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Film-like border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  {/* Subtle vignette on each card */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Top navigation bar with film aesthetic */}
          <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-sm z-20">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          </div>

          {/* Bottom navigation bar with film aesthetic */}
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm z-20">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          </div>

          {/* Top navigation text */}
          <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 font-sans font-medium text-white text-xl text-center tracking-wider leading-[30px] whitespace-nowrap z-30">
            {categories.map((category, index) => (
              <React.Fragment key={`top-category-${index}`}>
                <span className="hover:text-amber-300 transition-all duration-300 cursor-pointer hover:drop-shadow-lg">
                  {category}
                </span>
                {index < categories.length - 1 && (
                  <span className="mx-6 text-amber-400/60">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom navigation text */}
          <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 font-sans font-medium text-white text-xl text-center tracking-wider leading-[30px] whitespace-nowrap z-30">
            {categories.map((category, index) => (
              <React.Fragment key={`bottom-category-${index}`}>
                <span className="hover:text-amber-300 transition-all duration-300 cursor-pointer hover:drop-shadow-lg">
                  {category}
                </span>
                {index < categories.length - 1 && (
                  <span className="mx-6 text-amber-400/60">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Figma logo placeholder */}
          <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center z-30">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};