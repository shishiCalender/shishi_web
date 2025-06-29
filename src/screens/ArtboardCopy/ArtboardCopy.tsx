import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";

export const ArtboardCopy = (): JSX.Element => {
  const [showQrCode, setShowQrCode] = React.useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    "tender",
    "tender",
    "tender",
    "tender",
    "tender",
    "tender",
    "tender",
    "tender",
    "tender",

  ];

  const baseImageUrl = "https://images-1332515911.cos.ap-guangzhou.myqcloud.com";

  const layoutImages = [
    { 
      src: `${baseImageUrl}/ca68f05618405661cc74d2e698b3a7e.png`, 
      alt: "Layout 1" 
    },
    { 
      src: `${baseImageUrl}/ca68f05618405661cc74d2e698b3a7e.png`, 
      alt: "Layout 2" 
    },
    { 
      src: `${baseImageUrl}/e5fbdb60c1c11cd48ecc14feb316486.png`, 
      alt: "Layout 3" 
    },
    { 
      src: `${baseImageUrl}/19d2e4c7018f3ff2d7a8d52f70707f5.png`, 
      alt: "Layout 4" 
    },
    { 
      src: `${baseImageUrl}/78564406f452c65c7c34076632636c3.png`, 
      alt: "Layout 5" 
    },
    { 
      src: `${baseImageUrl}/70d7cd04122b44c785f7d0852078467.png`, 
      alt: "Layout 6" 
    },
  ];

  const duplicatedLayoutImages = [
    ...layoutImages,
    ...layoutImages,
    ...layoutImages,
    ...layoutImages,
  ];

  // 定义6页内容
  const pagesContent = [
    {
      title: "Shishi Calendar 2024 - 春日",
      description: "探索精心设计的2024年日历，融合了传统元素与现代美学。每个月份都有独特的主题，从自然风光到城市建筑，从抽象艺术到传统文化符号。",
      imageBg: "bg-gradient-to-br from-yellow-200 to-green-200",
      buttonColor: "bg-green-500 hover:bg-green-600",
      buttonText: "春日系列",
      imageUrl: "https://images-1332515911.cos.ap-guangzhou.myqcloud.com/092bfa4b6c3e7b77464c6d75fa508c4.png"
    },
    {
      title: "Shishi Calendar 2024 - 夏韵",
      description: "这个日历不仅仅是时间的记录，更是一件艺术品。我们精心挑选了12位国际知名设计师，每人负责一个月的设计，确保每个月都有全新的视觉体验。",
      imageBg: "bg-gradient-to-br from-blue-200 to-purple-200",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      buttonText: "夏韵系列",
      imageUrl: "/tender2.png"
    },
    {
      title: "Shishi Calendar 2024 - 秋实",
      description: "采用环保纸张和植物墨水印刷，确保作品不仅美观而且环保。每个日历都附带一个精美的金属支架，方便您展示在桌面或书架上。",
      imageBg: "bg-gradient-to-br from-orange-200 to-red-200",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      buttonText: "秋实系列",
      imageUrl: "/tender3.png"
    },
    {
      title: "Shishi Calendar 2024 - 冬雪",
      description: "探索精心设计的2024年日历，融合了传统元素与现代美学。每个月份都有独特的主题，从自然风光到城市建筑，从抽象艺术到传统文化符号。",
      imageBg: "bg-gradient-to-br from-blue-200 to-indigo-200",
      buttonColor: "bg-indigo-500 hover:bg-indigo-600",
      buttonText: "冬雪系列",
      imageUrl: "/tender4.png"
    },
    {
      title: "Shishi Calendar 2024 - 晨曦",
      description: "这个日历不仅仅是时间的记录，更是一件艺术品。我们精心挑选了12位国际知名设计师，每人负责一个月的设计，确保每个月都有全新的视觉体验。",
      imageBg: "bg-gradient-to-br from-pink-200 to-purple-300",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      buttonText: "晨曦系列",
      imageUrl: "/tender5.png"
    },
    {
      title: "Shishi Calendar 2024 - 月华",
      description: "采用环保纸张和植物墨水印刷，确保作品不仅美观而且环保。每个日历都附带一个精美的金属支架，方便您展示在桌面或书架上。",
      imageBg: "bg-gradient-to-br from-gray-200 to-blue-300",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
      buttonText: "月华系列",
      imageUrl: "/tender6.png"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current && containerRef.current) {
        const scrollTop = contentRef.current.scrollTop;
        const maxScroll = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        const progress = Math.min(1, scrollTop / maxScroll);
        setScrollProgress(progress);
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    // 原有的CSS注入逻辑保持不变
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
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
        animation: scroll-rtl ${layoutImages.length * 3}s linear infinite;
      }

      .animate-scroll-ltr {
        animation: scroll-ltr ${layoutImages.length * 3}s linear infinite;
      }
    `;
    
    document.head.appendChild(styleSheet);
    return () => {
      void document.head.removeChild(styleSheet);
    };
  }, [layoutImages.length]);

  // 计算底部导航栏透明度（随滚动增加而减小）
  const bottomNavOpacity = Math.max(0, 1 - scrollProgress * 5);
  const upsideNavOpacity = Math.max(0, 1 - scrollProgress * 5);
  
  
  // 计算每页内容的透明度和位置
  const calculatePageOpacity = (index: number) => {
    // 每页占据总滚动进度的 1/6
    const pageMin = index * (1 / 6);
    const pageMax = (index + 1) * (1 / 6);
    
    if (scrollProgress < pageMin) return 0;
    if (scrollProgress > pageMax) return 1;
    
    // 线性计算透明度（进入页面时从0→1，离开时保持1）
    return Math.min(1, (scrollProgress - pageMin) * 6);
  };
  
  // 计算每页内容的垂直位置（平滑上移效果）
  const calculatePagePosition = (opacity: number) => {
    return (1 - opacity) * 50;
  };

  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-white via-pink-100 to-blue-100 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none"></div>
      
      {/* background setting */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-pink-100/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-100/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-100/20 to-transparent"></div>
      
      {/* Soft spotlight effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-100/10 via-transparent to-transparent rounded-full blur-3xl"></div>

      <Card className="bg-transparent flex flex-row justify-center w-full min-h-screen border-none">
        <CardContent 
          ref={contentRef}
          className="bg-transparent overflow-y-auto w-full max-w-[1400px] h-screen p-0 relative"
        >
          {/* TOP Film Reel Banner */}
          <div 
            className="absolute top-[120px] left-0 w-full overflow-hidden z-10 transform -skew-y-12"
            style={{ opacity: upsideNavOpacity }}          
          >
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
                  <div className="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM Film Reel Banner */}
          <div 
            className="absolute bottom-[120px] left-0 w-full overflow-hidden z-10 transform -skew-y-12"
            style={{ opacity: bottomNavOpacity }}
          >
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
                  <div className="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Top navigation bar with film aesthetic */}
          <div 
            className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-sm z-20"
            style={{ opacity: upsideNavOpacity }}
          >
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          </div>

          {/* Bottom navigation bar with film aesthetic */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm z-20"
            style={{ opacity: bottomNavOpacity }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          </div>

          {/* Top navigation text */}
          <div 
            className="absolute top-[25px] left-1/2 transform -translate-x-1/2 font-sans font-medium text-white text-xl text-center tracking-wider leading-[30px] whitespace-nowrap z-30"
            style={{ opacity: upsideNavOpacity }}
          >
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
          <div 
            className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 font-sans font-medium text-white text-xl text-center tracking-wider leading-[30px] whitespace-nowrap z-30"
            style={{ opacity: bottomNavOpacity }}
          >
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

          {/* Download Button */}
          <button
            className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center z-40 hover:bg-white/20 transition-colors duration-300 focus:outline-none"
            style={{ opacity: bottomNavOpacity }}
            onClick={() => setShowQrCode(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>

          {/* 6页图文内容区域 */}
          <div className="relative z-0 w-full mt-[100vh]">
            {pagesContent.map((page, index) => {
              const opacity = calculatePageOpacity(index);
              const translateY = calculatePagePosition(opacity);
              
              return (
                <div 
                  key={`content-page-${index}`}
                  className="min-h-screen w-full bg-white p-8 relative"
                  style={{
                    opacity: opacity,
                    transform: `translateY(-${translateY}px)`,
                  }}
                >
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">{page.title}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-lg mb-4">
                          {page.description}
                        </p>
                        <p className="text-lg mb-4">
                          {index % 2 === 0 
                            ? "这个日历不仅仅是时间的记录，更是一件艺术品。我们精心挑选了12位国际知名设计师，每人负责一个月的设计，确保每个月都有全新的视觉体验。" 
                            : "每个日历都配有设计师独家签名，并提供收藏证书。独特的设计风格配合高质量印刷工艺，带来绝佳的视觉享受。"}
                        </p>
                        <p className="text-lg mb-4">
                          {index % 3 === 0 
                            ? "采用环保纸张和植物墨水印刷，确保作品不仅美观而且环保。每个日历都附带一个精美的金属支架，方便您展示在桌面或书架上。" 
                            : "限量发售版本附带特别设计的包装盒和设计师寄语卡片，是收藏或赠礼的完美选择。"}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className={`${page.imageBg} rounded-xl mb-4 max-w-full h-auto flex items-center justify-center`}>
                          <img 
                            src={page.imageUrl} 
                            alt={page.title} 
                            className="rounded-xl max-w-full h-auto"
                            onError={(e) => {
                              console.error(`Failed to load image: ${page.imageUrl}`);
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <button className={`${page.buttonColor} text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-md hover:shadow-lg`}>
                          {page.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* QR Code Modal */}
          {showQrCode && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setShowQrCode(false)}
            >
              <div
                className="bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                  onClick={() => setShowQrCode(false)}
                >
                  &times;
                </button>
                <h3 className="text-xl font-bold mb-4 text-center">Scan to Download</h3>
                {/* Placeholder for QR Code image */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-blue-200 to-pink-200 w-64 h-64 rounded flex items-center justify-center">
                    <div className="bg-white p-4 rounded-sm">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({length: 64}, (_, i) => (
                          <div 
                            key={i} 
                            className={`w-4 h-4 rounded-sm ${Math.random() > 0.3 ? 'bg-black' : 'bg-white'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  扫码下载2024年日历
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};







