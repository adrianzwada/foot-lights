import styles from './movieCardCheck.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MovieCardCheck = ({movie}) => {
	console.log(movie)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image fill src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='' className={styles.img} priority priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
				</div>
			</div>
			<div className={styles.bottom}>
				<h2 className={styles.title}>{movie.title}
				</h2>			
				<Link key={movie.id} href='/Movie/[id]' as={`/Movie/${movie.id}`} passHref classame={styles.link}>Read more</Link>
				<Link href='/movie/[id]' as={`/movie/${movie.id}`} passHref classame={styles.link}>Read more</Link>
			</div>
		</div>
	)
}

export default MovieCardCheck
