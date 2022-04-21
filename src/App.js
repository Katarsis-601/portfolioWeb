import Main from "./components/Main";
import "./App.css";
import { ContainerLayout } from "./components/component";

function App() {
  return (
    <div className="App">
      <ContainerLayout>
        <Main />
      </ContainerLayout>
    </div>
  );
}

export default App;
