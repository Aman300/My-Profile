import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const [theme, setTheme] = useState(user);

    const toggleTheme = () => {
        const newTheme = !user;
        setTheme(newTheme);
        setUser(newTheme); // Update user context based on new theme
    };

    return (
        <div className='w-full py-3 border-b'>
            <div className='flex justify-between px-20 items-center font-semibold'>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div className='flex gap-10'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/work"}>Work</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/services"}>Services</Link>
                    <Link to={"/testimonial"}>Testimonial</Link>
                </div>
                <div>
                    <button
                        className='py-2 px-6 bg-white text-black rounded-3xl font-semibold cursor-pointer '
                        onClick={toggleTheme}
                    >
                        {theme ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
