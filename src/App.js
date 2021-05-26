import { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import "./styles.css";
const App = () => {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  document.getElementById("noscript").style.display = "none";
  return (
    <div className="App">
      <Header name={name} />
      <Form onChange={onChange} name={name} />
      <Footer />
    </div>
  );
};

export default App;
