import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Contact from '../components/contact';
import About from '../components/about';
import Projects from '../components/projects';

function LandingPage() {
    return (
        <div className="bg-base-200">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section id="hero">
                <HeroSection />
            </section>

            <div className="my-20 lg:my-36 xl:my-44 space-y-12 md:space-y-20 lg:space-y-28 xl:space-y-36">
                <div className="container mx-auto">
                    {/* Skills Section */}
                    <section id="skills">
                        <Skills />
                    </section>
                </div>

                {/* About Section */}
                <section id="about">
                    <About />
                </section>

                <div className="container mx-auto">
                    {/* Experience Section */}
                    <section id="experience">
                        <Experience />
                    </section>
                </div>

                {/* Projects Section */}
                <section id="projects">
                    <Projects />
                </section>

                <div className="container mx-auto">
                    {/* Contact Section */}
                    <section id="contact" className="my-24 md:my-40">
                        <Contact />
                    </section>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default LandingPage;
