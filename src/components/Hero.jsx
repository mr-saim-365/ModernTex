import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [radius, setRadius] = useState(110);
  const stroke = 5;
  const counterRef = useRef(null);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(60);
      else if (width < 1024) setRadius(80);
      else if (width < 1536) setRadius(90);
      else setRadius(110);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;

  useEffect(() => {
    if (!counterRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      counterRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      {},
      { val: 0 },
      {
        val: target,
        duration: duration / 1000,
        ease: "power2.out",
        onUpdate: function () {
          setCount(Math.ceil(this.targets()[0].val));
        },
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, [target, duration]);

  const maxProgress = 0.8; // 80% arc fill
  const progress = (count / target) * maxProgress;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center justify-center text-center text-[#ffffff]"
    >
      <svg height={radius * 2} width={radius * 2} className="mb-4">
        <circle
          stroke="#333333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#FFFFFF"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
        <text
          x="50%"
          y="50%"
          fill="#ffffff"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2"
        >
          {count.toLocaleString()}
        </text>
      </svg>
      <div className="text-sm 2xl:text-lg font-medium whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to autoplay WITH sound. If blocked, show prompt to enable.
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play?.();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          setShowSoundPrompt(true);
        });
      }
    }
  }, []);

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRef.current.muted = nextMuted;
    // Ensure playback continues on unmute (counts as user gesture)
    if (!nextMuted) {
      const playPromise = videoRef.current.play?.();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {});
      }
    }
  };

  const handleEnableSound = async () => {
    if (!videoRef.current) return;
    try {
      videoRef.current.muted = false;
      setIsMuted(false);
      await videoRef.current.play();
      setShowSoundPrompt(false);
    } catch (e) {
      // keep prompt visible if still blocked
      setShowSoundPrompt(true);
    }
  };

  return (
    <>
      <section className="relative w-full ">
        {/* Video Background */}
        <div className="relative w-full min-h-[420px] md:min-h-[80vh] lg:min-h-[100vh] overflow-hidden mt-16 md:mt-20">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/FactoryVideo.mp4"
            poster="/images/OurWork.jpg"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
          />

          {/* Sound prompt overlay if autoplay-with-audio is blocked */}
          {showSoundPrompt && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60">
              <button
                type="button"
                onClick={handleEnableSound}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90 px-6 py-3 text-sm md:text-base font-semibold shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M3 10a1 1 0 011-1h3.586l3.707-3.707A1 1 0 0113 6v12a1 1 0 01-1.707.707L7.586 15H4a1 1 0 01-1-1v-4z" />
                  <path d="M15.536 8.464a5 5 0 010 7.072 1 1 0 101.415 1.415 7 7 0 000-9.9 1 1 0 10-1.415 1.414z" />
                  <path d="M17.657 6.343a8 8 0 010 11.314 1 1 0 001.415 1.415c4.296-4.296 4.296-11.848 0-16.143a1 1 0 10-1.415 1.414z" />
                </svg>
                Enable Sound
              </button>
            </div>
          )}

          {/* Theme gradient + subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_10%,_#faa74940_0%,_transparent_60%)]" />

          {/* Mute/Unmute Control */}
          <button
            type="button"
            onClick={handleToggleMute}
            aria-pressed={!isMuted}
            title={isMuted ? "Unmute" : "Mute"}
            className="absolute z-20 bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/60 hover:bg-black text-white px-4 py-2 text-sm font-medium shadow-md backdrop-blur transition"
          >
            {isMuted ? (
              <>
                {/* Volume Off Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M3.293 9.293A1 1 0 014 9h3.586l3.707-3.707A1 1 0 0113 6v12a1 1 0 01-1.707.707L7.586 15H4a1 1 0 01-.707-1.707L5.586 10 3.293 7.707a1 1 0 010-1.414z" />
                </svg>
                Unmute
              </>
            ) : (
              <>
                {/* Volume On Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M3 10a1 1 0 011-1h3.586l3.707-3.707A1 1 0 0113 6v12a1 1 0 01-1.707.707L7.586 15H4a1 1 0 01-1-1v-4z" />
                  <path d="M15.536 8.464a5 5 0 010 7.072 1 1 0 101.415 1.415 7 7 0 000-9.9 1 1 0 10-1.415 1.414z" />
                  <path d="M17.657 6.343a8 8 0 010 11.314 1 1 0 001.415 1.415c4.296-4.296 4.296-11.848 0-16.143a1 1 0 10-1.415 1.414z" />
                </svg>
                Mute
              </>
            )}
          </button>
        </div>
      </section>

      {/* Spaced Animated Counters on same background */}
      <div className="mt- md:mt-16 lg:mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_top_right,_#f48221_50%,_#faa749_95%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <AnimatedCounter target={2000} label="SKILLED WORKERS" />
            <AnimatedCounter
              target={1000}
              label="GARMENT PRODUCTION PIECES PER LINE"
            />
            <AnimatedCounter
              target={250000}
              label="FABRIC PRODUCTION IN KG MONTHLY"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
