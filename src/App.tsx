import "./App.css";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="flex">
        <Aside />
        <MainContent />
      </div>
    </ContextProvider>
  );
}

export default App;
