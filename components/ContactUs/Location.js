"use client"

import Image from "next/image"
import Leftlocation from "../../public/images/left-location.svg";
import Rightlocation from "../../public/images/right-location.svg"
import ReusableButton from "../Common/Banner/hoverbuttonclass";

const Location = () => {
    return <div className="location-container py-[60px]">
        <div className="container">
            <h4>OUR LOCATIONS</h4>
            <div className="w-full md:flex justify-around p-2">
                <div className="aftereffect relative md:w-[45%] mt-4">
                    <div className="w-full h-[200px]">
                        <Image src={Leftlocation} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        {/* <Image src="/images/footer-America-flag.png" width={20} height={10} className="h-[30px] w-[40px] mt-[-5px]" /> */}
                        <p className="text-[30px] md:text-[38px] font-medium  font-bebas uppercase ml-2">
                            Headquarters
                        </p>
                    </div>
                    <p className="font-light leading-7 text-sm text-center h-[100px]">2259 W. Rosemont Ave. Apt. 1 <br />Chicago, IL 60659, USA</p>
                    <div className="flex justify-center mt-2">
                        <ReusableButton
                            buttonText="VIEW LOCATION"
                            onClick={() => { }}
                            additionalClasses="your-custom-classes"
                        />
                    </div>
                </div>
                <div className="md:w-[45%] mt-4">
                    <div className="w-full h-[200px]">
                        <Image src={Rightlocation} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        {/* <Image src="/images/footer-pakistan-flag.png" width={20} height={10} className="h-[30px] w-[40px] mt-[-5px]" /> */}
                        <p className="text-[30px] md:text-[38px] font-medium  font-bebas uppercase ml-2">
                            production team
                        </p>
                    </div>
                    <p className="m-auto text-center font-light w-[300px] h-[100px]">Saadabad Cooperative Housing Society, 4, Block 4 Gulistan-e-Johar, Karachi, Karachi City, Sindh 75290</p>
                    <div className="flex justify-center mt-2">
                        <ReusableButton
                            buttonText="VIEW LOCATION"
                            onClick={() => { }}
                            additionalClasses="your-custom-classes"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}

export default Location