import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router/route-map";
import "./index.css";
import Header from "./components/header";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 dark:text-gray-50 min-h-screen  font-sans">
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
