import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Interests from './sections/Interests'
import Awards from './sections/Awards'
import CallToAction from './sections/CallToAction'

const PageContent = () => { 
   return (
      <div className="container-fluid p-0 bg-secondary">
         <About />
         <Experience />
         <Education />
         <Skills />
         <Interests />
         <Awards />
         <CallToAction />
      </div>
   )
}

export default PageContent