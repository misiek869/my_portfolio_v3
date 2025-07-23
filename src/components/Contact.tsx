// import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Navigation from './Navigation'
import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
	// const { t } = useTranslation()
	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.1, duration: 0.7 }}
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
					<div className='flex gap-x-6  mt-6'>
						<motion.a
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9, duration: 0.7 }}
							target='_blank'
							href={'https://www.linkedin.com/in/m-gawlik/'}>
							<FaLinkedin className='text-slate-100 w-10 h-10 md:w-12 md:h-12 3xl:w-16 3xl:h-16 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</motion.a>
						<motion.a
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9, duration: 0.7 }}
							target='_blank'
							href={'https://github.com/misiek869'}>
							<FaSquareGithub className='text-slate-100 w-10 h-10 md:w-12 md:h-12 3xl:w-16 3xl:h-16 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</motion.a>
					</div>
				</div>
			</motion.section>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.7 }}
				className='fixed top-4 left-4'>
				<Navigation hidden={'about'} />
			</motion.div>
			<Footer />
		</>
	)
}

export default Contact
