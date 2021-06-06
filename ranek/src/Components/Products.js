import React from "react";
import { Link } from "react-router-dom";

import { ProductsContext } from "../Contexts/ProductsContext";
import Head from "./Head";

const Products = () => {
  const products = React.useContext(ProductsContext);

  return (
    <ul className="products">
      <Head title="Ranek" />

      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`product/${product.id}`}>
              <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
              <h2>{product.nome}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
