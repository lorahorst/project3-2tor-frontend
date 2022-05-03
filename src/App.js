import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar, FileUpload, Footer } from "components";


function App() {
  // variable to store file url
  

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
