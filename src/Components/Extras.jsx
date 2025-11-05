import React, { useRef, useEffect, useState } from "react";
import "./Foods.css";
import { extras } from "../Utils/Foods";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";

export default function Extras() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    if (isHovered) return; // pause on hover
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

        // Loop back to start if end reached
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div id="sides" className="extras-container">
      <h2>Sides</h2>
      <div
        className="meal-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="arrow left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="meal-container" ref={scrollRef}>
          {extras.map((extra, index) => (
            <div className="meal-card" key={index}>
              <img src={extra.image} alt={extra.title} />
              <div className="meal-info">
                <h3>{extra.title}</h3>
                <p>{extra.description}</p>
                <h4>₦{extra.price}</h4>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: `extra-${index}`,
                        title: extra.title,
                        price: extra.price,
                      })
                    )
                  }
                >
                  Add to Tray
                </button>
                {/* <button>Add to Tray</button> */}
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </div>
  );
}
