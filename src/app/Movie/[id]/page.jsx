import styles from './singleMoviePage.module.css'
import Image from 'next/image'
import apiMovieID from '@/constans/apiMovieId'
import Link from 'next/link'


export const generateMetadata = async ({ params }) => {
	const { id } = params;
	const post = await apiMovieID.fetchMovieDetails(id);
  
	return {
	  title: post.title,
	  description: post.overview,
	};
  };

export default async function SingleMoviePage ({params})  {
//Fetching data by ID 
const movieIdDetails = await apiMovieID.fetchMovieDetails(params.id)
// Gender mapping function
const genderTabs =  movieIdDetails.genres.map((genre, index) => (
		<p key={index} className={styles.genreTab}>{genre.name}</p>
))

// Votte Average rounding 
function ratingAdjust(par, decimalPlaces = 1) {
	const factor = 10 ** decimalPlaces
	return Math.floor(par * factor) / factor
}
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image fill src={`https://image.tmdb.org/t/p/w500${movieIdDetails.backdrop_path}`} alt={movieIdDetails.title} className={styles.img} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.titleContainer}>{movieIdDetails.original_title}</h2>
				<div>Release Date: {movieIdDetails.release_date}</div>
				<div>Runtime: {movieIdDetails.runtime} minutes</div>
				<div className={styles.genreContainer}> Genre: {genderTabs}	</div>
				<div>Rating: {ratingAdjust(movieIdDetails.vote_average)} in {movieIdDetails.vote_count} voters.</div>
				<div>Budget: {movieIdDetails.budget}</div>
				<div>Revenue: {movieIdDetails.revenue}</div>
				<div className={styles.desContainer}>
				</div>
				<div>{movieIdDetails.overview}</div>
				<div>For more info check official homepage: <Link key={movieIdDetails.homepage} href='' as={`${movieIdDetails.homepage}`}>Check now</Link> </div>
				</div>
		</div>
	)}

