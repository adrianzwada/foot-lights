import { auth, signIn } from "@/constans/auth";
import styles from "./login.module.css";

const LoginPage = async () => {
  const session = await auth()
  console.log(session, 'session')

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