import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'

const Projects = () => {
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
					className='mb-8  w-[80vw] lg:w-[60vw] mx-auto text-slate-100 '>
					<h2 className='text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-6'>
						{t('projectsTitle')}
					</h2>
					<p className='text-lg tracking-wide leading-loose md:text-xl 3xl:text-2xl 3xl:leading-[3rem] md:leading-relaxed text-justify'>
						Oto kolekcja projektów pokazujących moje umiejętności. Kliknij na
						dowolny projekt, aby zgłębić szczegóły dotyczące wykorzystanych
						technologii oraz umiejętności nabytych w trakcie ich realizacji.
						Możesz też od razu przejść do wersji live lub repozytorium na
						GitHub.
					</p>
					<div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 3xl:gap-8'>
						{projects.map(project => {
							const { url, github, title, text, tech, id } = project
							return (
								<ProjectCard
									url={url}
									github={github}
									title={title}
									text={text}
									tech={tech}
									id={id}
									key={uuidv4()}
								/>
							)
						})}
					</div>
				</motion.div>
			</section>
			<Footer />
		</>
	)
}

export default Projects
