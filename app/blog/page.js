"use client"
import ReusableButton from "@/components/Common/Banner/hoverbuttonclass";
import Navbar from "@/components/Common/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Blog = () => {
    const [loadCard, setloadCard] = useState(9);
    const router = useRouter();

    const blogData = [
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-1",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-2",
            date: "18 Jan 2022"
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            img: "blog-3",
            date: "18 Jan 2022"
        },
    ];

    console.log(loadCard, "length")

    return <div className="blog-main">
        <Navbar />
        <div className="container-width container-fluid w-full py-[60px]">
            <div className="d-flex flex-column align-items-center">
                <h3>BLOG</h3>
            </div>
            <div className="w-full flex justify-center py-3 mt-4">
                <div className="bg-[#edbf33] min-w-[250px] w-[60%] h-10 relative border-2 border-black">
                    <div className="bg-white px-1 h-10 absolute bottom-2 right-2 w-full border-2 border-black flex justify-between">
                        <input placeholder="Search blog here..." className="w-[90%] h-full px-4 text-sm outline-none focus:outline-none" />
                        <IoSearchOutline className="h-full px-1 min-w-[30px] cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="w-full py-10">
                <div className="grid gap-20 md:grid-cols-3 md:gap-6 lg:gap-10 xl:gap-20">
                    {blogData.splice(0, loadCard).map(({ desc, img, date }, idx) => (
                        <div className="flex-flex-col space-y-8 blog_card mb-4">
                            <Image
                                src={`/images/${img}.png`}
                                width={700}
                                height={700}
                                alt=""
                                className="object-contain w-full"
                            />

                            <div className="flex-flex-col space-y-4">
                                <h4 className="font-[400] text-[20px] hover:text-[#0097d9]">{desc}</h4>
                                <p className="text-[12px] text-gray-500 mt-2 font-light">{date}</p>
                            </div>

                            <ReusableButton
                                buttonText="READ FULL BLOG"
                                // handleMouseMove={handleMouseMovebutton}
                                onClick={() => router.push("/blog-inner")}
                                // btnRef={btnRef}
                                additionalClasses="your-custom-classes"
                            />
                        </div>
                    ))}
                </div>
            </div>


            <div className={`down-arrows h-[80px] mb-4 cursor-pointer ${(loadCard === 24) ? "hidden" : "block"}`} onClick={() => setloadCard(loadCard + 3)}>
                <div class="scroll-arrow m-auto"></div>
                <div class="scroll-arrow m-auto"></div>
                <div class="scroll-arrow m-auto"></div>
            </div>
        </div>
    </div>
}


export default Blog;