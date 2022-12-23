import Navigation from "./components/layout/Navigation";
import FirstSection from "./components/layout/FirstSection";
import './App.css'
function App() {
  return (
    <div>
      <div className="sticky">
        <Navigation />
      </div>
      <FirstSection />
    </div>
  );
}

export default App;
