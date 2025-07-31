import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

/**
 * Smooth scroll to a section using GSAP
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} duration - Animation duration in seconds (default: 1.5)
 * @param {string} ease - Easing function (default: "power2.inOut")
 */
export const smoothScrollToSection = (sectionId, duration = 1.5, ease = "power2.inOut") => {
  const section = document.getElementById(sectionId);
  
  if (section) {
    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: section,
        offsetY: 0 // Adjust if you want offset from navbar
      },
      ease: ease
    });
  } else {
    console.warn(`Section with ID "${sectionId}" not found`);
  }
};

/**
 * Smooth scroll to top of page
 * @param {number} duration - Animation duration in seconds (default: 1.2)
 */
export const smoothScrollToTop = (duration = 1.2) => {
  gsap.to(window, {
    duration: duration,
    scrollTo: { y: 0 },
    ease: "power2.inOut"
  });
};
