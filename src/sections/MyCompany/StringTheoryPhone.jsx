import boardScreenshot from "../../assets/string-theory/board-screenshot.webp";
import "./StringTheoryPhone.css";

/** Decorative phone showing a real StringTheory case board, tilted and drifting. */
function StringTheoryPhone() {
  return (
    <div className="string-theory-phone float-slow" style={{ "--tilt": "-5deg" }}>
      <img
        src={boardScreenshot}
        alt="A StringTheory case board for the Whitechapel murders, with suspects, victims and evidence joined by string"
        className="string-theory-phone__screen"
      />
    </div>
  );
}

export default StringTheoryPhone;
