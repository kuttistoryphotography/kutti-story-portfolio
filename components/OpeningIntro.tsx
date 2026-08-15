"use client";

import { useEffect, useRef, useState } from "react";

export default function OpeningIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [visible, setVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const logoShownRef = useRef(false);
  const endedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const video = videoRef.current;

    if (!video) return;

    let animationFrame = 0;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    /*
     * =========================
     * SHOW BRAND
     * =========================
     */
    const showBrand = () => {
      if (logoShownRef.current) return;

      logoShownRef.current = true;
      setShowLogo(true);
    };

    /*
     * =========================
     * FINISH INTRO
     * =========================
     */
    const finishIntro = () => {
      if (endedRef.current) return;

      endedRef.current = true;

      /*
       * Make sure logo is visible
       */
      showBrand();

      /*
       * Small hold on final frame
       */
      hideTimer = setTimeout(() => {
        setFadeOut(true);

        /*
         * Fade into portfolio
         */
        hideTimer = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 850);
      }, 350);
    };

    /*
     * =========================
     * VIDEO TIME CHECK
     * =========================
     */
    const checkVideoTime = () => {
      if (
        !video.duration ||
        !isFinite(video.duration) ||
        endedRef.current
      ) {
        animationFrame =
          requestAnimationFrame(checkVideoTime);

        return;
      }

      const remaining =
        video.duration - video.currentTime;

      /*
       * Show logo during final 2.5 seconds
       */
      if (remaining <= 2.5) {
        showBrand();
      }

      animationFrame =
        requestAnimationFrame(checkVideoTime);
    };

    /*
     * =========================
     * VIDEO METADATA
     * =========================
     */
    const handleLoadedMetadata = () => {
      animationFrame =
        requestAnimationFrame(checkVideoTime);
    };

    /*
     * =========================
     * VIDEO ENDED
     * =========================
     */
    const handleEnded = () => {
      finishIntro();
    };

    /*
     * =========================
     * VIDEO ERROR
     * =========================
     */
    const handleError = () => {
      showBrand();
      finishIntro();
    };

    /*
     * =========================
     * EVENT LISTENERS
     * =========================
     */
    video.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    video.addEventListener(
      "ended",
      handleEnded
    );

    video.addEventListener(
      "error",
      handleError
    );

    /*
     * =========================
     * IF METADATA ALREADY EXISTS
     * =========================
     */
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    /*
     * =========================
     * CLEANUP
     * =========================
     */
    return () => {
      cancelAnimationFrame(animationFrame);

      if (hideTimer) {
        clearTimeout(hideTimer);
      }

      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      video.removeEventListener(
        "ended",
        handleEnded
      );

      video.removeEventListener(
        "error",
        handleError
      );

      document.body.style.overflow = "";
    };
  }, []);

  /*
   * =========================
   * ENABLE VIDEO SOUND
   * =========================
   */
  const enableSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      /*
       * Keep current video position.
       * Only enable its existing audio.
       */
      video.muted = false;
      video.volume = 0.8;

      /*
       * Because this function is triggered
       * by the user's click, the browser
       * allows playback with sound.
       */
      await video.play();

      setSoundEnabled(true);
    } catch (error) {
      console.error(
        "Unable to enable video sound:",
        error
      );

      /*
       * If something prevents audio,
       * keep the video playing muted.
       */
      video.muted = true;
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed left-0 top-0 z-[99999] h-[100dvh] w-[100vw] overflow-hidden bg-black ${
        fadeOut
          ? "pointer-events-none opacity-0 transition-opacity duration-[850ms]"
          : "opacity-100"
      }`}
    >
      {/* =========================
          OPENING VIDEO
          ========================= */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="
          absolute
          left-1/2
          top-1/2
          h-full
          w-full
          min-h-full
          min-w-full
          -translate-x-1/2
          -translate-y-1/2
          object-cover
        "
      >
        {/* MOBILE */}
        <source
          src="/films/camera-opening-mobile.mp4"
          media="(max-width: 767px)"
          type="video/mp4"
        />

        {/* DESKTOP */}
        <source
          src="/films/camera-opening.mp4"
          media="(min-width: 768px)"
          type="video/mp4"
        />
      </video>

      {/* =========================
          CINEMATIC OVERLAY
          ========================= */}
      <div
        className="
          absolute
          inset-0
          bg-black/10
          pointer-events-none
        "
      />

      {/* =========================
          SOUND ON BUTTON
          ========================= */}
      {!soundEnabled && (
        <button
          onClick={enableSound}
          aria-label="Enable sound"
          className="
            absolute
            bottom-8
            left-1/2
            z-30
            -translate-x-1/2

            group

            flex
            items-center
            gap-3

            rounded-full
            border
            border-white/30

            bg-black/30
            px-6
            py-3

            text-[10px]
            font-light
            uppercase
            tracking-[4px]
            text-white

            backdrop-blur-md

            transition-all
            duration-500

            hover:border-[#C6A96B]
            hover:bg-black/50
            hover:text-[#C6A96B]

            active:scale-95
          "
        >
          {/* SOUND ICON */}
          <span
            className="
              flex
              h-2
              w-2
              rounded-full
              bg-[#C6A96B]

              shadow-[0_0_12px_rgba(198,169,107,0.9)]

              transition-all
              duration-300

              group-hover:scale-125
            "
          />

          SOUND ON

          {/* ARROW */}
          <span
            className="
              text-white/60
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      )}

      {/* =========================
          CENTER LOGO
          ========================= */}
      <div
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          transition-all
          duration-[900ms]
          ease-out

          ${
            showLogo
              ? "scale-100 opacity-100"
              : "scale-[0.92] opacity-0"
          }
        `}
      >
        <div className="text-center text-white">

          {/* BRAND */}
          <h1
            className="
              font-heading
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-light
              tracking-[8px]
              sm:tracking-[12px]
              md:tracking-[16px]
              drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]
            "
          >
            KUTTI STORY
          </h1>

          {/* GOLD LINE */}
          <div
            className="
              mx-auto
              mt-5
              h-px
              w-20
              sm:w-28
              md:w-36
              bg-[#C6A96B]
              shadow-[0_0_18px_rgba(198,169,107,0.8)]
            "
          />

          {/* PHOTOGRAPHY */}
          <p
            className="
              mt-4
              text-[9px]
              sm:text-[10px]
              md:text-xs
              uppercase
              tracking-[6px]
              sm:tracking-[8px]
              text-white/90
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]
            "
          >
            PHOTOGRAPHY
          </p>

        </div>
      </div>

      {/* =========================
          VIGNETTE
          ========================= */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.38)_100%)]
        "
      />
    </div>
  );
}