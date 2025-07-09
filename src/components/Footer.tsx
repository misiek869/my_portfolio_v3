import dayjs from 'dayjs'
import { motion } from 'framer-motion'

import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
	const currentYear = dayjs().year()

	return (
		<motion.footer
			initial={{ y: '200%' }}
			animate={{ y: 0 }}
			exit={{ y: '200%' }}
			transition={{ duration: 0.3 }}
			className=' bg-gray-950 flex md:flex-row flex-col justify-center md:justify-between  py-6 px-8 md:py-4  w-screen absolute bottom-0 right-0'>
			<p className='text-slate-50 tracking-wider text-md md:text-lg font-normal mb-4 md:mb-0 text-center'>
				Copyright &copy;{currentYear} Michał Gawlik
			</p>
			<div className='flex items-center gap-x-4 justify-center'>
				<a target='_blank' href={'https://www.linkedin.com/in/m-gawlik/'}>
					<FaLinkedin className='text-slate-50 w-5 h-5 md:w-7 md:h-7 hover:text-slate-200 hover:animate-pulse' />
				</a>
				<a target='_blank' href={'https://github.com/misiek869'}>
					<FaSquareGithub className='text-slate-50 w-5 h-5 md:w-7 md:h-7 hover:text-slate-200 hover:animate-pulse' />
				</a>
			</div>
		</motion.footer>
	)
}

export default Footer
