import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import TopAdBar from "../components/TopAdBar";
import TopNav from "../components/TopNav";
import ProductDetailedSpecific from "../components/ProductDetailedSpecific";
import RelatedProductsSpecific from "../components/RelatedProductsSpecific";
import Footer from "../components/Footer";


const ProductDetailsViewSpecific = () => {

    window.top.document.title = 'Product Details | Fixxo.';

    const [relatedProducts, setRelatedProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
        { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=255&h=210&dpr=1" },
    ])

    const params = useParams();

    return (
        <>
            <NavBar />
            <TopAdBar />
            <TopNav subPage="Product Details" />
            <ProductDetailedSpecific title={params.name} />
            <RelatedProductsSpecific products={relatedProducts} />
            <Footer />
        </>
    )
}

export default ProductDetailsViewSpecific