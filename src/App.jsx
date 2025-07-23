import IntroCard from "./components/IntroCard";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ backgroundColor: "lightgray", width: "100%", height: "100%" }}>
    <IntroCard />
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ color: "red" , fontSize: "3rem", fontWeight: "bold" , marginBottom: "1rem" , textTransform: "uppercase" , letterSpacing: "0.2rem" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textAlign: "center", alignItems: "center"}}>Hello React + Vite ⚡</h1>
      <p>Day 1: I just started learning React!</p>
    </div>
    <UserCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />
    <UserCard name="Jane Doe" email="jane.doe@example.com" phone="123-456-7890" />
    <UserCard name="Jim Doe" email="jim.doe@example.com" phone="123-456-7890" />
    </div>
  );
}

export default App;
