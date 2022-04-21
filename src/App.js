import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Navigate";
import { ContainerLayout } from "./components/component";
import { Route, Routes } from "react-router";
import Repo from "./components/Repositories";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositories" element={<Repo />} />

        <Route path="*" element={<p>404</p>} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
