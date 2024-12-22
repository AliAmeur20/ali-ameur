import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HeroSection from '../components/heroSection'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Contact from '../components/contact'
import About from '../components/about'
import Projects from '../components/projects'

function LandingPage() {

    return (
        <div className='bg-base-200'>

            {/* nav bar */}
            <Navbar />

            {/* hero section */}
            <HeroSection />

            <div className='my-20 lg:my-36 xl:my-44 space-y-12 md:space-y-20 lg:space-y-28 xl:space-y-36'>

                <div className='container mx-auto'>
                    {/* skills */}
                    <Skills />
                </div>

                {/* about */}
                <About />

                <div className='container mx-auto'>
                    {/* experience */}
                    <Experience />
                </div>

                {/* projects */}
                <Projects />

                <div className='container mx-auto'>
                    {/* contact */}
                    <div className='my-24 md:my-40'>
                        <Contact />
                    </div>
                </div>

            </div>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default LandingPage