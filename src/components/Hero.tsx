import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'
// import michalImage from '../assets/images/Zdjęcie_michal.jpg'
// import michalImageTransparent from '../assets/images/michal.png'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
	return (
		<section className='max-w-screen'>
			<div
				className='flex p-4 md:p-10 h-[50vh] xl:h-[80vh] rounded-sm'
				style={{
					background: `
  radial-gradient(circle at 30% -30%, #131213 0%, transparent 48%),
  radial-gradient(circle at 90% 150%, #ee79de 0%, #000 48%)
`,
				}}>
				<div className='flex flex-col items-start justify-center'>
					<motion.h1
						initial={{ x: '150%' }}
						animate={{ x: 0 }}
						exit={{ x: '150%' }}
						transition={{ duration: 0.7 }}
						className='text-slate-100 text-4xl sm:text-5xl lg:text-7xl 3xl:text-8xl font-extrabold tracking-wider mb-4'>
						Michał Gawlik
					</motion.h1>
					<motion.h3
						initial={{ x: '150%' }}
						animate={{ x: 0 }}
						exit={{ x: '150%' }}
						transition={{ delay: 0.2, duration: 0.7 }}
						className='text-slate-100 text-2xl lg:text-4xl 3xl:text-5xl'>
						Frontend Developer
					</motion.h3>

					{/* <h3>
						<TypeAnimation
							sequence={['Frontend Developer', 1000]}
							wrapper='h3'
							speed={50}
							// repeat={Infinity}
							cursor={false}
						/>
					</h3> */}
					<div className='flex gap-x-6 justify-center mt-6'>
						<motion.a
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.7 }}
							target='_blank'
							href={'https://www.linkedin.com/in/m-gawlik/'}>
							<FaLinkedin className='text-slate-100 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</motion.a>
						<motion.a
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.7 }}
							target='_blank'
							href={'https://github.com/misiek869'}>
							<FaSquareGithub className='text-slate-100 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</motion.a>
					</div>
				</div>
				{/* <img src={michalImageTransparent} alt='' className='rounded-sm' /> */}
			</div>
		</section>
	)
}

export default Hero
