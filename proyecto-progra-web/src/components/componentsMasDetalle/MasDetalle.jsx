// src/components/componentsMasDetalle/MasDetalle.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';

const MasDetalle = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('../../../public/Productos.json')
      .then(response => response.json())
      .then(data => {
        const selectedProduct = data.find(item => item.id === parseInt(productId));
        setProduct(selectedProduct);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mas-detalle">
      <TopBar />
      <h2>Detalles del Producto</h2>
      <div className="producto">
        <img src={product.imageUrl} alt={product.description} />
        <h3>{product.description}</h3>
        <p>{product.price}</p>
      </div>
      <Footer />
    </div>
  );
};

export default MasDetalle;
