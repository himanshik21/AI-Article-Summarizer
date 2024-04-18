import Header from "./components/Header";
import InputArticle from "./components/InputArticle";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Header />
        <InputArticle />
      </div>
    </main>
  );
};
export default App;
