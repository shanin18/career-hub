import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="h-[100vh - 681px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
