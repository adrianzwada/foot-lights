import ActorsCardCheck from '@/components/ActorsCardCheck/actorsCardCheck'
import styles from './actors.module.css'
import movieDBClient from '@/constans/apiClients'

export const metadata = {
	title: 'Actors Page ',
	description: `All popular actors right now.`,
}


const Actors = async () => {
	const popularMovies = await movieDBClient.fetchPopularPeopledata()
	const renderMovies = popularMovies.results.map((actor,index) => (
		<div key={index} className={styles.card}><ActorsCardCheck actor={actor}/></div>
	))
	return (
		<div className={styles.container}>
			{renderMovies}
		</div>
)
}

export default Actors