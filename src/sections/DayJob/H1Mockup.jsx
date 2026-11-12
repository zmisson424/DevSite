import "./H1Mockup.css";

// Line items shown on the mock purchase-order screen.
const PURCHASE_ORDER_ITEMS = [
  { material: "Pallet wrap", quantity: 40 },
  { material: "Shrink film", quantity: 8 },
];

const SCREEN_NAMES = ["Goods receipt", "Purchase order", "Cycle count"];
const SELECTED_SCREEN = "Purchase order";

/**
 * Decorative "before and after" for H1: a faded classic SAP GUI screen behind
 * the modern screens H1 generates, all slightly tilted and drifting.
 */
function H1Mockup() {
  return (
    <div className="h1-mockup" role="img" aria-label="H1 app screens floating over an old SAP screen">
      {/* Before: the classic SAP transaction screen */}
      <div className="h1-mockup__legacy-screen" aria-hidden="true">
        <div className="h1-mockup__legacy-title">ME21N  Create Purchase Order</div>
        <div className="h1-mockup__legacy-body">
          <span>Vendor ____________ PurchOrg ____</span>
          <span>Itm  Material  Short Text  PO Qty  OUn</span>
          <span>10   ________  __________  ______  ___</span>
          <span>20   ________  __________  ______  ___</span>
        </div>
      </div>
      <p className="h1-mockup__legacy-caption" aria-hidden="true">
        before, circa forever
      </p>

      {/* After: H1's screen picker */}
      <div className="h1-mockup__screen-list float" style={{ "--tilt": "-3deg" }}>
        <p className="h1-mockup__screen-list-heading">SCREENS</p>
        <div className="h1-mockup__screen-options">
          {SCREEN_NAMES.map((screenName) => (
            <span
              key={screenName}
              className={
                screenName === SELECTED_SCREEN
                  ? "h1-mockup__screen-option is-selected"
                  : "h1-mockup__screen-option"
              }
            >
              {screenName}
            </span>
          ))}
        </div>
      </div>

      {/* After: the generated purchase-order screen */}
      <div className="h1-mockup__phone-card float-slow" style={{ "--tilt": "2deg" }}>
        <div className="h1-mockup__phone-header">
          <p className="h1-mockup__phone-header-label">Purchase order</p>
          <p className="h1-mockup__phone-header-number">4500018231</p>
        </div>
        <div className="h1-mockup__phone-body">
          {PURCHASE_ORDER_ITEMS.map((item) => (
            <div key={item.material} className="h1-mockup__line-item">
              <span>{item.material}</span>
              <span className="h1-mockup__line-quantity">{item.quantity}</span>
            </div>
          ))}
          <div className="h1-mockup__post-button">Post</div>
        </div>
      </div>

      {/* The metadata mapping that makes it work */}
      <div className="h1-mockup__field-mapping float" style={{ "--tilt": "1deg" }}>
        EKPO.MENGE <span className="h1-mockup__arrow">→</span> Quantity
      </div>
    </div>
  );
}

export default H1Mockup;
