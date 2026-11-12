import "./StringTheoryPhone.css";

// Index cards pinned to the mock corkboard. Positions are px inside the phone screen.
const PINNED_CARDS = [
  { kind: "PERSON", title: "D.B. Cooper", left: 22, top: 96, width: 112, tilt: -4, paper: "#F5F7F8" },
  { kind: "EVIDENCE", title: "Ransom note", left: 138, top: 168, width: 104, tilt: 3, paper: "#D5E6EC" },
  { kind: "LOCATION", title: "Ariel, WA", left: 40, top: 318, width: 104, tilt: 2, paper: "#E3E9EC" },
];

// Colored strings running between the cards.
const STRINGS = [
  { left: 84, top: 128, length: 92, angle: 28, color: "#F0675C" },
  { left: 70, top: 150, length: 170, angle: 78, color: "#6FB2CF" },
  { left: 172, top: 186, length: 150, angle: 104, color: "#A98BF0" },
];

/** Decorative phone showing a StringTheory corkboard, tilted and drifting. */
function StringTheoryPhone() {
  return (
    <div
      className="string-theory-phone float-slow"
      style={{ "--tilt": "-5deg" }}
      role="img"
      aria-label="StringTheory app on a phone"
    >
      <div className="string-theory-phone__screen">
        {STRINGS.map((string) => (
          <div
            key={string.color}
            className="string-theory-phone__string"
            style={{
              left: string.left,
              top: string.top,
              width: string.length,
              background: string.color,
              transform: `rotate(${string.angle}deg)`,
            }}
          />
        ))}

        {PINNED_CARDS.map((card) => (
          <div
            key={card.title}
            className="string-theory-phone__card"
            style={{
              left: card.left,
              top: card.top,
              width: card.width,
              background: card.paper,
              transform: `rotate(${card.tilt}deg)`,
            }}
          >
            <span className="string-theory-phone__card-kind">{card.kind}</span>
            <span className="string-theory-phone__card-title">{card.title}</span>
          </div>
        ))}

        <div className="string-theory-phone__insight">
          <span className="string-theory-phone__insight-heading">SOMETHING DOESN'T ADD UP</span>
          Nobody on your board can account for 11:42 to midnight.
        </div>
      </div>
    </div>
  );
}

export default StringTheoryPhone;
