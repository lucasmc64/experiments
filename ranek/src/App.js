import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProductsProvider } from "./Contexts/ProductsContext";

import Header from "./Components/Header";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ProductsProvider>
        <Routes>
          <Route path="/" end element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </ProductsProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
