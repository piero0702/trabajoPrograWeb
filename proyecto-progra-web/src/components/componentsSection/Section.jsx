// src/components/componentsSection/Section.jsx
import React, { useState, useEffect } from 'react';
import './Section.css';
import '../../../public/Productos.json';
import { Link } from 'react-router-dom';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import SearchBar from './SearchBar';

const Section = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('../../../public/Productos.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

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
              <img src={product.imagen} alt={product.description} className="product-image" />
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <Link className="details-link" to={`/moreDetails/${product.id}`}>Más detalles</Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Section;
