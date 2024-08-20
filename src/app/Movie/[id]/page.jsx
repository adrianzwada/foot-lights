import styles from './singleMoviePage.module.css'
import Image from 'next/image'

const getData = async () => {
	const res = await fetch('https://jsonplaceholder.org/posts')
	if(!res.ok){
		throw new Error('something went wrong')
	}
	return res.json()
}

const SingleMoviePage = async() => {
	const post = await getData()
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image Image src='/postId.jpg' alt='' fill className={styles.img} />
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.titleContainer}>Title</h2>
				<p>Release Date:</p>
				<p>Runtime: </p>
				<p>Genre: </p>
				<p>Rating: </p>
				<div className={styles.desContainer}>
				<p>des</p>
				{post.map((post)=>{
					<div>{post.title}</div>
				})}
			</div>
			</div>
		</div>
	)
}
export default SingleMoviePage
