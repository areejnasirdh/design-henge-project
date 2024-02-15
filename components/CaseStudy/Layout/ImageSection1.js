
import Image from 'next/image'
import React from 'react'

const ImageSection1 = ({Img}) => {
  return (
    <div className='case_study_img_section'>
        <Image src={Img}/>
    </div>
  )
}

export default ImageSection1