// src/components/componentsSection/Section.jsx
import React, { useState, useEffect } from 'react';
import './Section.css';
import '../../../public/Productos.json';
import MasDetalle from '../../components/componentsMasDetalle/MasDetalle';
import { Link } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import SearchBar from './SearchBar';

const Section = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('../../../public/Productos.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDetailsClick = (productId) => {
    setSelectedProduct(productId);
  };

  const handleSearch = (query) => {
    const filtered = products.filter(product => 
      String(product.id).includes(query) || 
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <TopBar />
      <section className="product-list">
        <h2>Productos</h2>
        <SearchBar onSearch={handleSearch} />
        <div className="products">
          {filteredProducts.map(product => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.description} className="product-image" />
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <a className="details-link" onClick={() => handleDetailsClick(product.id)}>
                <Link to='/moreDetails'>Más detalles</Link>
              </a>
            </div>
          ))}
        </div>
        {selectedProduct && <MasDetalle productId={selectedProduct} />}
      </section>
      <Footer />
    </>
  );
};

export default Section;
