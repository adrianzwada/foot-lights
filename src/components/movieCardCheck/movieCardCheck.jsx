import styles from './movieCardCheck.module.css'
import Image from 'next/image'
import Link from 'next/link'
const MovieCardCheck = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image src='/postId.jpg' alt='' fill className={styles.img} />
				</div>
			</div>
			<div className={styles.bottom}>
				<h2 className={styles.title}>Title</h2>
				<p className={styles.desc}>des
				</p>
				<Link href='/movie/' classame={styles.link}>Read more</Link>
			</div>
		</div>
	)
}

export default MovieCardCheck
