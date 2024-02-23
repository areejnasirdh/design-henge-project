import Image from "next/image";
import BlogImage from "../../public/images/Blog_Inner/blog-Image.png";
import Section2Image1 from "../../public/images/Blog_Inner/section2-img-1.png";
import Section2Image2 from "../../public/images/Blog_Inner/section2-img-2.png";
import Section3Image from "../../public/images/Blog_Inner/section3-img.png";
import Aurthor from "../../public/images/Blog_Inner/aurthor.png";
import Link from "next/link";
import Navbar from "@/components/Common/Navbar/Navbar";

const BlogInner = () => {
    return <div className="w-full blog-inner">
        <Navbar />
        <div className="bg-white">
            <div className="container py-4">
                <div className="lg:flex justify-between">
                    <div className=" w-full lg:w-[65%] ">
                        <div className="w-full h-[400px]">
                            <Image src={BlogImage} className="w-full h-full object-cover" />
                        </div>
                        <h2>January 11, 2024</h2>
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                            Pellentesque elementum amet, augue duis est, nulla turpis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                            Pellentesque elementum amet, augue duis est, nulla turpis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                            Pellentesque elementum amet, augue duis est, nulla turpis.</p>
                        <h1>Lorem Upsum is Dummy</h1>
                        <div className="d-flex align-items-center mt-1">
                            <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet,</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                                adipiscing augue. Pellentesque elementum amet,</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                                adipiscing augue. Pellentesque elementum amet,</li>
                        </ul>
                        <div className="w-full md:flex justify-between mt-4 mb-2">
                            <div className="w-full md:w-[48%] bg-yellow-200 h-[200px] mt-2">
                                <Image src={Section2Image1} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full md:w-[48%] bg-yellow-600 h-[200px] mt-2">
                                <Image src={Section2Image2} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                            Pellentesque elementum amet, augue duis est, nulla turpis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                            Pellentesque elementum amet, augue duis est, nulla turpis.</p>
                        <div className="w-full h-[400px] mt-8">
                            <Image src={Section3Image} className="w-full h-full object-cover" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                            adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                            Pellentesque elementum amet, augue duis est, nulla turpis.</p>

                        <div className="flex flex-wrap items-center socials-content mt-4">
                            <h3>SHARE:</h3>
                            <Link href={""} >FACEBOOK</Link>
                            <Link href={""} >TWITTER</Link>
                            <Link href={""} >PINTEREST</Link>
                            <Link href={""} >INSTAGRAM</Link>
                            <Link href={""} >LINKEDIN</Link>
                        </div>
                        <hr className="my-10" />
                    </div>
                    <div className="md:mt-4 lg:mt-0 w-full lg:w-[30%]">
                        <input className="w-full bg-gray-100 px-4 py-3" placeholder="Search" />
                        <div className="w-full bg-gray-100 p-4 mt-4">
                            <h3>About Aurthor</h3>
                            <div className="d-flex align-items-center mt-1">
                                <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                            </div>
                            <div className="w-full h-[200px] mt-4">
                                <Image src={Aurthor} className="w-full h-full object-cover" />
                            </div>
                            <p className="left-side-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo duis
                                adipiscing augue. Pellentesque elementum amet, augue duis est, nulla turpis.
                                Pellentesque elementum amet, augue duis est, nulla turpis.</p>
                        </div>
                        <div className="w-full bg-white p-4 mt-4">
                            <h3>Recent post</h3>
                            <div className="d-flex align-items-center mt-1">
                                <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                            </div>
                            <div className="w-full mt-4 flex items-center">
                                <div className="h-[100px]">
                                    <Image src={Section3Image} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-[60%] ml-2">
                                    <h4 className="max-w-[200px]">Challenges of consultatution new Business Firms.</h4>
                                    <h4 className="text-red-500 mt-2">JANUARY 21, 2023</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="w-full flex items-center">
                                <div className="h-[100px]">
                                    <Image src={Section2Image2} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-[60%] ml-2">
                                    <h4 className="max-w-[200px]">Challenges of consultatution new Business Firms.</h4>
                                    <h4 className="text-red-500 mt-2">JANUARY 21, 2023</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="w-full flex items-center">
                                <div className="h-[100px]">
                                    <Image src={BlogImage} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-[60%] ml-2">
                                    <h4 className="max-w-[200px]">Challenges of consultatution new Business Firms.</h4>
                                    <h4 className="text-red-500 mt-2">JANUARY 21, 2023</h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 p-4 mt-4">
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
                        </div>

                        <div className="w-full bg-gray-100 p-4 mt-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BlogInner;