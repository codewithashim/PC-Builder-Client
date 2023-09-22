import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import HomeBanner from '../HomeBanner/HomeBanner';
import FeatureCategory from '../../FeatureCategory/FeatureCategory';
import FeatureProducts from '../../FeatureProducts/FeatureProducts';

const Home = ({allProduct, categories}) => {
    return (
        <section>
            <HeroSection />
            <HomeBanner />
            <FeatureCategory categories={categories}/>
            <FeatureProducts allProduct={allProduct} />
        </section>
    );
};

export default Home;