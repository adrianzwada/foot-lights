import styles from './actorsCardCheck.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ActorsCardCheck = ({actor}) => {
	console.log(actor)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image fill src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt='' className={styles.img} priority priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
				</div>
			</div>
			<div className={styles.bottom}>
				<h2 className={styles.title}>{actor.name}
				</h2>			
				<Link key={actor.id} href='/Actors/[id]' as={`/Actors/${actor.id}`} passHref classame={styles.link}>Read more</Link>
			</div>
		</div>
	)
}

export default ActorsCardCheck
