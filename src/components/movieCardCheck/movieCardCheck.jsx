import styles from './movieCardCheck.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MovieCardCheck = ({movie}) => {
	console.log(movie)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='' fill className={styles.img} priority />
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
