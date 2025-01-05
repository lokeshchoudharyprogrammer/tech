import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product, index }) => {
    return (
        <div key={index} className="product-card" style={styles.card}>
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={styles.image}
                />
            </Link>
                <div style={styles.content}>
                    <h2 style={styles.title}>{product.title.slice(0, 20)}</h2>
                    <p style={styles.description}>{product.description.substring(0, 50)}...</p>

                    <div style={styles.footer}>
                        <span style={styles.price}>${product.price}</span>
                        {product.discount > 0 && (
                            <span style={styles.discount}>-{product.discount}%</span>
                        )}
                    </div>
                </div>
           
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '300px',
        margin: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    },
    content: {
        padding: '15px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '10px',
    },
    details: {
        fontSize: '14px',
        marginBottom: '15px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#28a745',
    },
    discount: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#dc3545',
    },
};

export default Card;
