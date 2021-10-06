import About from './About.js'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'

const Header = (props) => {

 if (props.currentPage === 'Project') {
    return <Project />
} else if (props.currentPage === 'Resume') {
    return <Resume />
 } else if (props.currentPage === 'Contact') {
    return <Contact />
 } else {
    return <About />
}
}


export default Header;