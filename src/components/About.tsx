import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Skills from './Skills'
import Navigation from './Navigation'
import Footer from './Footer'
import Education from './Education'

const About = () => {
	const { t } = useTranslation()

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
					<h2 className=' text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl'>
						{t('aboutTitle')}
					</h2>
					<div className='mt-10'>
						<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] md:leading-relaxed text-justify'>
							{t('about_01')}
						</p>
						<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] mt-6 md:leading-relaxed text-justify'>
							{t('about_02')}
						</p>
						<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] mt-6 md:leading-relaxed text-justify'>
							{t('about_03')}
						</p>
						<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] mt-6 md:leading-relaxed text-justify'>
							{t('about_04')}
						</p>
						<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] mt-6 md:leading-relaxed text-justify'>
							{t('about_05')}
						</p>
						<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] mt-6 md:leading-relaxed text-justify'>
							{t('about_06')}
						</p>
					</div>
				</motion.div>

				<Skills />
				<Education />
			</section>
			<Footer />
		</>
	)
}

export default About
