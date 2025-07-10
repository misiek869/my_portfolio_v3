import React from 'react'
import { useTranslation } from 'react-i18next'

const Education = () => {
	const { t } = useTranslation()
	return (
		<div className='w-[80vw] lg:w-[60vw] mx-auto mt-20 pb-20'>
			<h2 className='text-slate-100 text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-12'>
				{t('educationTitle')}
			</h2>
			<div className='text-slate-100 border p-6 rounded-sm '>
				<div className=''>
					<h2 className='text-2xl md:text-3xl font-semibold mb-4 tracking-wider'>
						Mentoring frontend - JavaScript, React
					</h2>
					<div className='flex gap-10 mb-3'>
						<p className='font-bold text-xl md:text-2xl tracking-wider'>
							Start: <span className='font-normal'>09.2023</span>{' '}
						</p>
						<p className='font-bold text-xl md:text-2xl tracking-wider'>
							Koniec: <span className='font-normal'>03.2024</span>
						</p>
					</div>
					<p className='tracking-wider'>{t('mentoringDescription')}</p>
				</div>
				<div className=''>
					<img src='' alt='' />
				</div>
			</div>
		</div>
	)
}

export default Education
