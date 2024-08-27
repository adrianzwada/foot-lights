import styles from './singleMoviePage.module.css'
import Image from 'next/image'
import apiMovieID from '@/constans/apiMovieId'
import Link from 'next/link'
export default async function SingleMoviePage ({params}) 
{
	//Fetching data by ID 
	const movieIdDetails = await apiMovieID.fetchMovieDetails(params.id)
	// Gender mapping function
	const genderTabs =  movieIdDetails.genres.map((genre) => (
		<div> Genre:
			<p key={movieIdDetails.id} className={styles.card}>{genre.name}</p>
		</div>
	))
	// Votte Average rounding 
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	console.log(movieIdDetails)
	return (
		
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={`https://image.tmdb.org/t/p/w300${movieIdDetails.backdrop_path}`} alt='' fill className={styles.img} />
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.titleContainer}>{movieIdDetails.original_title}</h2>
				<p>Release Date: {movieIdDetails.release_date}</p>
				<p>Runtime: {movieIdDetails.runtime} minutes</p>
				{genderTabs}
				<p>Rating: {ratingAdjust(movieIdDetails.vote_average)} in {movieIdDetails.vote_count} voters.</p>
				<p>Budget: {movieIdDetails.budget}</p>
				<p>Revenue: {movieIdDetails.revenue}</p>
				<div className={styles.desContainer}>
				<p>{movieIdDetails.overview}</p>
				</div>
				<div>For more info check official homepage: <Link key={movieIdDetails.homepage} href='' as={`${movieIdDetails.homepage}`}>Check now</Link> </div>
			</div>
		</div>
	)
}
