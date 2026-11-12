import { HERO_TAGLINES } from "../../data/hero";
import { useRotatingItem } from "../../hooks/useRotatingItem";
import ThreadGraph from "./ThreadGraph";
import "./Hero.css";

const TAGLINE_INTERVAL_IN_MILLISECONDS = 2800;

/** Intro: name, a rotating "I build apps for …" line, and the thread graph. */
function Hero() {
  const currentTagline = useRotatingItem(HERO_TAGLINES, TAGLINE_INTERVAL_IN_MILLISECONDS);

  return (
    <section aria-label="Intro" className="hero page-container">
      <div className="hero__intro">
        <p className="hero__greeting">hello, i'm</p>
        <h1 className="hero__name">
          Zachery
          <br />
          <span className="hero__surname">Misson</span>
        </h1>
        <p className="hero__tagline">
          I build apps for <span className="hero__tagline-ending">{currentTagline}</span>
        </p>
        <p className="hero__nudge">
          <span className="hero__nudge-dot blink" aria-hidden="true" />
          pull on a thread →
        </p>
      </div>

      <div className="hero__graph">
        <ThreadGraph />
      </div>
    </section>
  );
}

export default Hero;
