import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP if using GSAP 3
import '../Assets/Styles/Slider.css'; // Import your CSS file

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderItems = Array.from(sliderRef.current.querySelectorAll('.slider-item'));

    const startAnim = (array) => {
      if (array.length >= 4) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

        tl.fromTo(array[0], { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, duration: 0.5, ease: "power1.inOut" })
          .fromTo(array[1], { x: 79, y: 125, opacity: 1 }, { x: 0, y: 0, opacity: 0.75, duration: 0.5, ease: "power1.inOut", boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)' })
          .to(array[2], { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', duration: 0.5, opacity: 1, ease: "power1.inOut" })
          .fromTo(array[3], { x: 0, y: 400, opacity: 0 }, { x: 0, y: 250, opacity: 0.75, duration: 0.5, ease: "power1.inOut" });
      } else {
        sliderRef.current.innerHTML = '<p>Sorry, carousel should contain more than 3 slides</p>';
      }
    };

    if (sliderItems.length > 0) {
      startAnim(sliderItems);
    }

  }, []);

  return (
    <div className="slider-wrap">
      <div id="card-slider" className="slider" ref={sliderRef}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="slider-item" key={index}>
            <div className="animation-card_image">
              <img src="https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg" alt={`Charlize Theron ${index + 1}`} />
            </div>
            <div className="animation-card_content">
              <h4 className="animation-card_content_title title-2">Charlize Theron {index + 1}</h4>
              <p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
              <p className="animation-card_content_city">New York, NY</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
