import MovieCardCheck from '@/components/movieCardCheck/movieCardCheck'
import styles from './movie.module.css'

const Movies = () => {
	return (
		<div className={styles.container}>
			<div  className={styles.card}><MovieCardCheck /></div>
			<div  className={styles.card}><MovieCardCheck /></div>
			<div  className={styles.card}><MovieCardCheck /></div>
			<div  className={styles.card}><MovieCardCheck /></div>
			<div  className={styles.card}><MovieCardCheck /></div>
			<div  className={styles.card}><MovieCardCheck /></div>
		
		</div>
	)
}

export default Movies
