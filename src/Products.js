import React from 'react';

const productList = [
  {
    id: 1,
    name: 'Product 1',
    price: 30,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKI93OB5cXh79fbb2G1QRH4YKDK7Q3nq8vTQ&s',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 50,
    image:'https://media.istockphoto.com/id/1215876938/photo/stationery-set-levitation-of-notepad-pencils-pen-sticker-and-binder-clips-copy-space-on.jpg?s=612x612&w=0&k=20&c=Yriog2Q0geLJ_9oO7OGQ6JSAtM1svb5QHKS5k7QwaCw=',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qFicQBv6zCu4MYuyE2AIBesxVnKHVRqhIA&s',
  },
];

function Products({ addToCart }) {
  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
