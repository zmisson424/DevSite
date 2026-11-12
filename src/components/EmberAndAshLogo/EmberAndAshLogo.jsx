import "./EmberAndAshLogo.css";

/**
 * Ember & Ash logo lockup: a two-tone flame with drifting ash, plus the wordmark.
 * The company only ever appears on this site as this lockup, never its colors or fonts.
 */
function EmberAndAshLogo() {
  return (
    <div className="ember-and-ash-logo">
      <svg width="26" height="28" viewBox="0 0 64 68" aria-hidden="true">
        {/* Outer and inner flame */}
        <path
          d="M32 60 C21 60 15 52 15 43 C15 34 21 29 25 20 C28 27 32 29 34 33 C36 30 37 27 36 23 C44 29 49 36 49 44 C49 53 42 60 32 60 Z"
          fill="#FF5A1F"
        />
        <path
          d="M32 56 C27 56 24 52 24 47 C24 42 27 39 29 35 C31 39 33 40 34 43 C36 41 36 40 36 38 C39 41 40 44 40 47 C40 52 37 56 32 56 Z"
          fill="#FFB020"
        />
        {/* Embers rising */}
        <rect x="28" y="13" width="4" height="4" fill="#FF5A1F" />
        <rect x="36" y="9" width="3.5" height="3.5" fill="#B8654A" />
        <rect x="25" y="5" width="3" height="3" fill="#8A8580" />
        <rect x="33" y="1" width="2.5" height="2.5" fill="#5E5955" />
        {/* Ash settled underneath */}
        <rect x="18" y="63" width="3" height="3" fill="#5E5955" />
        <rect x="23" y="62" width="4" height="4" fill="#8A8580" />
        <rect x="30" y="62" width="4" height="4" fill="#B8654A" />
        <rect x="37" y="62" width="4" height="4" fill="#8A8580" />
        <rect x="43" y="63" width="3" height="3" fill="#5E5955" />
      </svg>
      <span className="ember-and-ash-logo__wordmark">
        EMBER <span className="ember-and-ash-logo__ash">&amp; ASH</span>
      </span>
    </div>
  );
}

export default EmberAndAshLogo;
