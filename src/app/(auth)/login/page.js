import { signIn } from "@/constans/auth";
import styles from "./login.module.css";

const LoginPage =() => {

    const handleGithubLogin = async () => {
        "use server"
        await signIn("github")
    };

    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={handleGithubLogin}>
            <button className={styles.github}>Login with Github</button>
          </form>
        </div>
      </div>
    )
}

export default LoginPage