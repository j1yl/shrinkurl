import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="App w-screen bg-black text-white font-mont">
        <header className="max-w-4xl mx-auto w-full" id="main">
          <Navbar />
        </header>
        <main className="max-w-4xl mx-auto h-[90vh] w-full">
          <Hero />
        </main>
        <section
          className="h-screen w-full max-w-4xl mx-auto flex justify-center flex-col gap-5"
          id="about"
        >
          <About />
        </section>
      </div>
    </>
  );
}

export default App;
