import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';


const Result = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const products = JSON.parse(localStorage.getItem('products'));
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentPage((prevPage) =>
            prevPage < Math.ceil(products.products.length / itemsPerPage) - 1 ? prevPage + 1 : 0
        );
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) =>
            prevPage > 0 ? prevPage - 1 : Math.ceil(products.products.length / itemsPerPage) - 1
        );
    };

    const paginatedProducts = products.products.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handleOnClick = () => {
        navigate('/')
    }

    return (
        <div className='result-image'>
            <div className='result-text'>
                <h1 className='result-text-heading'>Build you everyday self<br />care routine.</h1>
                <p className='result-text-description'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                <Button
                    styling={'result-btn'}
                    onClick={handleOnClick}
                    content={'Retake the quiz'}
                />
            </div>
            <div className='product-card-group'>
                <div>
                    <ProductCard
                        product={false}
                    />
                </div>
                <div className='scrolling'>
                    <Button
                        styling={'scroll-btn'}
                        onClick={handlePrev}
                        isPrevBtn={true}
                    />
                    <div className='display-product-card'>
                        {
                            paginatedProducts.map(product => (
                                <div key={product.id}>
                                    <ProductCard
                                        product={true}
                                        image={product.images.map(image => (
                                            image.src
                                        ))}
                                        name={product.title}
                                        price={product.variants.map(variant => (
                                            variant.price
                                        ))}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <Button
                        styling={'scroll-btn'}
                        onClick={handleNext}
                        isForwardBtn={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Result
