import Links from './links/Links'
import Link from 'next/link'
import styles from './navbar.module.css'
import AuthButton from './../AuthButton/AuthButton'
import { auth } from '@/constans/auth'
const Navbar = async () => {
	const session = await auth()
	return (
		<div className={styles.container}>
			<Link href='/' className={styles.logo}>
				Logo
			</Link>
			<AuthButton/>
			<div>
				<Links session={session} />
			</div>
		</div>
	)
}
export default Navbar
