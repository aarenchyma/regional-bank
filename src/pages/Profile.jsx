import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();

    return (
        <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
            <div style={{ padding: "20px" }}>
                <div style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "24px",
                    textAlign: "center",
                    border: "1px solid #E0ECF8",
                    marginBottom: 24
                }}>
                    <div style={{
                        width: 80, height: 80, borderRadius: "50%",
                        background: "linear-gradient(135deg, #5BB8F5, #2A8FD4)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 16px",
                        fontSize: 32,
                        fontWeight: 700,
                        color: "#fff"
                    }}>
                        BH
                    </div>
                    <h2 style={{ margin: "0 0 4px", fontSize: 20, color: "#1A2B3C" }}>Bill Hitchen</h2>
                    <p style={{ margin: 0, fontSize: 13, color: "#8A9BB0" }}>bill.hitchen@email.com</p>
                    <p style={{ margin: "4px 0 0", fontSize: 12, color: "#8A9BB0" }}>+1 (555) 123-4567</p>
                </div>

                <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E0ECF8", marginBottom: 24 }}>
                    {[
                        { icon: "👤", label: "Personal Information" },
                        { icon: "🔒", label: "Security Settings" },
                        { icon: "📱", label: "Linked Accounts" },
                        { icon: "🎯", label: "Notifications" },
                        { icon: "⭐", label: "Preferences" },
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "16px 20px",
                            borderBottom: idx < 4 ? "1px solid #E0ECF8" : "none"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <span style={{ fontSize: 20 }}>{item.icon}</span>
                                <span style={{ fontSize: 14, color: "#1A2B3C" }}>{item.label}</span>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A9BB0" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    ))}
                </div>

                <button onClick={() => navigate("/auth")}
                style={{
                    width: "100%",
                    padding: "14px",
                    background: "#fff",
                    color: "#E50914",
                    border: "1px solid #FFCDD2",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer"
                }}>
                    Sign Out
                </button>
            </div>
        </div>
    );
}