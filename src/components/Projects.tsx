import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'

const Projects = () => {
	const { t } = useTranslation()

	return (
		<motion.section
			initial={{ x: '150%' }}
			animate={{ x: 0 }}
			exit={{ x: '150%' }}
			transition={{ duration: 0.3, delay: 0.1 }}
			style={{
				background: `
    radial-gradient(circle at 25% 0%, #f4f4f4 10%, transparent 48%),
    radial-gradient(circle at 90% 150%, #dcdcdc 0%, #ffffff 48%)
  `,
			}}
			className='mt-20 p-10 bg-white rounded-sm shadow-sm'>
			<h2 className='bg-gradient-to-r to-gray-950  from-purple-950 inline-block text-transparent bg-clip-text text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl'>
				{t('projectsTitle')}
			</h2>
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
		</motion.section>
	)
}

export default Projects
