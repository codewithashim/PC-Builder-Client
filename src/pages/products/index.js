import { Card, Col, Row } from "antd";

import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const ProductPage = ({ allProduct }) => {

  console.log(allProduct, "allProducts++")
  
  return (
    <div className="text-center mt-7">
      <h2 className="text-[2.1rem] font-extrabold my-2">Feature Products</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {allProduct?.map((product) => {
          const {
            image,
            productName,
            category,
            status,
            price,
            description,
            individualRating
          } = product;

          return (
            <div key={product?.id} style={{ width: "auto" }}>
              <Link href={`/products/${product?._id}`}>
              <Card >
                <Image
                    src={image}
                    height={200}
                    width={200}
                    style={{ width:"100%", height:"22rem"  }}
                    alt="card"
                />
                <Meta
                  title={productName}
                  description={description}
                  style={{ marginTop:"1rem" , fontSize:"1.5rem"  }}
                />
                <section
                  style={{ fontFamily: "fantasy", marginInline: "5px" }}
                >
                  <h3>Category :: {category}</h3>
                  <h3>Price :: {price}</h3>
                  <h3>Status :: {status}</h3>
                  <h3>Rating :: {individualRating}</h3>
                </section>
              </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;


