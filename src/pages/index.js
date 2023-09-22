import Home from '@/src/Components/Home/Home/Home';
import RootLayout from '@/src/Layouts/RootLayout';
import React from 'react';
import { ApiBasdUrl } from '../Utils/network';

const HomePage = ({ allProducts, categories }) => {
  return (
    <section>
      <Home
        allProduct={allProducts}
        categories={categories}
      />
    </section>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const productResponse = await fetch(`${ApiBasdUrl}/pc`);
  const productData = await productResponse.json();

  const categoryResponse = await fetch(`${ApiBasdUrl}/category`);
  const categoriesData = await categoryResponse.json();
  return {
    props: {
      allProducts: productData?.data,
      categories: categoriesData?.data
    },
  };
};
