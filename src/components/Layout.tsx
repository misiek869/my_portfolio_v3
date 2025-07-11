import { Outlet } from 'react-router-dom'
import SwitchLanguageButton from './LanguageSwitchBtn'
import { motion } from 'framer-motion'

const Layout = () => {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			<main className='w-full mx-auto'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.7 }}
					className='fixed top-4 right-4'>
					<SwitchLanguageButton />
				</motion.div>

				<div className=''>
					<Outlet />
				</div>
			</main>
			{/* <Footer /> */}
		</div>
	)
}

export default Layout
