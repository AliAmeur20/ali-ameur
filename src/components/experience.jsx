function Experience() {
    
    return (
        <div className='px-4 md:px-8'>
            <div className='text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 md:mb-8 text-primary'>Experience</div>
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
    )
}

export default Experience;