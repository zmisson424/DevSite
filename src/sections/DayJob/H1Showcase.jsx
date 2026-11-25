import { useState } from "react";
import { H1_PRODUCT } from "../../data/experience";
import { H1_URL } from "../../data/links";
import H1Mockup from "./H1Mockup";
import "./H1Showcase.css";

/** H1 product card: floating UI mockup, short pitch, and an expandable longer story. */
function H1Showcase() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <>
      <H1Mockup />

      <div className="h1-showcase__text">
        <div className="h1-showcase__title-block">
          <p className="mono-label">{H1_PRODUCT.eyebrow}</p>
          <h3 className="h1-showcase__name">
            {H1_PRODUCT.name} <span className="h1-showcase__full-name">{H1_PRODUCT.fullName}</span>
          </h3>
        </div>

        <div className="h1-showcase__pitch-block">
          <p className="h1-showcase__pitch">{H1_PRODUCT.summary}</p>

          <div className="h1-showcase__actions">
            <button
              type="button"
              className="h1-showcase__story-toggle"
              onClick={() => setIsStoryOpen((isOpen) => !isOpen)}
              aria-expanded={isStoryOpen}
            >
              {isStoryOpen ? "− less" : "+ the longer story"}
            </button>
            <a
              href={H1_URL}
              className="h1-showcase__link underline-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              see H1 ↗
            </a>
          </div>

          {isStoryOpen && (
            <div className="h1-showcase__story">
              {H1_PRODUCT.details.map((detail) => (
                <span key={detail.title}>
                  <span className="h1-showcase__story-title">{detail.title}</span> {detail.text}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default H1Showcase;
