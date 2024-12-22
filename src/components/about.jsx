import { images } from '../constants'
import Carousel from './carousel';

function About() {

    const opinions = [
        {
            'id': 1,
            'fullName': "Ali Ameur",
            'role': "CEO and Founder of E-CORP",
            'opinion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            'id': 2,
            'fullName': "Ali Ameur",
            'role': "Web Developer At Tech I'nstinct",
            'opinion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            'id': 3,
            'fullName': "Ali Ameur",
            'role': "Back-End Lead At Tesla",
            'opinion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            'id': 4,
            'fullName': "Ali Ameur",
            'role': "CEO and Founder of Black-Rock",
            'opinion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];

    return (
        <div className='bg-primary overflow-hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start text-primary-content py-20 md:py-28 gap-y-16'>
                    <div className='flex justify-center lg:justify-end w-full 2xl:w-1/3'>
                        <div className='lg:px-20 flex flex-col items-center' >
                            <img
                                alt='avatar'
                                src={images.ali}
                                className='w-72 h-72 rounded-full object-cover shadow-2xl'
                            />
                            <div className='flex text-primary-content gap-x-2 mt-6'>
                                <button className="custom-primary-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </button>

                                <button className="custom-primary-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </button>

                                <button className="custom-primary-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='px-5 lg:px-10 2xl:w-1/3'>
                        <div className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3'>👋 Hello!</div>
                        <br />
                        <div className='text-lg md:text-xl font-medium'>
                            <p>
                                My name is <span className='font-bold text-xl md:text-2xl'>Ali, </span>, and I’m a passionate web and mobile developer with over a year of professional experience.
                            </p>
                            <br />
                            <p>
                                I specialize in building robust, scalable applications using modern frameworks and technologies such as <span className='font-bold'>React</span>,
                                <span className='font-bold'> React Native</span> and <span className='font-bold'>Spring Boot</span>.
                            </p>
                            <br />
                            <p>
                                My expertise extends to deploying and optimizing applications with  <span className='font-bold'>Nginx</span>,
                                configuring reverse proxies, and implementing secure web services for reliable performance.
                            </p>
                            <br />
                            <p>
                                I thrive on solving complex problems, continuously improving my skills, and collaborating with teams to deliver innovative and impactful solutions.
                            </p>
                            <br />
                            <p>
                                I’m always ready to connect and work on innovative projects that make a difference. Let’s create something amazing together!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end px-8 pb-12'>
                    <div className='flex justify-end'>
                        <Carousel elements={opinions} cardType='opinion' color='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;