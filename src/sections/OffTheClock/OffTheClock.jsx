import { OFF_THE_CLOCK_PHOTO, PASTIMES } from "../../data/offTheClock";
import "./OffTheClock.css";

/** "When I'm not working…" — a tilted polaroid and a short list of pastimes. */
function OffTheClock() {
  return (
    <section id="off" className="off-the-clock page-container">
      <div className="off-the-clock__row">
        <div className="off-the-clock__intro reveal">
          <h2 className="off-the-clock__title">When I'm not working…</h2>

          <div className="off-the-clock__polaroid float-slow" style={{ "--tilt": "-4deg" }}>
            {OFF_THE_CLOCK_PHOTO ? (
              <img src={OFF_THE_CLOCK_PHOTO} alt="Zach, off the clock" className="off-the-clock__photo" />
            ) : (
              <div className="off-the-clock__photo-placeholder">[a photo of you, mid-something]</div>
            )}
          </div>
        </div>

        <div className="off-the-clock__list reveal">
          {PASTIMES.map((pastime) => (
            <div key={pastime.verb} className="off-the-clock__item">
              <span className="off-the-clock__verb">{pastime.verb}</span>
              <span className="off-the-clock__activity">{pastime.activity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffTheClock;
