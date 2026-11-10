import React, { useRef, useState, useEffect } from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { getAssetUrl } from "../../lib/assets";

interface CsrVideoCardProps {
  videoUrl: string;
  title: string;
  partner?: string;
  poster?: string;
  className?: string;
}

export function CsrVideoCard({
  videoUrl,
  title,
  partner = "In Partnership with Goonj",
  poster,
  className = "",
}: CsrVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number>(1); // 1080x1080 square format

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.videoWidth && video.videoHeight) {
      setAspectRatio(video.videoWidth / video.videoHeight);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set muted to ensure browsers permit autoplay
    video.muted = isMuted;

    // Check if metadata already available
    if (video.videoWidth && video.videoHeight) {
      setAspectRatio(video.videoWidth / video.videoHeight);
    }

    // Try autoplay once mounted
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          // Autoplay was blocked by browser policy; wait for user interaction
          video.muted = true;
          setIsMuted(true);
          setIsPlaying(false);
          setIsLoading(false);
        });
    }
  }, [videoUrl]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    const video = videoRef.current;
    if (video) {
      video.load();
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
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
      <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-brand-red/40 rounded-tr-3xl pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl pointer-events-none z-20" />

      {/* Main Video Box with Dynamic Aspect Ratio and Zero Cropping */}
      <div
        style={{ aspectRatio: `${aspectRatio}` }}
        className="relative w-full max-h-[520px] rounded-2xl overflow-hidden bg-black border border-border/50 shadow-soft flex items-center justify-center mx-auto"
      >
        {/* Ambient subtle glow background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 via-black to-brand/20 pointer-events-none" />

        {/* Primary Video Element (Fast-start optimized with moov-at-front) */}
        <video
          ref={videoRef}
          src={getAssetUrl(videoUrl)}
          poster={poster ? getAssetUrl(poster) : undefined}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => {
            setIsPlaying(true);
            setIsLoading(false);
            setHasError(false);
          }}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className="relative z-10 w-full h-full object-contain cursor-pointer"
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

        {/* Loading Spinner */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] pointer-events-none">
            <div className="h-10 w-10 border-3 border-white/20 border-t-brand-red rounded-full animate-spin" />
          </div>
        )}

        {/* Error Overlay with Retry */}
        {hasError && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 p-6 text-center text-white">
            <p className="text-sm font-medium mb-3 text-white/85">
              Unable to stream video. Please tap to retry.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red/90 text-white px-4 py-2 text-xs font-semibold shadow-lg transition-transform active:scale-95"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reload Video
            </button>
          </div>
        )}

        {/* Center Play/Pause button on hover or when paused */}
        {!hasError && (!isPlaying || isHovered) && (
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
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-15" />

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
