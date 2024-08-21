import styles from './singleMoviePage.module.css'
import Image from 'next/image'
import movieDBClient from '@/constans/apiClients'
const popularMovies = await movieDBClient.fetchPopularMoviesData()

const SingleMoviePage = async() => {

	console.log(popularMovies.results[1].title)
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src='/postId.jpg' alt='' fill className={styles.img} />
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.titleContainer}>Title</h2>
				<p>Release Date:</p>
				<p>Runtime: </p>
				<p>Genre: </p>
				<p>Rating: </p>
				<div className={styles.desContainer}>
				<p>des</p>

					<div>1{popularMovies.results[1].title}</div>
			</div>
			</div>
		</div>
	)
}
export default SingleMoviePage
