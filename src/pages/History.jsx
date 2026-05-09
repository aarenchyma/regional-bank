const allTransactions = [
  { id: 1, name: "Netflix Subscription", date: "Today, 10:23 AM", amount: -150, icon: "N", color: "#E50914", status: "Completed" },
  { id: 2, name: "Salary Credit", date: "Yesterday, 9:00 AM", amount: 800, icon: "S", color: "#1A73E8", status: "Completed" },
  { id: 3, name: "Shopping", date: "Mar 16, 2:15 PM", amount: -400, icon: "J", color: "#FF6600", status: "Completed" },
  { id: 4, name: "Transfer to Mom", date: "Mar 15, 11:20 AM", amount: -200, icon: "M", color: "#E50914", status: "Completed" },
  { id: 5, name: "Transfer from Matt", date: "Mar 14, 3:30 PM", amount: 200, icon: "B", color: "#34A853", status: "Completed" },
  { id: 6, name: "Uber Ride", date: "Mar 13, 8:45 PM", amount: -24, icon: "U", color: "#000000", status: "Completed" },
  { id: 7, name: "Starbucks", date: "Mar 13, 9:15 AM", amount: -5, icon: "S", color: "#006241", status: "Completed" },
  { id: 8, name: "Dividend Payment", date: "Mar 12, 4:00 PM", amount: 45, icon: "D", color: "#1A73E8", status: "Completed" }
];

const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(Math.abs(n));

export default function History() {
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
          <p style={{ margin: "0 0 8px", fontSize: 13, opacity: 0.85 }}>Total Transactions</p>
          <p style={{ margin: 0, fontSize: 28, fontWeight: 800 }}>32 this month</p>
          <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
            <div>
              <p style={{ margin: 0, fontSize: 11, opacity: 0.75 }}>Total Spent</p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>$20,250</p>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 11, opacity: 0.75 }}>Total Received</p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>$6,216</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
          <button style={{
            flex: 1,
            padding: "10px",
            background: "#EBF5FC",
            border: "none",
            borderRadius: 12,
            color: "#2A8FD4",
            fontSize: 13,
            fontWeight: 600
          }}>All</button>
          <button style={{
            flex: 1,
            padding: "10px",
            background: "#fff",
            border: "1px solid #D0E8F7",
            borderRadius: 12,
            color: "#5A7290",
            fontSize: 13,
            fontWeight: 600
          }}>Income</button>
          <button style={{
            flex: 1,
            padding: "10px",
            background: "#fff",
            border: "1px solid #D0E8F7",
            borderRadius: 12,
            color: "#5A7290",
            fontSize: 13,
            fontWeight: 600
          }}>Expenses</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {allTransactions.map((txn) => (
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
              <div style={{ textAlign: "right" }}>
                <p style={{
                  margin: 0, fontSize: 13, fontWeight: 700,
                  color: txn.amount > 0 ? "#2A8FD4" : "#1A2B3C",
                }}>
                  {txn.amount > 0 ? "+" : "-"}{fmt(txn.amount)}
                </p>
                <p style={{ margin: 0, fontSize: 10, color: "#8A9BB0" }}>{txn.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}