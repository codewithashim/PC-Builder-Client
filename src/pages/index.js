import Home from '@/src/Components/Home/Home/Home';
import RootLayout from '@/src/Layouts/RootLayout';
import React from 'react';

const HomePage = () => {
  return (
    <section>
      <Home />
    </section>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
