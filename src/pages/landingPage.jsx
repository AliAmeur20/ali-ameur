import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SkillBox from '../components/skillBox'

import { icons } from '../constants'

function LandingPage() {

    const [currentWord, setCurrentWord] = useState('Scalable');
    const words = ['Scalable', 'Robust', 'Responsive', 'Efficient', 'Innovative'];
    const [copy, setCopy] = useState(false);

    const email = "aa8414952@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

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
        <div className='bg-base-200'>

            {/* nav bar */}
            <Navbar />

            {/* hero section */}
            <div className="hero min-h-[90vh] text-white" style={{ backgroundImage: "url('./herobg.png')" }}>
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
                                <div className='btn btn-lg btn-ghost' onClick={handleDownload}>
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


            {/* about */}
            <div className='py-20 px-4 md:px-12 lg:px-20 mt-6 lg:mt-12'>
                <div className='text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 text-primary'>About</div>
                <span className='px-2 md:text-lg lg:text-xl font-medium'>Dynamic and motivated web and mobile developer with over one year of professional
                    experience in both web and mobile development. Proficient in building robust and scalable
                    applications using modern technologies like React, React Native, and Spring Boot. Skilled in
                    deploying and optimizing applications with Nginx, setting up reverse proxies, and securing
                    web services. Passionate about problem-solving, continuous learning, and collaborating
                    with teams to create innovative web and mobile solutions.</span>
            </div>

            {/* skills */}
            <div className='py-20 md:px-8 lg:px-16'>
                <div className='px-4 md:px-0 text-xl md:text-2xl lg:text-3xl font-extrabold mb-8 text-primary'>Skills</div>
                <div className='md:px-2 lg:px-20'>
                    <div className='flex flex-wrap justify-center gap-8'>
                        <SkillBox alt="tailwind" icon={icons.tailwind} skill="Tailwind CSS" />
                        <SkillBox alt="spring" icon={icons.spring} skill="Spring" />
                        <SkillBox alt="react native" icon={icons.react} skill="React Native" />
                        <SkillBox alt="expo" icon={icons.expo} skill="Expo" />
                        <SkillBox alt="node" icon={icons.node} skill="Node JS" />
                        <SkillBox alt="rabbit" icon={icons.rabbit} skill="RabbitMQ" />
                        <SkillBox alt="java" icon={icons.java} skill="Java" />
                        <SkillBox alt="postgres" icon={icons.postgres} skill="PostgreSQL" />
                        <SkillBox alt="mongodb" icon={icons.mongodb} skill="MongoDB" />
                        <SkillBox alt="docker" icon={icons.docker} skill="Docker" />
                        <SkillBox alt="express" icon={icons.express} skill="Express JS" />
                        <SkillBox alt="nginx" icon={icons.nginx} skill="Nginx" />
                        <SkillBox alt="react" icon={icons.react} skill="React JS" />
                        <SkillBox alt="git" icon={icons.git} skill="Git" />
                        <SkillBox alt="junit" icon={icons.junit} skill="Junit" />
                        <SkillBox alt="sonar" icon={icons.sonar} skill="SonarQube" />
                    </div>
                </div>
            </div>

            {/* experience */}
            <div className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='text-xl md:text-2xl lg:text-3xl font-extrabold mb-8 text-primary'>Experience</div>
                <div className='bg-base-100 px-4 py-12 rounded-3xl'>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">september 2023</time>
                                <div className="text-xl font-black">TechI'nstinct, Backend Developer</div>
                                <span className='text-[17px] font-medium'>
                                    Developed microservices using Spring Framework (Spring Boot, Spring MVC) and Hibernate
                                    for PostgreSQL databases.<br />
                                    Implemented RabbitMQ for message queuing and asynchronous communication.<br />
                                    Collaborated with front-end developers to integrate backend functionality for seamless user
                                    experience.<br />
                                    Conducted code reviews and troubleshooting to maintain code quality.<br />
                                    Configured and optimized Nginx as a reverse proxy, ensuring performance and security with
                                    SSL certificates.
                                </span>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

            {/* projects */}
            <div></div>

            {/* contact */}
            <div className='flex justify-center lg:justify-evenly py-16 mb-10'>
                <div className='pb-16 pt-8 md:pt-12 bg-base-100 rounded-3xl mx-4 md:mx-0 px-4 w-full md:px-16 md:w-10/12 lg:w-1/3 lg:px-12'>
                    <div className='text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 text-primary'>Contact</div>
                    <div className=''>
                        <div className='space-y-3 mt-4 w-full'>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-semibold">name <span className='text-error'>*</span></span>
                                </div>
                                <input type="text" placeholder="your name" className="input input-bordered w-full focus:input-primary" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-semibold">email <span className='text-error'>*</span></span>
                                </div>
                                <input type="email" placeholder="your email" className="input input-bordered w-full focus:input-primary" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-semibold">Message <span className='text-error'>*</span></span>
                                </div>
                                <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="TYpe here"></textarea>
                            </label>
                        </div>
                        <div className='flex mt-10 gap-x-3'>
                            <div className='btn btn-secondary px-8'>Send message</div>
                            {!copy
                                ?
                                <div className='btn btn-outline hover:space-x-1' onClick={copyToClipboard}>
                                    <span>copy Email</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>
                                </div>
                                :
                                <div className='btn no-animation'>
                                    <span>copied</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='bg-base-100 rounded-3xl w-1/3 hidden lg:block'></div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default LandingPage