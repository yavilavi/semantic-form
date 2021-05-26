import { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
const App = () => {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <Header name={name} />
      <Form onChange={onChange} />
      <Footer />
    </div>
  );
};

export default App;
