import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddProduct, Cloths, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cloths" element={<Cloths />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
