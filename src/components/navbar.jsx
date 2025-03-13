import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-screen fixed top-0 left-0 bg-white text-white flex items-center justify-between px-6 py-4 z-50">
            <Link to="/" className="text-2xl text-black font-bold">Communion</Link>

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-black font-bold">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/events" className="hover:underline">Events</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>

                {/* Categories Dropdown with Events */}
                <li className="relative group">
                    <button className="hover:underline">Categories</button>
                    <ul className="absolute hidden group-hover:block bg-white text-black shadow-md rounded mt-2 w-40 left-0">
                        <li><Link to="/events" className="block px-4 py-2 hover:bg-gray-200">Events</Link></li>
                        <li><Link to="/events/religious" className="block px-4 py-2 hover:bg-gray-200">Religious</Link></li>
                        <li><Link to="/events/social" className="block px-4 py-2 hover:bg-gray-200">Social</Link></li>
                        <li><Link to="/events/charity" className="block px-4 py-2 hover:bg-gray-200">Charity</Link></li>
                    </ul>
                </li>

                <li><Link to="/createevent" className="hover:underline">Create Event</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>

            {/* Signup & Login Buttons */}
            <div className="hidden md:flex space-x-4">
                <Link to="/signup">
                    <button className="h-[40px] w-[120px] bg-[#E6E6FA] text-black font-bold rounded-md hover:bg-white transition">
                        Signup
                    </button>
                </Link>
                <Link to="/login">
                    <button className="h-[40px] w-[120px] bg-[#E6E6FA] text-black font-bold rounded-md hover:bg-white transition">
                        Login
                    </button>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#4B0082] flex flex-col items-center space-y-4 py-4">
                    <Link to="/" className="hover:text-gray-300 text-white">Home</Link>
                    <Link to="/events" className="hover:text-gray-300 text-white">Events</Link>
                    <Link to="/about" className="hover:text-gray-300 text-white">About</Link>
                    <Link to="/contact" className="hover:text-gray-300 text-white">Contact Us</Link>
                    <Link to="/signup">
                        <button className="h-[40px] w-[120px] bg-[#E6E6FA] text-black font-bold rounded-md">
                            Signup
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="h-[40px] w-[120px] bg-[#E6E6FA] text-black font-bold rounded-md">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
