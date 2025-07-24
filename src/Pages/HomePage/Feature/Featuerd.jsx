import React from 'react'
import SectionTitle from '../../../Component/SectionTitle'
import img from "../../../assets/home/featured.jpg"

const Featured = () => {
  return (
    <div className=' mx-auto p-4 my-8 bg-fixed bg-center bg-cover bg-no-repeat inset-0 opacity-80' style={{ backgroundImage: `url(${img})` }}>
        <SectionTitle
            
            subTitle='---Check it Out---'
            maintitle='FROM OUR MENU'
        />
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center p-6 rounded-lg'>
            <img src={img} className=' md:w-1/3 rounded-lg' alt="Featured Food" />
            <div className='w-full md:w-2/4'>
            <h2 className='text-xl font-semibold mb-2'>March 20, 2023</h2>
            <p className='text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime incidunt voluptatibus sint, provident accusamus vitae fuga autem temporibus sed.
            </p>
            <button className='mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded'>
                READ MORE
            </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
