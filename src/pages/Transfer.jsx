import { useState } from "react";

export default function Transfer() {
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [note, setNote] = useState("");

  const recentContacts = [
    { name: "Sarah Johnson", account: "****4821", bank: "Chase" },
    { name: "Mike Peterson", account: "****9374", bank: "Bank of America" },
    { name: "Emma Wilson", account: "****2047", bank: "Wells Fargo" }
  ];

  return (
    <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
      <div style={{ padding: "20px" }}>
        <div style={{
          background: "linear-gradient(135deg, #1A7EC4 0%, #5BB8F5 100%)",
          borderRadius: 20,
          padding: "20px",
          color: "#fff",
          marginBottom: 24
        }}>
          <p style={{ margin: "0 0 8px", fontSize: 13, opacity: 0.85 }}>Available Balance</p>
          <p style={{ margin: 0, fontSize: 28, fontWeight: 800 }}>$8,248.00</p>
        </div>

        <div style={{ background: "#fff", borderRadius: 16, padding: "20px", border: "1px solid #E0ECF8" }}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#1A2B3C", display: "block", marginBottom: 6 }}>Amount (USD)</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#8A9BB0", fontWeight: 600 }}>$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 28px",
                  border: "1px solid #D0E8F7",
                  borderRadius: 12,
                  fontSize: 16,
                  fontFamily: "inherit",
                  outline: "none",
                  background: "#F8FBFF"
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#1A2B3C", display: "block", marginBottom: 6 }}>Select Account</label>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D0E8F7",
                borderRadius: 12,
                fontSize: 14,
                fontFamily: "inherit",
                background: "#F8FBFF"
              }}
            >
              <option value="">Select account</option>
              <option value="savings">Savings Account (****4821)</option>
              <option value="checking">Checking Account (****9764)</option>
            </select>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#1A2B3C", display: "block", marginBottom: 6 }}>Note (Optional)</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D0E8F7",
                borderRadius: 12,
                fontSize: 14,
                fontFamily: "inherit",
                background: "#F8FBFF",
                outline: "none"
              }}
            />
          </div>

          <button style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #1A7EC4 0%, #5BB8F5 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: 24
          }}>
            Continue to Review
          </button>

          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 12 }}>Recent Contacts</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {recentContacts.map((contact, idx) => (
                <div key={idx} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderTop: "1px solid #E0ECF8"
                }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1A2B3C" }}>{contact.name}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#8A9BB0" }}>{contact.account} • {contact.bank}</p>
                  </div>
                  <button style={{
                    padding: "6px 16px",
                    background: "#EBF5FC",
                    border: "none",
                    borderRadius: 8,
                    color: "#2A8FD4",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer"
                  }}>
                    Send
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}