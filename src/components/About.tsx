import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Skills from './Skills'
import Navigation from './Navigation'
import Footer from './Footer'
import Education from './Education'
import myPhoto from '../assets/images/michal.jpg'

const About = () => {
	const { t } = useTranslation()

	const paragraphStyles = `text-lg tracking-wide leading-loose md:text-xl 3xl:text-2xl 3xl:leading-[3rem] mt-3 md:leading-relaxed text-justify`

	return (
		<>
			<section
				style={{
					background: `
  radial-gradient(circle at 30% -30%, #131213 0%, transparent 48%),
  radial-gradient(circle at 100% 110%, #4b1544 0%, #000 28%)
`,
				}}
				className='max-w-screen min-h-screen py-20'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.7 }}
					className='fixed top-4 left-4'>
					<Navigation hidden={'about'} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.7 }}
					className='mb-8 w-[80vw] lg:w-[60vw] mx-auto text-slate-100 '>
					<h2 className=' text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-10'>
						{t('aboutTitle')}
					</h2>
					<div className='relative'>
						<div className='flex flex-wrap'>
							<img
								src={myPhoto}
								alt='Opis zdjęcia'
								className='w-full sm:w-1/3 pr-4 pb-4 float-right'
							/>
							<div className='flex-1 min-w-[60%]'>
								<p className={paragraphStyles}>{t('about_01')}</p>
								<p className={paragraphStyles}>{t('about_02')}</p>
							</div>
						</div>

						{/* Pełna szerokość od tego momentu */}
						<p className={paragraphStyles}>{t('about_03')}</p>
						<p className={paragraphStyles}>{t('about_04')}</p>
						<p className={paragraphStyles}>{t('about_05')}</p>
						<p className={paragraphStyles}>{t('about_06')}</p>
						{/* ... */}
					</div>

					{/* <div className=''>
						<p className={paragraphStyles}>{t('about_01')}</p>
						<p className={paragraphStyles}>{t('about_02')}</p>
						<p className={paragraphStyles}>{t('about_03')}</p>
						<p className={paragraphStyles}>{t('about_04')}</p>
						<p className={paragraphStyles}>{t('about_05')}</p>
						<p className={paragraphStyles}>{t('about_06')}</p>
					</div> */}
				</motion.div>

				<Skills />
				<Education />
			</section>
			<Footer />
		</>
	)
}

export default About
