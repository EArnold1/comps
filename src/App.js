import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="py-2">
          <h2 className="text-3xl text-center my-10">Components</h2>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
