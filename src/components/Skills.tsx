import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import {
	RiReactjsFill,
	RiNextjsFill,
	RiHtml5Fill,
	RiCss3Fill,
	RiTailwindCssFill,
	RiNodejsFill,
} from 'react-icons/ri'
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

type Skill = {
	icon: React.ReactNode
	name: string
}

const skills: Skill[] = [
	{ icon: <BiLogoTypescript />, name: 'JavaScript' },
	{ icon: <BiLogoJavascript />, name: 'TypeScript' },
	{ icon: <RiReactjsFill />, name: 'React.js' },
	{ icon: <RiNextjsFill />, name: 'Next.js' },
	{ icon: <RiHtml5Fill />, name: 'HTML 5' },
	{ icon: <RiCss3Fill />, name: 'CSS 3' },
	{ icon: <RiTailwindCssFill />, name: 'Tailwindcss' },
	{ icon: <RiNodejsFill />, name: 'Node.js' },
]

const Skills = () => {
	const { t } = useTranslation()
	return (
		<div className='w-[80vw] lg:w-[60vw] mx-auto mt-20 pb-20'>
			<h2 className='text-slate-100 text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-12'>
				{t('skillsTitle')}
			</h2>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-12 items-center place-items-center w-[80%] lg:w-[60%] mx-auto'>
				{skills.map((item, index) => {
					return (
						<TooltipProvider key={index}>
							<Tooltip>
								<TooltipTrigger className='w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-slate-100 group'>
									<div className='text-3xl md:text-5xl group-hover:text-gray-700 transition-all duration-300'>
										{item.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent className='bg-slate-100 '>
									<p className='text-lg text-gray-800'>{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
