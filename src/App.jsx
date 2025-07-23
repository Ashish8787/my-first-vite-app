import IntroCard from "./components/IntroCard";

function App() {
  return (
    <>
    <IntroCard />
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ color: "red" , fontSize: "3rem", fontWeight: "bold" , marginBottom: "1rem" , textTransform: "uppercase" , letterSpacing: "0.2rem" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textAlign: "center", alignItems: "center"}}>Hello React + Vite ⚡</h1>
      <p>Day 1: I just started learning React!</p>
    </div>
    </>
  );
}

export default App;
