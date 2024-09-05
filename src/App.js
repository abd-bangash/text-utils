import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import TextArea from "./components/TextArea.js";
import Summary from "./components/Summary.js";
import Butons from "./components/Butons.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
function App() {
  // all methods needed to be passed as props to children components

  const handleTextValueChange = (event) => {
    setText(event.target.value);
  };
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    manageAlertObject("Converted to upper case", "success");
  };
  const handlelowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    manageAlertObject("Converted to lower case", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    manageAlertObjectForSpeech("Speaking your message", "success");
  };
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };
    recognition.start();
    manageAlertObjectForSpeech(
      "Speak into mic , once you start speaking pausing for 2 seconds will stop recording the message",
      "info"
    );
  };
  const clearText = () => {
    setText("");
    if (copyFlag === 0 && text.length !== 0) {
      manageAlertObject("Cleared all text without copying", "danger");
    } else if (text.length !== 0 && copyFlag !== 0) {
      manageAlertObject("Cleared all text", "warning");
      setCopyFlag(0);
    } else {
      setCopyFlag(0);
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    manageAlertObject("Text copied to clip-board", "success");
    setCopyFlag(1);
  };
  const handleExtraSpaces = () => {
    let newText = text.replace(/ +/g, " ");
    setText(newText);
    manageAlertObject("Extra spaces killed", "success");
  };
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setPalette("dark1");
      manageAlertObject("Dark mode enabled", "success");
      document.body.style.backgroundColor = "#163520";
    } else {
      setMode("light");
      setPalette("light1");
      document.body.style.backgroundColor = "white";
      manageAlertObject("Light mode enabled", "success");
    }
  };
  const manageAlertObject = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const manageAlertObjectForSpeech = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 6000);
  };
  const handlePalette1 = () => {
    setPalette("light1");
    document.body.style.backgroundColor = "white";
    console.log("clicked");
  };
  const handlePalette2 = () => {
    document.body.style.backgroundColor = "#0DCAF0";
    setPalette("light2");
  };
  const handlePalette3 = () => {
    document.body.style.backgroundColor = "#163520";
    setPalette("dark1");
  };
  const handlePalette4 = () => {
    document.body.style.backgroundColor = "#660000";
    setPalette("dark2");
  };
  // some variables needed

  let textDefault =
    "A sample text of definition is a short passage that provides a concise explanation of a particular term or concept. It typically includes the term being defined, its definition, and an example of how it is used in context. Sample texts of definition are often used in educational settings to help students understand a concept more clearly.";

  // all states needed for different things

  const [text, setText] = useState(textDefault);
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [copyFlag, setCopyFlag] = useState(0);
  const [palette, setPalette] = useState("light1");

  return (
    <>
      <Navbar
        title="TextUtils..."
        about="About"
        mode={mode}
        handleMode={handleMode}
        handlePalette1={handlePalette1}
        handlePalette2={handlePalette2}
        handlePalette3={handlePalette3}
        handlePalette4={handlePalette4}
      ></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Alert alert={alert} />
              <TextArea
                heading="Enter the text below....."
                text={text}
                palette={palette}
                handleTextValueChange={handleTextValueChange}
                mode={mode}
              ></TextArea>
              <Butons
                handleUpperCaseClick={handleUpperCaseClick}
                handlelowerCaseClick={handlelowerCaseClick}
                speak={speak}
                startSpeechRecognition={startSpeechRecognition}
                clearText={clearText}
                handleCopy={handleCopy}
                handleExtraSpaces={handleExtraSpaces}
              ></Butons>
              <Summary text={text} mode={mode} palette={palette}></Summary>
            </>
          }
        />
        <Route
          path="/About"
          element={<About mode={mode} palette={palette}></About>}
        />
      </Routes>
    </>
  );
}

export default App;
