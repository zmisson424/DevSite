import { EMAIL_ADDRESS, SOCIAL_LINKS } from "../../data/links";
import "./SayHi.css";

/** Closing call to action: email plus social links. */
function SayHi() {
  return (
    <section id="hi" className="say-hi page-container">
      <div className="say-hi__content reveal">
        <p className="say-hi__headline">
          If any of this made you curious, <span className="say-hi__accent">say hi.</span>
        </p>

        <a href={`mailto:${EMAIL_ADDRESS}`} className="say-hi__email underline-link">
          {EMAIL_ADDRESS}
        </a>

        <p className="say-hi__socials">
          {SOCIAL_LINKS.map((socialLink) => (
            <a key={socialLink.label} href={socialLink.url} className="underline-link">
              {socialLink.label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}

export default SayHi;
