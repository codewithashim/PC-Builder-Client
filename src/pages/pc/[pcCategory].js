import { Card, Col, Row } from "antd";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { addToPcBuilt } from "@/src/redux/fetures/builtPcSlice";
import RootLayout from "@/src/Layouts/RootLayout";
import { ApiBasdUrl } from "@/src/Utils/network";

const { Meta } = Card;

const PcDetails = ({ products }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const { data: session } = useSession();

  if (products?.length < 1) {
    return <h2>Loading .......</h2>;
  }

  const [messageApi, contextHolder] = message.useMessage();
  const info = (message) => {
    messageApi.info(message);
  };


  const HandleAddProduct = (data) => {
    console.log(data);
    dispatch(addToPcBuilt(data));

    router.push("/pc");
    info("successfully added");
  };

  return (
    <div>
      <h2 className="text-[1.8rem] text-center font-extrabold mt-7 mb-3">
        Pc Details :::{" "}
      </h2>
      {contextHolder}

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => {
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
            <Col key={product?.id} style={{ marginInline: "auto" }}>
              <Card
                style={{ width: 300 }}
                cover={
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    alt="card"
                  />
                }
              >
                <Meta
                  title={productName}
                  description={description}
                />
                <section
                  style={{ fontFamily: "fantasy", marginInline: "10px" }}
                >
                  <h3>Category :: {category}</h3>
                  <h3>Price :: {price}</h3>
                  <h3>Status :: {status}</h3>
                  <h3>Rating :: {individualRating}</h3>
                </section>

                {session?.user && (
                  <button
                    className="p-2 my-2 text-white rounded-sm bg-slate-700"
                    onClick={() => HandleAddProduct(product)}
                  >
                    Add To Builder
                  </button>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PcDetails;

PcDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const url = `${ApiBasdUrl}/pc/`;

  const res = await fetch(url);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { pcCategory: product?.category }, // Use pcId instead of pcCategory
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `${ApiBasdUrl}/pc/category?category=${params?.pcCategory}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
