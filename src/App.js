import logo from "./logo.svg";
import "./App.css";
import Header from "./My_Components/Header";
import {Footer} from "./My_Components/Footer";
import  {Todos} from "./My_Components/Todos";
import  {TodoItems} from "./My_Components/TodoItems";

function App() {
  return (
    <>
      <Header title = "My Todos List"/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
