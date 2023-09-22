import Image from "next/image";
import Link from "next/link";
import RootLayout from "@/src/Layouts/RootLayout";
import { useDispatch, useSelector } from "react-redux";
import {CloseOutlined } from "@ant-design/icons"
import { removeOne } from "@/src/redux/fetures/builtPcSlice";


const CategoryPage = ({ categoryData }) => {
  const disPatch = useDispatch()

  const { products} = useSelector((state) => state.pcBuilt);
  
  let added = null

  const isExist = products.find((product) => product?.category === categoryData?.category);
    if (isExist) {
      console.log(isExist);
      added = isExist
    }

  const handleRemove =data =>{
    console.log(data);
    disPatch(removeOne(data))
  }

  return (
    <div className="bg-white rounded-lg shadow-md px-2 block lg:flex justify-between items-center gap-3 ">
      <div className="block lg:flex  items-center justify-center gap-3 mb-2">
        <Image
          src={categoryData?.imageSrc}
          alt={categoryData?.category}
          height={30}
          width={200}
          className="rounded"
        />
        <aside className="flex flex-col ">
          <h3 className="text-lg font-semibold ml-2">Category: {categoryData?.category}</h3>
        </aside>
      </div>
      <div>
        {added?._id ? (
          <section className="block lg:flex">
            <aside>
            <Image
              src={added?.image}
              alt={added?.category}
              height={30}
              width={100}
              className="rounded"
            />
            <h2>{added?.productName}</h2>
            <h2>Status ::: {added?.status}</h2>
            </aside>
           <button className="h-[1.5rem] w-[5rem] my-3 bg-slate-300 text-red-600 rounded-full" onClick={()=>handleRemove(added)} >remove<CloseOutlined /></button>           
          </section>
        ) : (
          <Link
            href={`/pc/${categoryData?.category}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Choose
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};