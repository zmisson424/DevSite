import ConnectionGraph from "./ConnectionGraph";
import "./Hero.css";

/** Intro: name, a one-line personal tagline, and the connection graph. */
function Hero() {
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
          I build things{" "}
          <span className="hero__tagline-accent">for the fun of it</span>, and
          I never quite stop tinkering.
        </p>
        <p className="hero__nudge">
          <span className="hero__nudge-dot blink" aria-hidden="true" />
          pick a name to learn more →
        </p>
      </div>

      <div className="hero__graph">
        <ConnectionGraph />
      </div>
    </section>
  );
}

export default Hero;
