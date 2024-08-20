'use client'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import { useState } from 'react'
const links = [
	{ title: 'Homepage', path: '/' },
	{ title: 'Movies', path: '/Movie' },
	{ title: 'Tv-Shows', path: '/Tv-Shows' },
	{ title: 'Actors', path: '/Actors' },
]
const Links = () => {
	const [open, setOpen] = useState(false)
	const session = false
	const isAdmin = false
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map(link => (
					<NavLink item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
						<button className={styles.logoutButton}>Logout</button>
					</>
				) : (
					<NavLink item={{ title: 'Login', path: '/login' }} />
				)}
			</div>
			<button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>
				Menu
			</button>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map(link => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	)
}
export default Links
