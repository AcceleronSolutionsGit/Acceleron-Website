import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Maximize2, Sparkles } from "lucide-react";
import { getAssetUrl } from "../../lib/assets";

interface CsrVideoCardProps {
  videoUrl: string;
  title: string;
  partner?: string;
  className?: string;
}

export function CsrVideoCard({
  videoUrl,
  title,
  partner = "In Partnership with Goonj",
  className = "",
}: CsrVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video attempts autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was prevented; keep muted and retry
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => setIsPlaying(false));
        });
    }
  }, [videoUrl]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-md p-3.5 sm:p-4 shadow-elevated group ${className}`}
    >
      {/* Decorative corner accents matching Culture cards */}
      <div className="absolute -top-1 -right-1 w-14 h-14 border-t-2 border-r-2 border-brand-red/40 rounded-tr-3xl pointer-events-none z-20" />
      <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl pointer-events-none z-20" />

      {/* Main Video Box */}
      <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden bg-black border border-border/50 shadow-soft">
        <video
          ref={videoRef}
          src={getAssetUrl(videoUrl)}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onClick={togglePlay}
        />

        {/* Top Badges Overlay */}
        {partner && (
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-bold text-white bg-brand-red/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md">
              {partner}
            </span>
          </div>
        )}

        {/* Center Play/Pause button on hover or when paused */}
        {(!isPlaying || isHovered) && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="pointer-events-auto h-14 w-14 rounded-full bg-black/60 hover:bg-brand-red text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xl"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </button>
          </div>
        )}

        {/* Gradient shadow for bottom bar */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Bottom Interactive Bar */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 truncate pr-2">
            <Sparkles className="h-3.5 w-3.5 text-brand-red shrink-0" />
            <span className="text-xs sm:text-sm font-semibold truncate drop-shadow">
              {title}
            </span>
          </div>

          {/* Controls: Mute/Unmute & Fullscreen */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="h-8 w-8 rounded-full bg-black/60 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4 text-brand-red group-hover:text-white" />
              )}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              aria-label="Toggle Fullscreen"
              className="h-8 w-8 rounded-full bg-black/60 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              title="Fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

