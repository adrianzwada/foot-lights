import { getUser } from "../../constans/data";
import styles from "./postUser.module.css";
import Image from "next/image";


const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user)
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={"https://images.pexels.com/photos/27777230/pexels-photo-27777230/free-photo-of-jasny-lekki-czarno-bialy-miasto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>AAAA</span>
      </div>
    </div>
  );
};

export default PostUser;