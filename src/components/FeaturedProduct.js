import React from 'react'
import ProductCard from './components/ProductCard'


const FeaturedProduct = ({ title, items = [] }) => {

    return (
        <section className="featured-product container">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="product-grid">
                {
                    items.map(product => <ProductCard item={product} key={product.articleNumber} />)
                }
            </div>
        </section>
    )
}

export default FeaturedProduct