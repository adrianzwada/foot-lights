import styles from './singleActorPage.module.css'
import Image from 'next/image'
import theActrorsId from '@/constans/apiActrorsId'
import Link from 'next/link'


export const generateMetadata = async ({ params }) => {
	const { id } = params;
	const post = await theActrorsId.fetchActrorsDetails(id);
  
	return {
	  title: post.title,
	  description: post.overview,
	};
  };

export default async function SingleMoviePage ({params})  {
//Fetching data by ID 
const actorIdDetails = await theActrorsId.fetchActrorsDetails(params.id)
console.log(actorIdDetails)

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image fill src={`https://image.tmdb.org/t/p/w500${actorIdDetails.profile_path}`} alt={actorIdDetails.title} className={styles.img} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.titleContainer}>{actorIdDetails.name}</h2>
				<div>Original name: {actorIdDetails.original_name}</div>
				<div>Popularity: {actorIdDetails.popularity} people </div>
				<div>Place of birth: {actorIdDetails.place_of_birth}</div>
				<div>Birthday: {actorIdDetails.birthday}</div>
				<div className={styles.desContainer}>
				</div>
				<div>{actorIdDetails.biography}</div>
				<div>For more info check official homepage: <Link key={actorIdDetails.imdb_id} href='' as={`${actorIdDetails.imdb_id}`}>Check now</Link> </div>
				</div>
		</div>
	)}

