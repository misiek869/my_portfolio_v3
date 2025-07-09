import { useParams } from 'react-router-dom'
import { projects } from '../data'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { RiAdminFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

const ProjectDetails = () => {
	const { t, i18n } = useTranslation()
	const { projectId } = useParams()

	const project = projects.find(p => p.id === projectId)

	if (!project) {
		return (
			<div className='text-center py-20 flex flex-col'>
				<h2 className='text-2xl 3xl:text-4xl bg-gradient-to-r from-red-950 via-gray-900 to-purple-950 inline-block text-transparent bg-clip-text font-bold'>
					{t('notFoundProject')}
				</h2>
				<Link
					to='/'
					className='mx-auto mt-6 text-gray-500 hover:text-gray-800 duration-300 flex items-center group 3xl:text-2xl'>
					<FaArrowLeft className='mr-2 transition-transform duration-300 group-hover:scale-125 ' />{' '}
					{t('goBackBtn')}
				</Link>
			</div>
		)
	}

	return (
		<motion.div
			initial={{ x: '-200%' }}
			animate={{ x: 0 }}
			exit={{ x: '-200%' }}
			transition={{ duration: 0.3 }}
			className='flex flex-col mt-20 xl:mt-10 mb-20'>
			<Link
				to='/'
				className='absolute top-4 left-8 text-gray-500 hover:text-gray-800 duration-300 flex items-center group 3xl:text-2xl'>
				<FaArrowLeft className='mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-x-2' />
				{t('goBackBtn')}
			</Link>
			<div className='max-w-[90vw] lg:max-w-[70vw] mx-auto '>
				<h1 className='text-4xl md:text-5xl 3xl:text-6xl bg-gradient-to-r from-purple-950 via-gray-950 to-purple-950 inline-block text-transparent bg-clip-text  font-bold tracking-wide capitalize pb-2 overflow-hidden'>
					{project.title}
				</h1>

				<div className='flex flex-wrap mx-auto justify-center gap-x-8  mt-14'>
					{project.tech.map((IconComponent, index) => (
						<div key={index} className='text-4xl sm:text-6xl text-gray-900 '>
							<IconComponent />
						</div>
					))}
				</div>
				<div className='bg-white rounded-sm shadow-sm p-5 sm:p-10 mt-10 max-w-full'>
					<p className='text-xl 3xl:text-2xl  3xl:leading-10 leading-loose  text-gray-900'>
						{project.text[i18n.language as keyof typeof project.text]}
					</p>
					<div className='flex gap-x-12 justify-center my-8'>
						{project.url ? (
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<a target='_blank' href={project.url} className=''>
											<TbWorldWww className='h-14 w-14 3xl:w-20 3xl:h-20 text-sky-950 hover:text-purple-950 duration-300 hover:scale-110' />
										</a>
									</TooltipTrigger>
									<TooltipContent>
										<p className='text-lg md:text-xl'>Live Version</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						) : (
							''
						)}

						{project.adminUrl ? (
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<a target='_blank' href={project.adminUrl} className=''>
											<RiAdminFill className='h-14 w-14 3xl:w-20 3xl:h-20 text-sky-950 hover:text-purple-950 duration-300 hover:scale-110' />
										</a>
									</TooltipTrigger>
									<TooltipContent>
										<p className='text-lg md:text-xl'>Admin Panel</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						) : (
							''
						)}

						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<a target='_blank' href={project.github} className=''>
										<FaGithub className='h-14 w-14 3xl:w-20 3xl:h-20 text-sky-950 hover:text-purple-950 duration-300 hover:scale-110' />
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p className='text-lg md:text-xl'>Github</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<p className='text-xl 3xl:text-2xl leading-loose mt-2 text-gray-900'>
						{t('projectTech')}:{' '}
						{project?.techText?.map((tech, index) => (
							<span
								className={`font-bold tracking-wide max-w-full inline-block  ${
									index < project.techText.length - 1
										? "after:content-[','] after:mr-1"
										: ''
								}`}
								key={index}>
								{tech}
							</span>
						))}
					</p>
				</div>
			</div>
		</motion.div>
	)
}

export default ProjectDetails
