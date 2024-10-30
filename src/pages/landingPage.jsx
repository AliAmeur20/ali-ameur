import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HeroSection from '../components/heroSection'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Contact from '../components/contact'

function LandingPage() {

    return (
        <div className='bg-base-200'>

            {/* nav bar */}
            <Navbar />

            {/* hero section */}
            <HeroSection />

            <div className='container mx-auto my-20 lg:my-36 xl:my-44 space-y-12 md:space-y-20 lg:space-y-28 xl:space-y-36'>
                {/* about */}
                <div className='py-6 md:py-8 lg:py-10 mx-4 px-4 md:px-8 bg-base-100 rounded-3xl '>
                    <div className='text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 text-primary'>About</div>
                    <span className='px-2 md:text-lg lg:text-xl font-medium'>Dynamic and motivated web and mobile developer with over one year of professional
                        experience in both web and mobile development. Proficient in building robust and scalable
                        applications using modern technologies like React, React Native, and Spring Boot. Skilled in
                        deploying and optimizing applications with Nginx, setting up reverse proxies, and securing
                        web services. Passionate about problem-solving, continuous learning, and collaborating
                        with teams to create innovative web and mobile solutions.</span>
                </div>

                {/* skills */}
                <Skills />

                {/* experience */}
                <Experience />

                {/* projects */}
                <div></div>

                {/* contact */}
                <Contact />
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default LandingPage