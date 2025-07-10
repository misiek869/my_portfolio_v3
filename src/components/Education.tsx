import React from 'react'
import { useTranslation } from 'react-i18next'

const Education = () => {
	const { t } = useTranslation()
	return (
		<div className='w-[80vw] lg:w-[60vw] mx-auto mt-20 pb-20'>
			<h2 className='text-slate-100 text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-12'>
				{t('educationTitle')}
			</h2>
			<div className='w-[80%] lg:w-[60%] text-slate-100 border p-6 rounded-lg'>
				<h2>Mentoring frontend - JavaScript, React</h2>
				<div className='flex gap-10'>
					<p className='font-bold'>
						Start: <span className='font-normal'>09.2023</span>{' '}
					</p>
					<p className='font-bold'>
						Koniec: <span className='font-normal'>03.2024</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Education
