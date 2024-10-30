import React from 'react'

function Footer() {
    return (
        <footer className="relative p-4 text-white" style={{ backgroundImage: "url('./herobg.png')" }}>
            <div className='footer items-center container mx-auto'>
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>
                <aside className="grid-flow-col items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 405 492"
                        className='fill-current w-24 h-24'
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g transform="translate(0,492) scale(0.1,-0.1)" stroke="none">
                            <path d="M2009 3538 l-65 -114 313 -535 c173 -293 373 -633 446 -754 l132 -220 129 -3 c122 -2 128 -2 124 16 -6 23 -947 1627 -999 1702 -15 22 -16 21 -80 -92z" />
                            <path d="M1493 3363 c-72 -120 -235 -396 -363 -613 -128 -217 -298 -504 -377 -637 -79 -133 -146 -249 -149 -257 -5 -14 10 -16 127 -16 l134 1 292 497 c160 273 329 561 375 640 80 138 83 142 98 121 8 -13 146 -246 306 -518 l291 -496 -239 -5 -240 -5 -64 -110 c-35 -60 -64 -113 -64 -117 0 -5 170 -8 379 -8 l378 0 124 -215 124 -214 265 -1 c146 -1 320 -3 388 -6 67 -3 122 -2 122 2 0 4 -30 58 -66 120 l-67 114 -251 0 -252 0 -18 33 c-33 57 -148 253 -368 627 -118 201 -331 563 -473 805 -142 242 -263 448 -270 458 -11 16 -28 -8 -142 -200z" />
                            <path d="M1501 2522 c-62 -108 -203 -350 -314 -538 l-200 -341 -119 -6 c-66 -3 -179 -3 -251 0 -154 7 -133 19 -219 -126 -56 -93 -57 -96 -35 -103 12 -3 185 -6 384 -7 l362 -1 19 28 c22 32 317 529 424 717 l75 130 117 3 c104 2 117 5 112 19 -9 23 -212 385 -228 405 -11 15 -27 -7 -127 -180z" />
                        </g>
                    </svg>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer