import Footer from '@/components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: {
		default:'Footlight Homepage',
		template:'%s | Footlights '
	},
	description: `Backstage Pass is your ultimate destination for discovering and connecting with the world's most talented artists and performers`,
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='container'>
				<Navbar />
				{children}
				<Footer />
				</div>
			</body>
		</html>
	)
}
