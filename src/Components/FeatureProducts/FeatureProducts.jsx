import React from 'react';
import ProductPage from "../../pages/products"

const FeatureProducts = ({allProduct}) => {
    return (
        <section className='feature-products-container'>
            <div className="title-content">
                <h3 className='text-[2rem] md:text-[3.5rem] font-bold'>
                    Feature Products
                </h3>

                <ProductPage allProduct={allProduct}/>
            </div>

        </section>
    );
};

export default FeatureProducts;