import React from 'react'
import { useTranslation } from 'react-i18next'

const Education = () => {
	const { t } = useTranslation()
	return (
		<div className='w-[80vw] lg:w-[60vw] mx-auto mt-20 pb-20'>
			<h2 className='text-slate-100 text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-12'>
				{t('educationTitle')}
			</h2>
		</div>
	)
}

export default Education
