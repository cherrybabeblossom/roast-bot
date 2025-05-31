import { useState } from "react";

const roasts = [
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "You bring everyone so much joy… when you leave the room.",
  "You're not stupid — you just have bad luck thinking.",
  "You're the reason shampoo has instructions.",
  "You're as useless as the 'g' in lasagna.",
  "If I wanted to hear from someone irrelevant, I’d check the spam folder.",
  "You have something on your chin... no, the third one down.",
  "You're like a software update — always showing up at the worst time.",
  "You're not a vibe. You're a virus.",
  "If I had a dollar for every smart thing you said, I'd still be broke."
];

export default function RoastBot() {
  const [name, setName] = useState("");
  const [roast, setRoast] = useState("");

  const handleRoast = () => {
    if (!name) return;
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    setRoast(`${name}, ${randomRoast}`);
  };

  return (
    <div style={{ fontFamily: "Segoe UI", textAlign: "center", padding: "3rem", background: "#fff0f5", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#c71585" }}>🔥 Roast Bot 3000</h1>
      <input
        type="text"
        placeholder="Who needs to be humbled?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "0.5rem", borderRadius: "10px", border: "1px solid #c71585", marginBottom: "1rem", width: "250px" }}
      />
      <br />
      <button onClick={handleRoast} style={{ background: "#c71585", color: "white", padding: "0.5rem 1.5rem", borderRadius: "10px", border: "none" }}>
        Roast Me
      </button>
      {roast && (
        <div style={{ marginTop: "2rem", background: "white", padding: "1.5rem", borderRadius: "15px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", color: "#c71585" }}>
          😈 {roast}
        </div>
      )}
    </div>
  );
}
