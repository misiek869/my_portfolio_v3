import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
// import { useState } from 'react'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

type ProjectCardProps = {
	url?: string
	github: string
	title: string
	text: { en: string; pl: string }
	tech: IconType[]
	id: string
}

const ProjectCard = ({
	url,
	github,
	title,
	// text,
	// tech,
	id,
}: ProjectCardProps) => {
	const { t } = useTranslation()

	return (
		<article
			style={{
				background: `
  radial-gradient(circle at 30% -30%, #252225 0%, transparent 48%),
  radial-gradient(circle at 90% 150%, #6b3063 0%, #000 65%)
`,
			}}
			className='flex flex-col items-center border p-4 shadow-sm bg-slate-50  rounded-lg '>
			<h3 className='text-slate-50 text-2xl font-semibold capitalize tracking-wide text-center 3xl:text-3xl'>
				{title}
			</h3>
			{/* <h3 className='bg-gradient-to-r from-red-950 via-gray-900 to-purple-950 inline-block text-transparent bg-clip-text text-2xl font-semibold capitalize tracking-wide text-center 3xl:text-3xl'>
				{title}
			</h3> */}

			<div className='mt-auto'>
				<div className='flex gap-x-6 justify-center mt-6'>
					{url ? (
						<a target='_blank' href={url} className=''>
							<TbWorldWww className='h-8 w-8 3xl:h-12 3xl:w-12 text-slate-50 hover:text-purple-950 duration-300 hover:scale-110' />
						</a>
					) : (
						''
					)}

					<a target='_blank' href={github} className=''>
						<FaGithubSquare className='h-8 w-8 3xl:h-12 3xl:w-12 text-slate-50 hover:text-purple-950 duration-300 hover:scale-110' />
					</a>
				</div>
				<Link
					to={`/projects/${id}`}
					className=' inline-flex items-center justify-center px-8 py-2 text-base 3xl:text-xl leading-6 text-gray-600 font-semibold whitespace-no-wrap bg-white border border-gray-200 rounded-sm shadow-sm hover:bg-gray-50 hover:shadow-md focus:outline-none focus:shadow-none mt-8 duration-300 group '>
					{t('moreBtn')}
					<FaArrowRight className='ml-2 transition-transform duration-500 group-hover:scale-125 group-hover:translate-x-1' />{' '}
				</Link>
			</div>
		</article>
	)
}

export default ProjectCard
