import styles from './tvCardCheck.module.css'
import Image from 'next/image'
import Link from 'next/link'

const tvCardCheck = ({tv}) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image fill src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`} alt='' className={styles.img} priority priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
				</div>
			</div>
			<div className={styles.bottom}>
				<h2 className={styles.title}>{tv.name}
				</h2>			
				<Link key={tv.id} href='/Tv-Shows/[id]' as={`/Tv-Shows/${tv.id}`} passHref classame={styles.link}>Read more</Link>
			</div>
		</div>
	)
}

export default tvCardCheck
