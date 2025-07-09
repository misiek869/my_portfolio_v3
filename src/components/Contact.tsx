import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
const Contact = () => {
	const { t } = useTranslation()
	return (
		<motion.section
			initial={{ x: '150%' }}
			animate={{ x: 0 }}
			exit={{ x: '150%' }}
			transition={{ duration: 0.3, delay: 0.2 }}
			style={{
				background: `
  radial-gradient(circle at 90% -40%, #ee79de 0%, transparent 48%),
  radial-gradient(circle at 30% 150%, #ee79de 0%, #000 48%)
`,
			}}
			className='h-screen mt-20 p-4 md:p-10 rounded-sm flex flex-col justify-center max-w-screen shadow-sm mb-10'>
			<h2 className='text-white text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold tracking-wide capitalize mb-10'>
				{t('contactTitle')}
			</h2>
			<h3 className=' text-white text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold tracking-wide mb-6'>
				gawlik.zator@o2.pl
			</h3>
			<h3 className=' text-white text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold tracking-wide '>
				+48 512-374-866
			</h3>
		</motion.section>
	)
}

export default Contact
