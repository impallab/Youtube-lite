import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [nameLetters, setNameLetters] = useState([]);
    const year = new Date().getFullYear()
    const name = `${year} @ Pallab || All rights reserved.`;

    useEffect(() => {
        const interval = setInterval(() => {
            setNameLetters(prevLetters => {
                if (prevLetters.length === name.length) return [];
                return [...prevLetters, name[prevLetters.length]];
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-zinc-700 text-cyan-300 text-center py-2 fixed bottom-0 w-full transition-opacity duration-700 opacity-25 hover:opacity-100">

            <div className="text-center  text-white mb-0.5 opacity-100">
                <p className='font-semibold '>
                    &copy;
                    <span> {nameLetters.join("")}</span>
                </p>
            </div>

        </footer>



    );
};

export default Footer;
