import styles from './footer.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { CONTACT } from '../../constans/socials.js'
const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}><p>Check my socials</p></div>
				<div className={styles.socialLinks}>
					<a href={CONTACT.linkedin} className={styles.socialLink}>
						<FaLinkedin />
					</a>
					<a href={CONTACT.github} className={styles.socialLink}>
						<FaGithub />
					</a>
					<a href={CONTACT.codewars} className={styles.socialLink}>
						<SiCodewars />
					</a>
				</div>
			<div className={styles.text}>Adrian creative thoughts agency @ All right reserved</div>
		</div>
	)
}
export default Footer
