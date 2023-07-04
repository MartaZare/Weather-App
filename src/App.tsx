import "./style/App.css";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import InfoCard from "./components/InfoCard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed-info" element={<InfoCard />} />
          <Route
            path="*"
            element={
              <div>
                <h1>ERROR 404. Page not found</h1>
                <Link to="/">Back to home page.</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
