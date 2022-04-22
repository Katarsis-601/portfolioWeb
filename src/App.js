import "./App.css";
import Main from "./pages/Main";
import Repo from "./pages/Repositories";
import Skills from "./pages/Skills";
import Nav from "./components/Navigate";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositories" element={<Repo />} />
        <Route path="/skills" element={<Skills />} />

        <Route path="*" element={<p>404</p>} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
