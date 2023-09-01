import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import AudioPlayer from "./components/New/AudioPlayer";
import Primer1 from "./components/New/Form";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <AudioPlayer />
      <Primer1 />
    </div>
  );
}

export default App;
