import "./App.css";
import { ScrollTop } from "./hooks/ScrollTop";
import { PageRouter } from "./Router/PageRouter";

function App() {
  return (
    <div className=" text-gray-800">
      <ScrollTop />
      <PageRouter />
    </div>
  );
}

export default App;
