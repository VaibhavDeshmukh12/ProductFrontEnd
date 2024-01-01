import { Route, Routes } from "react-router-dom";
import AddBook from "./components/AddProduct";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/addProduct" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
