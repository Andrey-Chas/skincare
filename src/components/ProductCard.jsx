import React from 'react'


const ProductCard = ({ product, image, name, price }) => {
    return (
        <div className={`${product ? 'product-card product-card-color' : 'description-card description-card-color'}`}>
            {
                !product ? (
                    <div className='product-text-group'>
                        <h1 className='product-text-heading'>Daily routine</h1>
                        <p className='product-text-description'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                    </div>
                ) : (
                    <div>
                        <img src={image} className='product-image'/>
                        <h1 className='product-name'>{name}</h1>
                        <p className='product-price'>{`$ ${price}`}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ProductCard
