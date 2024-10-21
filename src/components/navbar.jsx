import React, { useEffect, useState } from 'react';
import { logos } from '../constants'


function Navbar() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    // Update localStorage and the HTML attribute when the theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    // Handle the theme swap toggle
    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="relative navbar bg-base-100 pe-8 h-20">
            <div className="flex-1">

                <span className="flex items-center font-bold text-[22px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 405 492"
                        className='fill-current w-[66px] h-[66px]'
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g transform="translate(0,492) scale(0.1,-0.1)" stroke="none">
                            <path d="M2009 3538 l-65 -114 313 -535 c173 -293 373 -633 446 -754 l132 -220 129 -3 c122 -2 128 -2 124 16 -6 23 -947 1627 -999 1702 -15 22 -16 21 -80 -92z" />
                            <path d="M1493 3363 c-72 -120 -235 -396 -363 -613 -128 -217 -298 -504 -377 -637 -79 -133 -146 -249 -149 -257 -5 -14 10 -16 127 -16 l134 1 292 497 c160 273 329 561 375 640 80 138 83 142 98 121 8 -13 146 -246 306 -518 l291 -496 -239 -5 -240 -5 -64 -110 c-35 -60 -64 -113 -64 -117 0 -5 170 -8 379 -8 l378 0 124 -215 124 -214 265 -1 c146 -1 320 -3 388 -6 67 -3 122 -2 122 2 0 4 -30 58 -66 120 l-67 114 -251 0 -252 0 -18 33 c-33 57 -148 253 -368 627 -118 201 -331 563 -473 805 -142 242 -263 448 -270 458 -11 16 -28 -8 -142 -200z" />
                            <path d="M1501 2522 c-62 -108 -203 -350 -314 -538 l-200 -341 -119 -6 c-66 -3 -179 -3 -251 0 -154 7 -133 19 -219 -126 -56 -93 -57 -96 -35 -103 12 -3 185 -6 384 -7 l362 -1 19 28 c22 32 317 529 424 717 l75 130 117 3 c104 2 117 5 112 19 -9 23 -212 385 -228 405 -11 15 -27 -7 -127 -180z" />
                        </g>
                    </svg>
                    Ali Ameur
                </span>
            </div>
            <div className="flex-none items-center gap-x-6">

                <label className="swap text-lg font-semibold">
                    <input type="checkbox" />
                    <div className='swap-on'>EN</div>
                    <div className='swap-off'>FR</div>
                </label>


                {/* Theme swap */}
                <label className="swap swap-rotate">
                    {/* This hidden checkbox controls the state */}
                    <input type="checkbox" onChange={handleThemeChange} checked={theme === "dark"} />

                    {/* Sun icon for light mode */}
                    <svg className="swap-on h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* Moon icon for dark mode */}
                    <svg className="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
        </div>
    );
}

export default Navbar;
