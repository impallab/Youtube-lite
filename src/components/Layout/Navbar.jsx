import React from 'react';
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiSolidVideoRecording } from "react-icons/bi";
import { BsBell, BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuListVideo } from "react-icons/lu";
import { MdKeyboardVoice, MdLightMode } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";



export default function Navbar() {
    const handleChangeTheme = () => {
        document.documentElement.classList.toggle('dark');
        const isDarkMode = document.documentElement.classList.contains('dark');
        document.body.style.backgroundColor = isDarkMode ? 'black' : 'lightgray';
    };

    return (
        <div className='flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50'>
            <div className='flex gap-8  items-center text-xl'>

                {/* Menu icon */}
                <div>
                    <GiHamburgerMenu className='cursor-pointer' />
                </div>
                {/* Logo */}
                <Link to="/">
                    <div className='flex gap-3'>
                        <BsYoutube className='text-3xl text-red-600' />
                        <div className='font-medium'>MiniTube</div>
                    </div>
                </Link>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form action="">
                    <div className='flex bg-zinc-900 border border-zinc-700 rounded-full items-center h-10 px-2 pr-0'>
                        <div className='flex gap-4 items-center pr-5'>
                            <div>
                                <AiOutlineSearch className='text-xl' />
                            </div>
                            <input type="text" placeholder='  Search the video here' className='w-96 bg-zinc-900 text-xl focus:outline-none border-none' />
                            <AiOutlineClose className='text-2xl cursor-pointer' />
                        </div>
                        <button className='h-10 w-16 flex justify-center items-center bg-zinc-700 rounded-r-full '>
                            <AiOutlineSearch />
                        </button>
                    </div>
                </form>
                <div className='text-2xl cursor-pointer bg-zinc-700 roufull p-2 rounded-full'>
                    <MdKeyboardVoice />
                </div>
            </div>
            <div className='flex items-center gap-10 text-xl cursor-pointer'>
                <BiSolidVideoRecording />
                <LuListVideo />
                <div className='relative'>
                    <GiNotebook />
                </div>
                <div className='relative'>
                    <BsBell />
                    <span className='absolute bottom-2 left-3 text-xs bg-red-600 p-0.5 rounded-full'>
                        9+
                    </span>
                </div>

            </div>
            <div className='ml-20 text-xl cursor-pointer'>
                <MdLightMode id='modeChanger' onClick={() => handleChangeTheme()} />
            </div>
            <img src="https://scontent.fccu2-3.fna.fbcdn.net/v/t39.30808-6/431009268_1819586721819559_8166665112089281255_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JojAeGojI0IAX_KN17C&_nc_ht=scontent.fccu2-3.fna&oh=00_AfDKuqO0he4nhSk4H08BW4J7feQ26geCu7k06q8w5f-CRQ&oe=65EFC4EF"
                alt="Profile"
                className='w-10 h-10 rounded-full overflow-hidden'
            />
        </div>
    );
}

