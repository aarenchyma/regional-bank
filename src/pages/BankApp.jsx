import { useState } from "react";
import Home from "./Home";
import Transfer from "./Transfer";
import History from "./History";
import Cards from "./Cards";
import Profile from "./Profile";

const NAV_ITEMS = [
    { key: "home", label: "Home", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
    { key: "transfer", label: "Transfer", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg> },
    { key: "transactions", label: "History", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
    { key: "cards", label: "Cards", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg> },
    { key: "profile", label: "Profile", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
];

export default function BankApp() {
    const [active, setActive] = useState("home");

    const renderPage = () => {
        switch (active) {
            case "home": return <Home setActive={setActive} />;
            case "transfer": return <Transfer />;
            case "transactions": return <History />;
            case "cards": return <Cards />;
            case "profile": return <Profile />;
            default: return <Home setActive={setActive} />;
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "#F0F4F8",
            fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
            display: "flex",
            flexDirection: "column",
            maxWidth: 430,
            margin: "0 auto",
            position: "relative",
        }}>
            {/* Header */}
            <div style={{
                background: "#fff",
                padding: "18px 20px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #E8EDF2",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                        width: 42, height: 42, borderRadius: "50%",
                        background: "linear-gradient(135deg, #5BB8F5, #2A8FD4)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", fontWeight: 700, fontSize: 15,
                    }}>
                        BH
                    </div>
                    <div>
                        <p style={{ margin: 0, fontSize: 11, color: "#8A9BB0", fontWeight: 500 }}>
                            {new Date().getHours() < 12 ? "Good morning," : new Date().getHours() < 18 ? "Good afternoon," : "Good evening,"}
                        </p>
                        <p style={{ margin: 0, fontSize: 15, color: "#1A2B3C", fontWeight: 700 }}>Bill Hitchen</p>
                    </div>
                </div>
                <div style={{ position: "relative", cursor: "pointer" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A9BB0" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    <span style={{
                        position: "absolute", top: -2, right: -2,
                        width: 8, height: 8, borderRadius: "50%",
                        background: "#5BB8F5", border: "2px solid #fff",
                    }} />
                </div>
            </div>

            {/* Page Content */}
            {renderPage()}

            {/* Bottom Nav */}
            <div style={{
                position: "fixed",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                maxWidth: 430,
                background: "#fff",
                borderTop: "1px solid #E8EDF2",
                display: "flex",
                justifyContent: "space-around",
                padding: "10px 0 18px",
                zIndex: 100,
            }}>
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.key;
                    return (
                        <button
                            key={item.key}
                            onClick={() => setActive(item.key)}
                            style={{
                                background: "none",
                                border: "none",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 3,
                                cursor: "pointer",
                                color: isActive ? "#2A8FD4" : "#A0B4C8",
                                padding: "4px 10px",
                                borderRadius: 10,
                                transition: "color 0.2s",
                            }}
                        >
                            {item.icon}
                            <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 500 }}>{item.label}</span>
                            {isActive && (
                                <div style={{
                                    width: 4, height: 4, borderRadius: "50%",
                                    background: "#2A8FD4",
                                }} />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}