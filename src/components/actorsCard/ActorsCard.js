import Link from 'next/link'
export default function ActorCard({ tvData }) {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	return (
		<div>
			<Link key={tv.id} href='/Actors/[id]' as={`/tv/${tvData.id}`} passHref>
				<img
					src={`https://image.tmdb.org/t/p/w500${actor.poster_path}`}
					alt={tvData.title}
					
				/>
				<p >{tvData.title}</p>
				<p>{ratingAdjust(tvData.vote_average)}</p>
			</Link>
		</div>
	)
}

