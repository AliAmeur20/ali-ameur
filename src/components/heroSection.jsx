import { useEffect, useState } from "react";

function HeroSection() {

    const [currentWord, setCurrentWord] = useState('Scalable');
    const words = ['Scalable', 'Robust', 'Responsive', 'Efficient', 'Innovative'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWord((prevWord) => {
                const currentIndex = words.indexOf(prevWord);
                return words[(currentIndex + 1) % words.length];
            });
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const handleDownload = () => {
        // Create an invisible anchor element
        const link = document.createElement('a');
        link.href = '/Ali Ameur.pdf'; // Path to your CV file
        link.download = 'Ali Ameur.pdf'; // The name the file will be saved as

        // Append the link to the body (not visible)
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Clean up and remove the link from the document
        document.body.removeChild(link);
    };

    return (
        <div className="hero min-h-[75vh] md:min-h-[80vh] lg:min-h-screen text-white md:mt-20 transition-shadow duration-300" style={{ backgroundImage: "url('./herobg.png')" }}>
            <div className="hero-content">
                <div className="flex text-center">
                    <div className=''>
                        <div className='text-[44px] md:text-[60px] font-black'>Hi, I'm <span className='text-primary'>Ali</span></div>
                        <div className='text-[33px] md:text-[57px] font-black'>a Full-Stack Developer</div>
                        <div className='text-[23px] md:text-[40px] font-semibold'>
                            specializing in building{' '}
                            <span className='text-secondary text-[44px] md:text-[55px] font-black'>
                                {currentWord}
                            </span><br />
                            web and mobile applications.
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                            <div className='btn btn-lg btn-secondary px-14'>Contact me</div>
                            <div className='btn btn-lg btn-neutral' onClick={handleDownload}>
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
