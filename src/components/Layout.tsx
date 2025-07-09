import { Outlet } from 'react-router-dom'
import SwitchLanguageButton from './LanguageSwitchBtn'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Layout = () => {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			<main className='max-w-[95vw] lg:max-w-[75vw] xl:max-w-[55vw] mx-auto'>
				<motion.div
					initial={{ x: '150%' }}
					animate={{ x: 0 }}
					exit={{ x: '150%' }}
					transition={{ duration: 0.3 }}
					className='fixed top-4 right-4'>
					<SwitchLanguageButton />
				</motion.div>
				<div className='py-20 '>
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
