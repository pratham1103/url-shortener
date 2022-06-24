import logo from "./logo.svg";
import "./App.css";
import InputShortener from "./InputShortener";
import BgAnimate from "./BgAnimate";
import LinkResult from "./LinkResult";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BgAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
