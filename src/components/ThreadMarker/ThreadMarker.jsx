import "./ThreadMarker.css";

/**
 * The brand's "thread": a dashed lime line that draws down as you scroll,
 * ending in a glowing dot and a short label that points at what came out of it.
 */
function ThreadMarker({ children }) {
  return (
    <div className="thread-marker">
      <div className="thread-marker__line thread-line" aria-hidden="true" />
      <p className="thread-marker__label">
        <span className="signal-dot" aria-hidden="true" />
        {children}
      </p>
    </div>
  );
}

export default ThreadMarker;
