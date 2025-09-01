import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation configurations
export const animations = {
  // Fade in from bottom
  fadeInUp: {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },

  // Fade in from left
  fadeInLeft: {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },

  // Fade in from right
  fadeInRight: {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },

  // Scale in
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  },

  // Stagger children
  staggerChildren: {
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
  },

  // Text reveal
  textReveal: {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  },

  // Image reveal
  imageReveal: {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
};

// Scroll trigger configurations
export const scrollTriggers = {
  // Trigger when element enters viewport
  onEnter: {
    trigger: "self",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },

  // Trigger when element is 20% in viewport
  onEnter20: {
    trigger: "self",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },

  // Trigger when element is 50% in viewport
  onEnter50: {
    trigger: "self",
    start: "center 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },

  // Trigger for staggered animations
  stagger: {
    trigger: "self",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
};

// Utility functions
export const animateElement = (
  element,
  animation,
  trigger = scrollTriggers.onEnter
) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { ...animation },
    {
      ...animation,
      scrollTrigger: {
        ...trigger,
        trigger: element,
      },
    }
  );
};

export const animateStaggered = (
  elements,
  animation,
  trigger = scrollTriggers.stagger
) => {
  if (!elements || elements.length === 0) return;

  gsap.fromTo(
    elements,
    { ...animation },
    {
      ...animation,
      scrollTrigger: {
        ...trigger,
        trigger: elements[0],
      },
    }
  );
};

export const animateText = (element, trigger = scrollTriggers.onEnter) => {
  if (!element) return;

  // Split text into characters for character-by-character animation
  const text = element.textContent;
  element.textContent = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });

  gsap.fromTo(
    chars,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
      scrollTrigger: {
        ...trigger,
        trigger: element,
      },
    }
  );
};

export const animateCounter = (
  element,
  targetValue,
  duration = 2,
  trigger = scrollTriggers.onEnter
) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { innerHTML: 0 },
    {
      innerHTML: targetValue,
      duration: duration,
      ease: "power2.out",
      snap: { innerHTML: 1 },
      scrollTrigger: {
        ...trigger,
        trigger: element,
      },
    }
  );
};

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

// Initialize animations for a component
export const initAnimations = (componentRef, animations) => {
  if (!componentRef.current) return;

  // Apply animations based on data attributes or class names
  const elements = componentRef.current.querySelectorAll("[data-animate]");

  elements.forEach((element) => {
    const animationType = element.getAttribute("data-animate");
    const delay = element.getAttribute("data-delay") || 0;

    switch (animationType) {
      case "fadeInUp":
        animateElement(element, {
          ...animations.fadeInUp,
          delay: parseFloat(delay),
        });
        break;
      case "fadeInLeft":
        animateElement(element, {
          ...animations.fadeInLeft,
          delay: parseFloat(delay),
        });
        break;
      case "fadeInRight":
        animateElement(element, {
          ...animations.fadeInRight,
          delay: parseFloat(delay),
        });
        break;
      case "scaleIn":
        animateElement(element, {
          ...animations.scaleIn,
          delay: parseFloat(delay),
        });
        break;
      case "textReveal":
        animateText(element);
        break;
      default:
        animateElement(element, animations.fadeInUp);
    }
  });
};
