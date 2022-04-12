import { Outlet } from "react-router-dom";
import "./App.module.css";
import { Navbar } from "components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      footer
    </div>
  );
}

export default App;
