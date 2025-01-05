import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { SingleProduct } from '../redux/service/Api';
import { getSingleProduct } from '../redux/features/SingleProduct';

function Singleproduct() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // Access state directly using useSelector
    const { products, status, error } = useSelector((state) => state.singleProduct);

    useEffect(() => {
        if (id) {
            dispatch(SingleProduct(id));
        }
    }, [id, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    console.log(products.product)

    return (
        <>
            <div>
                <Header />
            </div>

            {products.product && <div className='single-product-container'>

                <div className='single-product-image' >
                    <img src={products.product && products.product.image} alt="" width={"60%"} height={"60%"} />
                    <p className='single-product-brand'>{products.product && products.product.brand}</p>
                </div>

                <div className='single-product-info'>
                    <p className='single-product-title' >{products.product && products.product.title}</p>
                    <p className='single-product-about' >{products.product && products.product.description}</p>
                    <p className='single-product-about'>Category : {products.product && products.product.category}</p>
                    <p className='single-product-about'>Color : {products.product && products.product.color}</p>
                    <p className='single-product-about'>Price : {products.product && products.product.price}</p>

                    <button className='single-product-button'> Buy Now</button>
                </div>


            </div>}
        </>
    )
}

export default Singleproduct;
