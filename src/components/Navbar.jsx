import { useState } from 'react'
import { NavLink } from 'react-router'
import hotellogo from '../assets/hotel-logo.png';




const Navbar = () => {

    const [count, setcount] = useState(false)


    return (
        <>
            <div className='bg-[#FDFCFA] border-b border-[#EFECE6] sticky top-0 z-40 transition-all'>
                <nav className='max-w-[1280px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between  '>

                    <img src={hotellogo} className='h-11 w-auto' />

                    <div className='hidden md:flex items-center gap-7 text-[15px] font-bold text-[#4A4D46]  '>
                        <NavLink to="/"
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            Home
                        </NavLink>

                        <NavLink to="/rooms"
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            Rooms
                        </NavLink>

                        <NavLink to="/destinations"
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            Destinations
                        </NavLink>

                        <NavLink to="/offers"
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            Offers
                        </NavLink>

                        <NavLink to="/dining "
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            Dining
                        </NavLink>

                        <NavLink to="/aboutus"
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            About Us
                        </NavLink>

                        <NavLink to="/contact"
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                            Contact
                        </NavLink>
                    </div>


                    <div className='flex items-center gap-5'>
                        <a href="" className='hidden sm:flex items-center gap-2 text-[13px] font-medium text-[#3A3D37] hover:text-[#C86D44] transition'>
                            📞
                            <span className='font-bold'>+1 (202) 555-0198</span>
                        </a>

                        <button className='bg-[#C86D44] hover:bg-[#b35d37] text-white text-[13px] font-medium px-4 sm:px-5 py-2.5 rounded-lg shadow-xs transition cursor-pointer'>
                            Book Now
                        </button>
                    </div>


                    <button className='md:hidden text-2xl'
                        onClick={() => setcount(!count)}>
                        ☰
                    </button>



                </nav>



                {count && (
                    <div className='md:hidden bg-white border-b border-[#EAE6DF] px-6 py-4 shadow-lg'>

                        <nav className='flex flex-col space-y-3 text-[#4A4D46] font-bold'>

                            <NavLink to="/" onClick={() => setcount(false)}  
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                                Home
                            </NavLink>

                            <NavLink to="/rooms" onClick={() => setcount(false)} 
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]' >
                                Rooms
                            </NavLink>

                            <NavLink to="/destinations" onClick={() => setcount(false)} 
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                                Destinations
                            </NavLink>

                            <NavLink to="/offers" onClick={() => setcount(false)} 
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                                Offers
                            </NavLink>

                            <NavLink to="/dining" onClick={() => setcount(false)} 
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                                Dining
                            </NavLink>

                            <NavLink to="/aboutUs" onClick={() => setcount(false)} 
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                                About Us
                            </NavLink>

                            <NavLink to="/contact" onClick={() => setcount(false)} 
                            className='transition-colors hover:text-[#C86D44] cursor-pointer [&.active]:text-[#C86D44]'>
                                Contact
                            </NavLink>

                        </nav>

                    </div>
                )}






            </div>
        </>
    )
}

export default Navbar






