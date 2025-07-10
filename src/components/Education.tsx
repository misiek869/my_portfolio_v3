import { useTranslation } from 'react-i18next'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import certificateImg from '../assets/images/devmentor-certificate.jpg'

const Education = () => {
	const { t } = useTranslation()
	return (
		<div className='w-[80vw] lg:w-[60vw] mx-auto mt-20 pb-20'>
			<h2 className='text-slate-100 text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl mb-12'>
				{t('educationTitle')}
			</h2>
			<div className='text-slate-100 border p-6 rounded-sm gap-6 flex flex-col 2xl:flex-row'>
				<div className='w-full 2xl:w-[80%]'>
					<h2 className='text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 tracking-wider'>
						Mentoring frontend - JavaScript, React
					</h2>
					<div className='flex gap-10 mb-3'>
						<p className='font-bold text-lg md:text-xl 2xl:text-2xl tracking-wider'>
							Start: <span className='font-normal'>09.2023</span>{' '}
						</p>
						<p className='font-bold text-lg md:text-xl 2xl:text-2xl tracking-wider'>
							Koniec: <span className='font-normal'>03.2024</span>
						</p>
					</div>
					<h3 className='mb-3 font-bold text-lg md:text-xl 2xl:text-2xl tracking-wider'>
						Organizator: <span className='font-normal'>DevMentor.pl</span>
					</h3>
					<p className='tracking-wider text-justify text-md md:text-lg lg:text-xl leading-loose'>
						{t('mentoringDescription')}
					</p>
				</div>
				<div className='mx-auto my-auto'>
					<Zoom>
						<img src={certificateImg} alt='' className='h-[400px]' />
					</Zoom>
				</div>
			</div>
		</div>
	)
}

export default Education
