import React from "react";
import { useParams } from "react-router";

import { ProductsContext } from "../Contexts/ProductsContext";

import Head from "./Head";

const Product = () => {
  const products = React.useContext(ProductsContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [productIndex, setProductIndex] = React.useState(null);

  const { id: productId } = useParams();

  React.useEffect(() => {
    setIsLoading(true);

    let index = products.findIndex((product) => product.id === productId);

    if (index >= 0) {
      setProductIndex(index);
    } else {
      setProductIndex(null);
    }

    setIsLoading(false);
  }, [productId, products]);

  if (productIndex !== null) {
    return (
      <>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <div className="product">
            <Head title={`Ranek | ${products[productIndex].nome}`} />

            <ul>
              {products[productIndex].fotos.map((image) => {
                return (
                  <li key={image.titulo}>
                    <img src={image.src} alt={image.titulo} />
                  </li>
                );
              })}
            </ul>
            <section>
              <h2>{products[productIndex].nome}</h2>

              <p className="price">R$ {products[productIndex].preco}</p>

              <p className="description">{products[productIndex].descricao}</p>
            </section>
          </div>
        )}
      </>
    );
  } else return null;
};

export default Product;
