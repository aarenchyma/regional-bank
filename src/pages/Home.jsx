import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TRANSACTIONS = [
  { id: 1, name: "Netflix Subscription", date: "Today, 10:23 AM", amount: -150, icon: "N", color: "#E50914" },
  { id: 2, name: "Salary Credit", date: "Yesterday, 9:00 AM", amount: 800, icon: "S", color: "#1A73E8" },
  { id: 3, name: "Shopping", date: "Mar 16, 2:15 PM", amount: -400, icon: "J", color: "#FF6600" },
  { id: 5, name: "Transfer from Matt", date: "Mar 14, 3:30 PM", amount: 200, icon: "B", color: "#34A853" },
];

const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(Math.abs(n));

export default function Home() {
  const [balanceHidden, setBalanceHidden] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
      {/* Balance Card */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{
          background: "linear-gradient(135deg, #1A7EC4 0%, #5BB8F5 100%)",
          borderRadius: 20,
          padding: "24px 22px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -30, right: -30,
            width: 130, height: 130, borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
          }} />
          <div style={{
            position: "absolute", bottom: -20, right: 70,
            width: 90, height: 90, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.85, fontWeight: 500 }}>Total Balance</p>
            <button
              onClick={() => setBalanceHidden(h => !h)}
              style={{
                background: "rgba(255,255,255,0.18)", border: "none",
                borderRadius: 8, padding: "3px 10px",
                color: "#fff", fontSize: 11, cursor: "pointer", fontWeight: 600,
              }}
            >
              {balanceHidden ? "Show" : "Hide"}
            </button>
          </div>

          <p style={{ margin: "0 0 20px", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
            {balanceHidden ? "$ ••••••" : "$ 8,248.00"}
          </p>

          <div style={{ display: "flex", gap: 28 }}>
            <div>
              <p style={{ margin: 0, fontSize: 11, opacity: 0.75 }}>Income</p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>$4,216</p>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.25)" }} />
            <div>
              <p style={{ margin: 0, fontSize: 11, opacity: 0.75 }}>Expenses</p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>$2,250</p>
            </div>
          </div>

          <p style={{ margin: "16px 0 0", fontSize: 12, opacity: 0.6, letterSpacing: 2 }}>**** **** **** 4821</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ padding: "22px 20px 0" }}>
        <p style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#1A2B3C" }}>Quick Actions</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "Deposit", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8FD4" strokeWidth="2.2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>, path: "/deposit" },
            { label: "Transfer", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8FD4" strokeWidth="2.2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>, path: "/transfer" },
            { label: "Pay Bills", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8FD4" strokeWidth="2.2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, path: "/paybills" },
            { label: "More", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8FD4" strokeWidth="2.5"><circle cx="5" cy="12" r="1.2" fill="#2A8FD4"/><circle cx="12" cy="12" r="1.2" fill="#2A8FD4"/><circle cx="19" cy="12" r="1.2" fill="#2A8FD4"/></svg>, path: "/more" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div
                onClick={() => item.path === "/transfer" && navigate("/transfer")}
                style={{
                  width: 54, height: 54,
                  background: "#EBF5FC",
                  borderRadius: 16,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  border: "1px solid #D0E8F7",
                }}
              >
                {item.icon}
              </div>
              <p style={{ margin: 0, fontSize: 11, color: "#5A7290", fontWeight: 600 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Banner */}
      <div style={{ padding: "22px 20px 0" }}>
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "14px 16px",
          border: "1px solid #E0ECF8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "#EBF5FC",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A8FD4" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1A2B3C" }}>Savings Wallet</p>
              <p style={{ margin: 0, fontSize: 11, color: "#8A9BB0" }}>4.5% p.a. interest</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#2A8FD4" }}>$6,500</p>
            <p style={{ margin: 0, fontSize: 10, color: "#8A9BB0" }}>Locked till Apr</p>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div style={{ padding: "22px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1A2B3C" }}>Recent Transactions</p>
          <p style={{ margin: 0, fontSize: 12, color: "#2A8FD4", fontWeight: 600, cursor: "pointer" }}>See all</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {TRANSACTIONS.map((txn) => (
            <div key={txn.id} style={{
              background: "#fff",
              borderRadius: 14,
              padding: "13px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #EEF3F8",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: txn.color + "18",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: txn.color, fontWeight: 800, fontSize: 15,
                }}>
                  {txn.icon}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1A2B3C" }}>{txn.name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#8A9BB0" }}>{txn.date}</p>
                </div>
              </div>
              <p style={{
                margin: 0, fontSize: 13, fontWeight: 700,
                color: txn.amount > 0 ? "#2A8FD4" : "#1A2B3C",
              }}>
                {txn.amount > 0 ? "+" : "-"}{fmt(txn.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}