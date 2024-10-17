import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SkillBox from '../components/skillBox'

import { icons } from '../constants'
import ParticlesComponent from '../components/particlesBackground'

function LandingPage() {

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
            <div className="hero min-h-[83vh]">
                <div className="hero-content">
                    <div className="flex flex-col lg:flex-row gap-y-16 md:text-center lg:text-left justify-around items-center gap-8">
                        <div className='w-full lg:w-6/12 space-y-3 lg:mt-14'>
                            <div className='text-[32px] font-bold'>
                                Hi, I'm <span className='text-[46px] text-primary font-black'>Ali Ameur,</span><br />
                                a Web & Mobile Developer, specializing in building scalable web and mobile applications.
                            </div>
                            <div className='btn btn-lg btn-secondary w-full md:w-2/3 rounded-2xl' onClick={handleDownload} >Download CV</div>
                        </div>
                        <div className="w-4/12 mockup-code text-left hidden md:block">
                            <pre data-prefix="$"><code>npm i Ali..</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* about */}
            <div className='py-20 px-4 md:px-12 lg:px-20'>
                <div className='text-3xl font-extrabold mb-3 text-primary'>About</div>
                <span className='text-2xl font-semibold'>Dynamic and motivated web and mobile developer with over one year of professional
                    experience in both web and mobile development. Proficient in building robust and scalable
                    applications using modern technologies like React, React Native, and Spring Boot. Skilled in
                    deploying and optimizing applications with Nginx, setting up reverse proxies, and securing
                    web services. Passionate about problem-solving, continuous learning, and collaborating
                    with teams to create innovative web and mobile solutions.</span>
            </div>

            {/* skills */}
            <div className='py-20 md:px-8 lg:px-16'>
                <div className='px-4 md:px-0 text-3xl font-extrabold mb-16 text-primary'>Skills</div>
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
                <div className='text-3xl font-extrabold mb-3 text-primary'>Experience</div>
                <div >
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

            {/* footer */}
            <Footer />
        </div>
    )
}

export default LandingPage