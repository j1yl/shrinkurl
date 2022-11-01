import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";

function App() {
  return (
    <div className="App h-screen w-screen bg-slate-800 text-white mx-auto font-mono">
      <header className="max-w-4xl mx-auto">
        <Navbar />
      </header>
      <main className="max-w-4xl mx-auto">
        <Input />
      </main>
    </div>
  );
}

export default App;
