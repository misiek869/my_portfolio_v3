import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'
// import michalImage from '../assets/images/Zdjęcie_michal.jpg'
// import michalImageTransparent from '../assets/images/michal.png'
import { motion } from 'framer-motion'
// import { TypeAnimation } from 'react-type-animation'
import Navigation from './Navigation'
import { useEffect, useState } from 'react'

const Hero = () => {
	const words = ['Developer', 'React Fan', 'Next.js Dev']
	const [wordIndex, setWordIndex] = useState(0)
	const [text, setText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)
	// const [speed, setSpeed] = useState(150)

	useEffect(() => {
		const currentWord = words[wordIndex]
		const timeout = setTimeout(
			() => {
				if (isDeleting) {
					setText(prev => prev.slice(0, -1))
				} else {
					setText(prev => currentWord.slice(0, prev.length + 1))
				}

				if (!isDeleting && text === currentWord) {
					setTimeout(() => setIsDeleting(true), 1000)
				} else if (isDeleting && text === '') {
					setIsDeleting(false)
					setWordIndex(prev => (prev + 1) % words.length)
				}
			},
			isDeleting ? 50 : 150
		)

		return () => clearTimeout(timeout)
	}, [text, isDeleting])

	return (
		<section className='max-w-screen'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.7 }}
				className='fixed top-4 left-4'>
				<Navigation hidden={'home'} />
			</motion.div>
			<div
				className='flex p-4 md:p-10 h-screen'
				style={{
					background: `
  radial-gradient(circle at 30% -30%, #131213 0%, transparent 48%),
  radial-gradient(circle at 100% 110%, #4b1544 0%, #000 28%)
`,
				}}>
				<div className='flex flex-col items-start justify-center w-[90vw] lg:w-[70vw] mx-auto'>
					<motion.h1
						initial={{ x: '250%' }}
						animate={{ x: 0 }}
						exit={{ x: '150%' }}
						transition={{ duration: 0.7 }}
						className='text-slate-100 text-4xl sm:text-5xl lg:text-7xl 3xl:text-8xl font-extrabold tracking-wider mb-4'>
						Michał Gawlik
					</motion.h1>
					<motion.h3
						initial={{ x: '350%' }}
						animate={{ x: 0 }}
						exit={{ x: '150%' }}
						transition={{ delay: 0.2, duration: 0.7 }}
						className='text-slate-100 text-2xl lg:text-4xl 3xl:text-5xl'>
						Frontend{' '}
						<span className='text-gray-500 text-3xl lg:text-5xl 3xl:text-6xl'>
							{'{'}
						</span>
						<span className='text-fuchsia-900 font-bold'> {text} </span>
						<span className='text-gray-500 text-3xl lg:text-5xl 3xl:text-6xl'>
							{'}'}
						</span>
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
							transition={{ delay: 0.9, duration: 0.7 }}
							target='_blank'
							href={'https://www.linkedin.com/in/m-gawlik/'}>
							<FaLinkedin className='text-slate-100 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</motion.a>
						<motion.a
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9, duration: 0.7 }}
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
