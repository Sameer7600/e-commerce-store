import { Gift, Menu, Search, ShoppingCart } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="h-50 w-full">
            {/* sec no.1 */}
            <section className="h-20 w-full flex justify-evenly items-center ">
            <h2 className="text-3xl font-semibold text-red-600 hover:text-gray-400">SARAH</h2>
            <div className="flex">
            <input type="text" placeholder="Search the store" className="border border-red-600 text-black w-[600px] p-2" />
            <Search className="h-12 w-12 bg-red-600 text-white text-sm p-2" />
            </div>
            <div className="flex">
            <Gift size={32} className="mr-4 hover:text-red-600" />
            <ShoppingCart size={32} className="mr-2 hover:text-red-600" /> <span className="text-lg hover:text-red-600">Cart</span>
            </div>
            </section>

            {/* sec no.2 */}
            <section className="h-16 w-full mt-4 ">
            <div className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-center gap-6 py-3 text-sm font-semibold text-black">
        
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer border-x border-gray-300 px-4 py-2 hover:text-red-600">
            <span>CATEGORIES</span>
            <Menu size={16} />
          </div>

          <div className="absolute left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <ul className="py-2 text-sm text-gray-700">
              <li className="px-4 py-2 hover:text-red-600 cursor-pointer">FASHION</li>
              <li className="px-4 py-2 hover:text-red-600 cursor-pointer">SPORT</li>
              <li className="px-4 py-2 hover:text-red-600 cursor-pointer">ELECTRONICS</li>
              <li className="px-4 py-2 hover:text-red-600 cursor-pointer">DIGITAL</li>
              <li className="px-4 py-2 hover:text-red-600 cursor-pointer">FURNITURE</li>
              <li className="px-4 py-2 hover:text-red-600 cursor-pointer">TODAY'S TRENDING</li>
            </ul>
          </div>
        </div>
        <a href="#" className="hover:text-red-600">SHIPPING & RETURNS</a>
        <a href="#" className="hover:text-red-600">CONTACT US</a>
        <a href="#" className="hover:text-red-600">BLOG</a>
        <a href="#" className="hover:text-red-600">RSS SYNDICATION</a>
      </div>
    </div>
            </section>
        </nav>
    </div>
  )
}

export default Header
