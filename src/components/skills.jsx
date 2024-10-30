import SkillBox from "./skillBox";
import { icons } from '../constants'

function Skills() {
    return (
        <div className='md:px-8'>
            <div className='px-4 md:px-0 text-xl md:text-2xl lg:text-3xl font-extrabold mb-6 md:mb-8 text-primary'>Skills</div>
            <div className='lg:px-20'>
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
    )
}

export default Skills;