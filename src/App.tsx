import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="App h-screen w-screen bg-black text-white mx-auto font-mont">
        <header className="max-w-4xl mx-auto">
          <Navbar />
        </header>
        <main className="max-w-4xl mx-auto h-[90vh]">
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
