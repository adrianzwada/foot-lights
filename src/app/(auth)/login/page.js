import styles from './login.module.css'
import { handleGithubLogin } from '@/constans/action'
const LoginPage = async () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form action={handleGithubLogin}>
					<button type='submit'>Signin with GitHub</button>
				</form>
			</div>
		</div>
	)
}

export default LoginPage