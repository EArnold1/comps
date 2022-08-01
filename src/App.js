import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="py-2">
          <h2 className="text-3xl text-center my-10">Components</h2>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
