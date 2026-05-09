export default function Cards() {
  const cards = [
    { type: "Visa Platinum", number: "**** **** **** 4821", expiry: "08/26", balance: 150248 },
    { type: "Mastercard Gold", number: "**** **** **** 9734", expiry: "12/25", balance: 90452 }
  ];

  return (
    <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: 24 }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{
              background: "linear-gradient(135deg, #1A7EC4 0%, #5BB8F5 100%)",
              borderRadius: 20,
              padding: "24px",
              color: "#fff",
              marginBottom: 16,
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 130, height: 130, borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
              }} />
              <div style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <p style={{ margin: 0, fontSize: 11, opacity: 0.75 }}>{card.type}</p>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <p style={{ margin: "0 0 24px", fontSize: 18, letterSpacing: 2 }}>{card.number}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ margin: 0, fontSize: 10, opacity: 0.7 }}>Valid Thru</p>
                  <p style={{ margin: 0, fontSize: 13 }}>{card.expiry}</p>
                </div>
                <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>${card.balance.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 16, padding: "20px", border: "1px solid #E0ECF8" }}>
          <p style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1A2B3C" }}>Card Settings</p>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid #E0ECF8" }}>
            <span style={{ fontSize: 13, color: "#1A2B3C" }}>Freeze Card</span>
            <div style={{ width: 44, height: 24, background: "#2A8FD4", borderRadius: 12, position: "relative", cursor: "pointer" }}>
              <div style={{ width: 20, height: 20, background: "white", borderRadius: "50%", position: "absolute", right: 2, top: 2 }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid #E0ECF8" }}>
            <span style={{ fontSize: 13, color: "#1A2B3C" }}>Change PIN</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A9BB0" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid #E0ECF8" }}>
            <span style={{ fontSize: 13, color: "#1A2B3C" }}>Contactless Limits</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A9BB0" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}