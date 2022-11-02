import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="App h-screen w-screen bg-black text-white mx-auto font-mono">
        <header className="max-w-4xl mx-auto">
          <Navbar />
        </header>
        <main className="max-w-4xl mx-auto">
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
