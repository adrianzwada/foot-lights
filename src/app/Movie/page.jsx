import MovieCardCheck from '@/components/movieCardCheck/movieCardCheck'
import styles from './movie.module.css'
import movieDBClient from '@/constans/apiClients'

const Movies = async () => {

	const popularMovies = await movieDBClient.fetchPopularMoviesData()
	const renderMovies = popularMovies.results.map((movie,index) => (
		<div key={index} className={styles.card}><MovieCardCheck movie={movie}/></div>
	))

	return (
		<div className={styles.container}>
			{renderMovies}
			</div>)
}

export default Movies
