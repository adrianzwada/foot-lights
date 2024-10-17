import styles from './singleTvPage.module.css'
import Image from 'next/image'
import apiTvId from '@/constans/apiTvId'
import Link from 'next/link'


export const generateMetadata = async ({ params }) => {
	const { id } = params;
	const post = await apiTvId.fetchTvDetails(id);
 
	return {
	  title: post.title,
	  description: post.overview,
	};
  };

export default async function SingleTvPage ({params})  {
//Fetching data by ID 
const tvsIdDetails = await apiTvId.fetchTvDetails(params.id)
// Gender mapping function
const genderTabs =  tvsIdDetails.genres.map((genre, index) => (
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
				<Image fill src={`https://image.tmdb.org/t/p/w500${tvsIdDetails.backdrop_path}`} alt={tvsIdDetails.title} className={styles.img} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.titleContainer}>{tvsIdDetails.original_title}</h2>
				<div>Release Date: {tvsIdDetails.release_date}</div>
				<div>Runtime: {tvsIdDetails.runtime} minutes</div>
				<div className={styles.genreContainer}> Genre: {genderTabs}	</div>
				<div>Rating: {ratingAdjust(tvsIdDetails.vote_average)} in {tvsIdDetails.vote_count} voters.</div>
				<div>Budget: {tvsIdDetails.budget}</div>
				<div>Revenue: {tvsIdDetails.revenue}</div>
				<div className={styles.desContainer}>
				</div>
				<div>{tvsIdDetails.overview}</div>
				<div>For more info check official homepage: <Link key={tvsIdDetails.homepage} href='' as={`${tvsIdDetails.homepage}`}>Check now</Link> </div>
				</div>
		</div>
	)}

