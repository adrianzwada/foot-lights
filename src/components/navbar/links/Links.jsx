'use client'
import { auth } from '@/constans/auth'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import { handleLogout } from '@/constans/action'
import { useState } from 'react'
const links = [
	{ title: 'Homepage', path: '/' },
	{ title: 'Movies', path: '/Movie' },
	{ title: 'Tv-Shows', path: '/Tv-Shows' },
	{ title: 'Actors', path: '/Actors' },
	{ title: "Blog", path: "/blog",
	  },
]
const Links =  ({session}) => {
	const [open, setOpen] = useState(false)

	const isAdmin = false
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map(link => (
					<NavLink item={link} key={link.title} />
				))}
				{session?.user ? (
					<>
						{session.user?.isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
						<form action={handleLogout}>
							<button className={styles.logoutButton}>Logout</button>
						</form>
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
