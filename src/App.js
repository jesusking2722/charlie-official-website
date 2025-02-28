import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesFile from "./RoutesFile";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RoutesFile />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
