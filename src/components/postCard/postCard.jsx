import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/27777230/pexels-photo-27777230/free-photo-of-jasny-lekki-czarno-bialy-miasto.jpeg' alt="" fill className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}> Title</h2>
        <p className={styles.desc}>desc</p>
        <Link href='/blog/post' className={styles.link}> Read more</Link>
      </div>
    </div>
  )
}

export default PostCard