import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {

  // function linkedinPage() {
  //   window.location.replace('https://www.linkedin.com/in/ricardo-k%C3%BChlkamp-da-silva/')
  // }
  
  // function gitHubPage() {
  //   window.location.replace('https://github.com/ricardokuhlkamp')
  // }

  return (
    <footer className={ styles.footer }>
      <ul className={ styles.social_list }>
        <li>
          <a href='https://www.linkedin.com/in/ricardo-k%C3%BChlkamp-da-silva/' target="_blank" rel="noreferrer" className={styles.link} >
          <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/ricardokuhlkamp' target="_blank" rel="noreferrer">
          <FaGithub />
          </a>
        </li>
      </ul>
      <p className={ styles.copy_rigth }>
        <span>Ricardo Kühlkamp da Silva</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer;