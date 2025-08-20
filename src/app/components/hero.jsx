import React from 'react'

const Hero = () => {
  return (
    <div>
       
       <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pb-6  mx-24">
      {/* Left Big Banner */}
      <div className="md:col-span-2 relative flex items-center justify-center p-6">
        <img
          src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/original/carousel/16/slide01__82049.jpg?c=2"
          alt="Computer Set"
          className="object-contain"
        />
      </div>

      {/* Right Side Small Banners */}
      <div className="flex flex-col gap-4 mt-6">
        {/* Top Banner */}
        <div className="relative">
          <img
            src="https://tvlgiao.github.io/bigcommerce-themes/sarahmarket/demo/images/banner01.jpg" 
            alt="Fashion"
            className=" object-cover"
          />
        </div>

        {/* Bottom Banner */}
        <div className="relative pt-2 flex items-center">
          <img
            src="https://tvlgiao.github.io/bigcommerce-themes/sarahmarket/demo/images/banner02.jpg"
            alt="Phone"
            className="h-auto object-contain mr-4"
          />
        </div>
      </div>
    </section>

    </div>
  )
}

export default Hero
