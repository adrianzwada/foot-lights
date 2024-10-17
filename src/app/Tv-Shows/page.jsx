import TvCardCheck from '@/components/tvCardCheck/tvCardCheck'
import styles from './tv.module.css'
import movieDBClient from '@/constans/apiClients'

export const metadata = {
	title: 'TVS Page ',
	description: `All popular TVS right now.`,
}
const TvShows = async () => {
	const popularTvs = await movieDBClient.fetchPopularTvsData()
	const renderTvs = popularTvs.results.map((tv,index) => (
		<div key={index} className={styles.card}><TvCardCheck tv={tv}/></div>
	))
	return (
		<div className={styles.container}>
			{renderTvs}
		</div>
)
}

export default TvShows
