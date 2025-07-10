import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Footer from './Footer'
const Contact = () => {
	const { t } = useTranslation()
	return (
		<>
			<motion.section
				style={{
					background: `
radial-gradient(circle at 30% -30%, #131213 0%, transparent 48%),
  radial-gradient(circle at 100% 110%, #4b1544 0%, #000 28%)
`,
				}}
				className='max-w-screen min-h-screen py-20'>
				{/* <h2 className='text-white text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold tracking-wide capitalize mb-10'>
					{t('contactTitle')}
				</h2> */}
				<div className='w-[80vw] lg:w-[60vw] h-[80vh] mx-auto flex flex-col justify-center'>
					<h3 className=' text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold tracking-wide mb-6'>
						gawlik.zator@o2.pl
					</h3>
					<h3 className=' text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold tracking-wide '>
						+48 512-374-866
					</h3>
				</div>
			</motion.section>
			<Footer />
		</>
	)
}

export default Contact
