// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./../styles/Carousel.css";

// import img1 from "./../Images/slide-01.png";
// import img2 from "./../Images/slider-02.png";
// import img3 from "./../Images/slider-03.png";
// import img4 from "./../Images/slider-04.png";

// const slides = [
//   {
//     title: "Vision",
//     description: "Our business model is unique and is positioned around fulfillment of client requirements",
//     img: img1,
//     link: "/expertise",
//   },
//   {
//     title: "Recruit the best talent!",
//     description: "Optimized solutions meeting all your business needs",
//     img: img2,
//     link: "/careers",
//   },
//   {
//     title: "We're Quality Engineers",
//     description: "Optimized solutions meeting all your business needs",
//     img: img3,
//     link: "/quality-engineering",
//   },
//   {
//     title: "Let's Connect",
//     description: "Contact Us For More Information",
//     img: img4,
//     link: "/contact-us",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const currentSlide = slides[currentIndex];

//   return (
//     <div className="carousel-wrapper">
//       <div className="carousel-slide" key={currentIndex}>
//         <div className="carousel-text animate-text">
//           <h1>{currentSlide.title}</h1>
//           <p>{currentSlide.description}</p>
//           <button className="read-more-btnc" onClick={() => navigate(currentSlide.link)} aria-label={`Read more about ${currentSlide.title}`}>
//             Read More
//           </button>
//         </div>
//         <div className="carousel-image animate-image">
//           <img src={currentSlide.img} />
//         </div>
//       </div>

//       <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous slide">❮</button>
//       <button className="carousel-btn next" onClick={goToNext} aria-label="Next Slide">❯</button>

//       {/* <div className="carousel-indicators">
//         {slides.map((_, idx) => (
//           <span
//             key={idx}
//             className={`indicator ${idx === currentIndex ? "active" : ""}`}
//             onClick={() => goToSlide(idx)}
//           ></span>
//         ))}
//       </div> */}
//       <div className="carousel-indicators" aria-label="Slide indicators">
//   {slides.map((_, idx) => (
//     <button
//       key={idx}
//       className={`indicator ${idx === currentIndex ? "active" : ""}`}
//       onClick={() => goToSlide(idx)}
//       aria-label={`Slide ${idx + 1} of ${slides.length}`}
//       aria-current={idx === currentIndex ? "true" : undefined}
//     />
//   ))}
// </div>

//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Carousel.css";

import img1 from "./../Images/slide-01.png";
import img2 from "./../Images/slider-02.png";
import img3 from "./../Images/slider-03.png";
import img4 from "./../Images/slider-04.png";

const slides = [
  {
    title: "Vision",
    description: "Our business model is unique and is positioned around fulfillment of client requirements",
    img: img1,
    link: "/expertise",
  },
  {
    title: "Recruit the best talent!",
    description: "Optimized solutions meeting all your business needs",
    img: img2,
    link: "/careers",
  },
  {
    title: "We're Quality Engineers",
    description: "Optimized solutions meeting all your business needs",
    img: img3,
    link: "/quality-engineering",
  },
  {
    title: "Let's Connect",
    description: "Contact Us For More Information",
    img: img4,
    link: "/contact-us",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false); // ✅ Added for pause/play
  const navigate = useNavigate();

  useEffect(() => {
    if (paused) return; // ✅ Skip auto-slide when paused
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [paused]); // ✅ Re-run if paused state changes

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="carousel-wrapper">
      {/* ✅ Play/Pause Button */}
      <button
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Resume carousel" : "Pause carousel"}
        className="carousel-pause-btn"
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#000"
        }}
      > 
         <i className={paused ? "fas fa-play" : "fas fa-pause"} style={{
      color: paused ? "#ffffff" : "#ffffff", // Green for play, red for pause
      transition: "color 0.3s ease",
    }}></i>
      </button>

      <div className="carousel-slide" key={currentIndex}>
        <div className="carousel-text animate-text">
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.description}</p>
          <button
            className="read-more-btnc"
            onClick={() => navigate(currentSlide.link)}
            aria-label={`Read more about ${currentSlide.title}`}
          >
            Read More
          </button>
        </div>
        <div className="carousel-image animate-image">
          <img src={currentSlide.img} alt=""  />
        </div>
      </div>

      <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous slide">❮</button>
      <button className="carousel-btn next" onClick={goToNext} aria-label="Next Slide">❯</button>

      <div className="carousel-indicators" aria-label="Slide indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Slide ${idx + 1} of ${slides.length}`}
            aria-current={idx === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
