import MovieCardCheck from '@/components/movieCardCheck/movieCardCheck'
import styles from './blog.module.css'
import movieDBClient from '@/constans/apiClients'

const Blog = async () => {
	const popularMovies = await movieDBClient.fetchPopularMoviesData()
	const renderMovies = popularMovies.results.map((movie,index) => (
		<div key={index} className={styles.card}><MovieCardCheck movie={movie}/></div>
	))
	return (
		<div className={styles.container}>
			{renderMovies}
		</div>
)
}

export default Blog
