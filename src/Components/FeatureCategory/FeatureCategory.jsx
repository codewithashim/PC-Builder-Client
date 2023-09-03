import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCategory = ({categories}) => {
    return (
        <section className='feature-category-container'>
            <div className="title-content">
                <h3 className='text-[2rem] md:text-[3.5rem] font-bold'>
                    Feature Category
                </h3>
            </div>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                {categories?.map((category) => {
                    return (
                        <Col
                            xs={24}
                            lg={8}
                            key={category?.category}

                            style={{ width: "100%", marginBlock: "15px" }}
                        >
                            <Link
                                className="my-3 text-center shadow-2xl"
                                href={`/pc/${category?.category}`}
                            >
                                <h2 className="font-serif text-xl font-semibold">
                                    {category?.category}
                                </h2>
                                <Image
                                    src={category?.imageSrc}
                                    alt="category"
                                    height={200}
                                    width={300}
                                    style={{ marginInline: "auto", borderRadius: "15px", height: "140px" }}

                                />
                            </Link>
                        </Col>
                    );
                })}
            </Row>

        </section>
    );
};

export default FeatureCategory;