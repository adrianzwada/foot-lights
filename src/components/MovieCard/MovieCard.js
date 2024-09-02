import Link from 'next/link'
export default function MovieCard({ movieData }) {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	return (
		<div>
			<Link key={movieData.id} href='/movie/[id]' as={`/movie/${movieData.id}`} passHref>
				<img
					src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
					alt={movieData.title}
					
				/>
				<p >{movieData.title}</p>
				<p>{ratingAdjust(movieData.vote_average)}</p>
			</Link>
		</div>
	)
}

