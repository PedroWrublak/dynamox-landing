// src/components/Hero/Hero.tsx
import { useEffect, useState } from "react";
import "./Hero.css";

import HeroLogo from "../../assets/icons/dynamox-logo.svg";
import Slide01 from "../../assets/images/carrousel-01.png";
import Slide02 from "../../assets/images/carrousel-02.png";
import Slide03 from "../../assets/images/carrousel-03.png";

const slides = [
  {
    id: 1,
    src: Slide01,
    alt: "Industrial workers reviewing plans",
  },
  {
    id: 2,
    src: Slide02,
    alt: "Team working at a facility",
  },
  {
    id: 3,
    src: Slide03,
    alt: "Engineer inspecting equipment",
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0); // center image is active by default

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    // Cleanup: cancel the timer if the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Reorder slides so active is always in the center
  // Example: if activeIndex=2, order becomes [1, 2, 0]
  const getOrderedSlides = () => {
    const total = slides.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [
      { ...slides[prev], position: "side" },
      { ...slides[activeIndex], position: "active" },
      { ...slides[next], position: "side" },
    ];
  };

  const orderedSlides = getOrderedSlides();

  return (
    <section className="hero" aria-label="Hero section">
      {/* Logo */}
      <img src={HeroLogo} alt="Dynamox logo" className="hero__logo" />

      {/* Headline */}
      <div className="hero__content">
        <h1 className="hero__title">
          Juntos por uma indústria{" "}
          <span className="hero__title--highlight">mais produtiva</span>
        </h1>
        <p className="hero__subtitle">
          Esse manifesto é a consolidação da nossa missão de impactar
          positivamente o mercado de soluções para indústria com produtos de
          qualidade e cuidado de ponta a ponta.
        </p>
      </div>

      {/* Carousel */}
      <div className="hero__carousel" role="region" aria-label="Image carousel">
        {orderedSlides.map((slide, index) => (
          <button
            key={`${slide.id}-${index}`}
            className={`hero__slide ${
              slide.position === "active" ? "hero__slide--active" : ""
            }`}
            onClick={() =>
              setActiveIndex(slides.findIndex((s) => s.id === slide.id))
            }
            aria-label={slide.alt}
            aria-pressed={slide.position === "active"}
          >
            <img src={slide.src} alt={slide.alt} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
