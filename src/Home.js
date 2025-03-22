import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our E-commerce Store!</h1>
      <p>
        Discover a wide variety of products tailored just for you. From electronics to fashion,
        we have something for everyone. Shop now and enjoy amazing deals!
      </p>
      <h2>Featured Products</h2>
      <div className="featured-products">
        <div className="featured-product">
          <img src="https://cdn.prod.website-files.com/642d682a6e4ca0d303c81fdf/64fec948dab9336b151be9a7_ezgif-5-9fe72346bd.webp" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Price: $19.99</p>
        </div>
        <div className="featured-product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvy0GGo991j_yKDtNhAojRrizGuuUjLCkWdg&s" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Price: $29.99</p>
        </div>
        <div className="featured-product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZOi-PKAbYRl7w1iTAU-LT-cBd3aUI2y1oQ&s" alt="Product 3" />
          <h3>Product 3</h3>
          <p>Price: $39.99</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
