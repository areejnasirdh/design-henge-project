"use client";
import Image from "next/image";
import Aurthor from "../../../public/images/Blog_Inner/aurthor.png";
import Navbar from "@/components/Common/Navbar/Navbar";
import blogData from "../../utils/blogMockData";
import { useParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

const BlogInner = () => {
  const params = useParams();
  const { blogInner } = params;
  const [data, setData] = useState([]);

  const handlefilter = () => {
    const decodedSlug = decodeURIComponent(blogInner);
    const filterDatas = blogData.filter((e) => e?.title === decodedSlug);
    setData(filterDatas)
  }

  useEffect(()=> {
    handlefilter()
  }, [data])


  console.log(data[0], "data")
  // useEffect(() => {
   
  //   // setData(filterDatas);
  //   console.log(filterDatas, "data");
  // }, []);
  return (
    <>
      <Head>
        {data[0]?.meta?.map((v, i) => {
          <>
            <title key={i}>{v.title}</title>
            <meta name="description" content={v.desc} />
          </>;
        })}
      </Head>
      <div className="w-full blog-inner">
        <Navbar />
        <div className="bg-white">
          <div className="container py-4">
            <div className="lg:flex justify-between">
              <div className=" w-full lg:w-[65%] ">
                <div className="w-full h-[400px]">
                  <Image
                    src={`/images/${data[0]?.img}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2>{data[0]?.date}</h2>
                <h1>{data[0]?.title}</h1>
                <p>{data[0]?.intro}</p>
                {data[0]?.subHeading?.map((v, i) => (
                  <>
                    <h2 className="subheading" key={i}>
                      {v?.title}
                    </h2>
                    <div className="d-flex align-items-center mt-1">
                      <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                    </div>
                    <p>{v?.para}</p>
                  </>
                ))}
                <h2 className="subheading">FAQs</h2>
                <div className="d-flex align-items-center mt-1">
                  <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                </div>
                <ul>
                  {data[0]?.FAQs?.map((v, i) => (
                    <>
                      <h3 className="mt-4" key={i}>
                        {v.title}
                      </h3>
                      <li>{v.para}</li>
                    </>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center socials-content mt-4">
                  <h3>SHARE:</h3>
                  <Link href={""}>FACEBOOK</Link>
                  <Link href={""}>TWITTER</Link>
                  <Link href={""}>PINTEREST</Link>
                  <Link href={""}>INSTAGRAM</Link>
                  <Link href={""}>LINKEDIN</Link>
                </div>
                <hr className="my-10" />
              </div>
              <div className="md:mt-4 lg:mt-0 w-full lg:w-[30%]">
                {/* <input
                  className="w-full bg-gray-100 px-4 py-3"
                  placeholder="Search"
                /> */}
                {/* <div className="w-full bg-gray-100 p-4 mt-4">
                  <h3>About Aurthor</h3>
                  <div className="d-flex align-items-center mt-1">
                    <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                  </div>
                  <div className="w-full h-[200px] mt-4">
                    <Image
                      src={Aurthor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="left-side-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    commodo duis adipiscing augue. Pellentesque elementum amet,
                    augue duis est, nulla turpis. Pellentesque elementum amet,
                    augue duis est, nulla turpis.
                  </p>
                </div> */}
                <div className="w-full bg-white">
                  <h3>Recent post</h3>
                  <div className="d-flex align-items-center mt-1">
                    <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                  </div>
                  {blogData?.map((v, i) => {
                    return (
                      <>
                        <div className="w-full mt-4 flex items-center" key={i}>
                          <div className="h-[100px] w-[100px]">
                            <Image
                              src={`/images/${v?.img}`}
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[60%] ml-2">
                            <h4 className="max-w-[200px]">{v?.title}</h4>
                            <h4 className="text-red-500 mt-2">
                              JANUARY 21, 2023
                            </h4>
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}

                  {/* <div className="w-full flex items-center">
                    <div className="h-[100px]">
                      <Image
                        src={Section2Image2}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[60%] ml-2">
                      <h4 className="max-w-[200px]">
                        Challenges of consultatution new Business Firms.
                      </h4>
                      <h4 className="text-red-500 mt-2">JANUARY 21, 2023</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="w-full flex items-center">
                    <div className="h-[100px]">
                      <Image
                        src={BlogImage}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[60%] ml-2">
                      <h4 className="max-w-[200px]">
                        Challenges of consultatution new Business Firms.
                      </h4>
                      <h4 className="text-red-500 mt-2">JANUARY 21, 2023</h4>
                    </div>
                  </div> */}
                </div>
                {/* <div className="w-full bg-gray-100 p-4 mt-4">
                  <h3>Categories</h3>
                  <div className="d-flex align-items-center mt-1">
                    <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                  </div>
                  <div className="mt-4 w-full flex justify-between items-center">
                    <p className="categories-text">Consltation</p>
                    <p className="categories-text">(10)</p>
                  </div>
                  <div className="mt-4 w-full flex justify-between items-center">
                    <p className="categories-text">Consltation</p>
                    <p className="categories-text">(10)</p>
                  </div>
                  <div className="mt-4 w-full flex justify-between items-center">
                    <p className="categories-text">Consltation</p>
                    <p className="categories-text">(10)</p>
                  </div>
                  <div className="mt-4 w-full flex justify-between items-center">
                    <p className="categories-text">Consltation</p>
                    <p className="categories-text">(10)</p>
                  </div>
                </div> */}

                {/* <div className="w-full bg-gray-100 p-4 mt-4">
                  <h3>Tag Cloud</h3>
                  <div className="d-flex align-items-center mt-1">
                    <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                  </div>
                  <div className="w-full flex flex-wrap items-center mt-2">
                    <div className="business-tags">BUSINESS</div>
                    <div className="business-tags">FINANCE</div>
                    <div className="business-tags">MARKETING</div>
                    <div className="business-tags">PROCESS</div>
                    <div className="business-tags">BUSINESS FINANCE</div>
                    <div className="business-tags">FINANCE</div>
                    <div className="business-tags">MARKETING</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInner;
