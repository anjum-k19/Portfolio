import { useEffect } from "react";

function FloatSection({ children }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".float-section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      { threshold: 0.2 } // adjust trigger point (20% visible)
    );

    sections.forEach(section => observer.observe(section));
  }, []);

  return <div className="float-section">{children}</div>;
}

export default FloatSection;
