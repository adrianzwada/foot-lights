import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.textContainer}>
					<h2 className={styles.title}>Backstage Pass</h2>
					<p className={styles.textDescription}>
						Backstage Pass is your ultimate destination for discovering and connecting with the world's most talented
						artists and performers. Our platform offers a unique backstage pass to the creative process, allowing you to
						explore a diverse range of performances, from music and theater to dance and comedy.
					</p>
					<div className={styles.buttons}>
						<button className={styles.button}>Sign in</button>
						<button className={styles.button}>Learn more</button>
					</div>
				</div>
				<div className={styles.imgContainer}>
					<Image src='/homepageDetail.png' alt='homepage Detail' fill className={styles.heroIMG} />
				</div>
			</div>
		</>
	)
}
