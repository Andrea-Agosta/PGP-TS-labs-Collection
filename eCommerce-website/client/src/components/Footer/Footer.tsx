import './Footer.css';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer-color d-flex flex-column text-center">
      <div className="fs-2 m-2 mt-0" >
        <a href="https://github.com/Andrea-Agosta"><Github className='me-3 github' /></a>
        <a href="https://uk.linkedin.com/in/andrea-agosta-276ab866"><Linkedin className='linkedin' /></a>
      </div>
      <h6> &#169; Designed By Andrea Agosta </h6>
    </footer>
  )
}

export default Footer