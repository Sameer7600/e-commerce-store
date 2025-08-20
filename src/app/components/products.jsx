import React from 'react'

const Products = () => {
  return (
    <div>
      <section className=" border-t border-black mb-10 mx-32">  
      <h3 className="text-3xl font-semibold my-6">Featured Products</h3>
      <div className="grid grid-cols-6" >

       {/* Product no.1 */}
      <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
        <div className="w-32 h-32 relative mb-3 mt-4">
          <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/164/1057/computer-154114_1280__35828.1495161697.png?c=2"
           alt="Desktop Computer" 
           fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium mt-4">Desktop Computer</h3>
        <div className="flex justify-center space-x-1 my-1">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
        </div>
        <span className="font-semibold">$0.00</span>
        <p className="text-xs text-gray-500 mt-1">OFS</p>
      </div>


              {/* Product no.2 */}
      <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
        <div className="w-32 h-32 relative mb-3 mt-4">
          <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/158/1022/01__47562.1489901782.jpg?c=2"
           alt="Desktop Computer" 
           fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium mt-4">Trending 1 L LE Parfait Jar</h3>
        <div className="flex justify-center space-x-1 my-1">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
        </div>
        <span className="font-semibold"><u>$10.00</u> $7.00</span>
        <p className="text-xs text-gray-500 mt-1">OFS</p>
      </div>
        
      
             {/* Product no.3 */}
             <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
        <div className="w-32 h-32 relative mb-3">
          <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/155/1015/06__20123.1489901772.jpg?c=2"
           alt="Desktop Computer" 
           fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium mt-4">Trending Tiered Wire Basket</h3>
        <div className="flex justify-center space-x-1 my-1">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
        </div>
        <span className="font-semibold">$119.95</span>
        <p className="text-xs text-gray-500 mt-1">OFS</p>
      </div>


              {/* Product no.4 */}
      <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
        <div className="w-32 h-32 relative mb-3">
          <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/153/1041/04-2__79134.1489902085.jpg?c=2"
           alt="Desktop Computer" 
           fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium mt-4">Trending Canvas Laundry Cart</h3>
        <div className="flex justify-center space-x-1 my-1">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
        </div>
        <span className="font-semibold">$200.00</span>
        <p className="text-xs text-gray-500 mt-1">OFS</p>
      </div>


             {/* Product no.5 */}
             <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
        <div className="w-32 h-32 relative mb-3 mt-4">
          <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/152/1038/03-2__44236.1489902053.jpg?c=2"
           alt="Desktop Computer" 
           fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium mt-4">Trending Utility Caddy</h3>
        <div className="flex justify-center space-x-1 my-1">
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
        </div>
        <span className="font-semibold">$45.95</span>
        <p className="text-xs text-gray-500 mt-1">OFS</p>
      </div>


             {/* Product no.6 */}
             <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
        <div className="w-32 h-32 relative mb-3">
          <img src="https://i5.walmartimages.com/asr/d7f6f79a-3134-45fc-80cc-4bb27a9a59c3.f2418e95d70bce2a5af04487e717b65e.jpeg"
           alt="Desktop Computer" 
           fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium mt-4">Furniture Tiered Wire Basket 2</h3>
        <div className="flex justify-center space-x-1 my-1">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
        </div>
        <span className="font-semibold">$119.95</span>
        <p className="text-xs text-gray-500 mt-1">OFS</p>
      </div>


      </div>

       {/* sec  */}
       <div className="grid grid-cols-6" >

{/* Product no.1 */}
<div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
 <div className="w-32 h-32 relative mb-3 mt-4">
   <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/144/877/05__98575.1489898232.jpg?c=2"
    alt="Desktop Computer" 
    fill className="object-contain" />
 </div>
 <h3 className="text-sm font-medium mt-4">Furniture Utility Caddy</h3>
 <div className="flex justify-center space-x-1 my-1">
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-gray-300">★</span>
   <span className="text-gray-300">★</span>
   <span className="text-gray-300">★</span>
 </div>
 <span className="font-semibold">$45.95</span>
 <p className="text-xs text-gray-500 mt-1">OFS</p>
</div>


       {/* Product no.2 */}
<div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
 <div className="w-32 h-32 relative mb-3 mt-4">
   <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/140/772/07__50789.1489897894.jpg?c=2"
    alt="Desktop Computer" 
    fill className="object-contain" />
 </div>
 <h3 className="text-sm font-medium mt-4">Digital Oak Cheese Grater</h3>
 <div className="flex justify-center space-x-1 my-1">
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
 </div>
 <span className="font-semibold">$34.95</span>
 <p className="text-xs text-gray-500 mt-1">Sagaform</p>
</div>
 

      {/* Product no.3 */}
      <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
 <div className="w-32 h-32 relative mb-3">
   <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/137/771/05__59783.1489897893.jpg?c=2"
    alt="Desktop Computer" 
    fill className="object-contain" />
 </div>
 <h3 className="text-sm font-medium mt-4">Digital Laundry Detergent</h3>
 <div className="flex justify-center space-x-1 my-1">
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
 </div>
 <span className="font-semibold">$29.95</span>
 <p className="text-xs text-gray-500 mt-1">Common Good</p>
</div>


       {/* Product no.4 */}
<div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
 <div className="w-32 h-32 relative mb-3">
   <img src="https://cdn11.bigcommerce.com/s-9dhvgwc9o4/images/stencil/500x659/products/134/716/02__22244.1489897245.jpg?c=2"
    alt="Desktop Computer" 
    fill className="object-contain" />
 </div>
 <h3 className="text-sm font-medium mt-4"></h3>
 <div className="flex justify-center space-x-1 my-1">
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
 </div>
 <span className="font-semibold">$200.00</span>
 <p className="text-xs text-gray-500 mt-1">OFS</p>
</div>


      {/* Product no.5 */}
      <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
 <div className="w-32 h-32 relative mb-3 mt-4">
   <img src="https://www.bhphotovideo.com/images/images2500x2500/nikon_d750_dslr_camera_with_1082604.jpg"
    alt="Desktop Computer" 
    fill className="object-contain" />
 </div>
 <h3 className="text-sm font-medium mt-4">Trending Utility Caddy</h3>
 <div className="flex justify-center space-x-1 my-1">
   <span className="text-gray-300">★</span>
   <span className="text-gray-300">★</span>
   <span className="text-gray-300">★</span>
   <span className="text-gray-300">★</span>
   <span className="text-gray-300">★</span>
 </div>
 <span className="font-semibold">$45.95</span>
 <p className="text-xs text-gray-500 mt-1">OFS</p>
</div>


      {/* Product no.6 */}
      <div className="border rounded-md p-4 flex flex-col items-center h-[300px] text-center relative">
 <div className="w-32 h-32 relative mb-3">
   <img src="https://printer.kalimstores.com/wp-content/uploads/580-2.png"
    alt="Desktop Computer" 
    fill className="object-contain" />
 </div>
 <h3 className="text-sm font-medium mt-4">Furniture Tiered Wire Basket 2</h3>
 <div className="flex justify-center space-x-1 my-1">
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
   <span className="text-yellow-500">★</span>
 </div>
 <span className="font-semibold">$119.95</span>
 <p className="text-xs text-gray-500 mt-1">OFS</p>
</div>
</div>
     </section>

      <section className=" mx-32 my-14">
     <img src="https://tvlgiao.github.io/bigcommerce-themes/sarahmarket/demo/images/banner03.jpg"
      alt="banner image" />
      </section>
    </div>
  )
}

export default Products
