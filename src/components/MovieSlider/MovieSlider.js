// import movieDBClient from '../../constans/apiMovieId'
// import MovieCard from '../../components/MovieCard/MovieCard.js'
// export default async function MovieSlider() {
// 	try {
// 		const movieData = await movieDBClient.fetchPopularMoviesData()
// 		const renderedMovies = movieData.results.map((movie, index) => (
// 			<div key={index}>
// 				<MovieCard movieData={movie} />
// 			</div>
// 		))

// 		return (
// 			<section>
// 				<h2>Under the Spotlight: What to Watch - The Week's Most Popular Films</h2>
// 				<main>{renderedMovies}</main>
// 			</section>
// 		)
// 	} catch (error) {
// 		console.error('Error fetching movies:', error)
// 		return <div>Error fetching movies. Please try again later.</div>
// 	}
// }
