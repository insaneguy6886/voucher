import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VoucherForm from "./components/VoucherForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <VoucherForm />
    </div>
  );
}

export default App;
