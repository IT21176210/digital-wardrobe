import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cloths, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cloths" element={<Cloths />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
