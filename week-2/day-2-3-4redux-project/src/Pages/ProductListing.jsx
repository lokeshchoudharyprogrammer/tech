import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProducts } from '../redux/service/Api'
import { useEffect } from 'react'
import { Header } from '../Components/Header';
import "../styles/ProductListing.css"
import Card from '../Components/Card';
import ReactPaginate from 'react-paginate';
import Modal from 'react-modal';


export const ProductListing = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => { return state });
    const [products, setProducts] = React.useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [categorie, setCategorie] = useState('');
    
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts({ page: pageNumber?pageNumber:1 ,categories:categorie?categorie:''}))
            .then((res) => {
                if (res.payload) {

                    setTotalProducts(res.payload.allProducts.message.match(/\d+/)[0]);
                    
                    setProducts(res.payload.paginatedProducts.products);
                } else {
                    console.error('Error:', res.error.message);
                }
            });
    }, [dispatch, categorie,pageNumber]);

    const handlePageClick = (event) => {
        const selectedPage = event.selected + 1;
        console.log(`Selected page: ${selectedPage}`);
        setPageNumber(selectedPage);
        let obj={
            page:selectedPage,
            categories:categorie
        }
        dispatch(fetchProducts(obj));

    };


    
    const handleCategories = (category) => (e) => {
        if (e.target.checked) {
            setCategorie(category);

            let obj={
                page:pageNumber,
                categories:category
            }
            console.log(obj)
            dispatch(fetchProducts(obj));

        } 
        else {
            setCategorie('');
            let obj={
                page:pageNumber,
                categories:''
            }
            dispatch(fetchProducts(obj));
        }
    }


    return (
        <>
            <Header />
            <div style={{
                marginTop: '30px'
            }}>

                <div>
                    {/* ads will be rune here */}

                </div>


                <div className='product-listing-container'>

                    <div className="product-categories-section">
                        {data && data.categories.categories.categories?.map((category, index) => (
                            <div className="product-category" key={index}>
                                <input onClick={handleCategories(category)} type="checkbox" id={`category-${index}`} />
                                <label htmlFor={`category-${index}`}>{category}</label>
                            </div>
                        ))}
                    </div>



                    <div className='product-listing-section'>


                        {
                            products && products?.map((product, index) => (

                                <Card key={index} product={product} />
                            ))

                        }


                    </div>


                </div>

                <div className='pagination-container'>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={Math.ceil(totalProducts / 9)}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName='pagination'

                    />

                </div>



            </div>

        </>
    )
}

