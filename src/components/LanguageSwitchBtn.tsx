import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const LANGUAGE_SELECTOR_ID = 'language-selector'

const languages = [
	{ key: 'pl', name: 'PL ' },
	{ key: 'en', name: 'EN' },
]

interface FlagIconProps {
	countryCode: 'pl' | 'en' | string
}

const SwitchLanguageButton = () => {
	const { i18n } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)

	const selectedLanguage = languages.find(
		language => language.key === i18n.language
	)

	function FlagIcon({ countryCode }: FlagIconProps) {
		if (countryCode === 'en') {
			countryCode = 'gb'
		}

		return <span className={`mr-2 fi fi-${countryCode}`}></span>
	}

	const handleLanguageChange = async (language: {
		key: string
		name: string
	}) => {
		await i18n.changeLanguage(language.key)

		setIsOpen(false)
	}

	useEffect(() => {
		const handleWindowClick = (event: MouseEvent) => {
			const target = (event.target as Element)?.closest('button')
			if (target && target.id === LANGUAGE_SELECTOR_ID) {
				return
			}
			setIsOpen(false)
		}

		window.addEventListener('click', handleWindowClick)
		return () => {
			window.removeEventListener('click', handleWindowClick)
		}
	}, [])

	// if (!selectedLanguage) {
	// 	return null
	// }

	return (
		<>
			<div className='flex items-center z-80'>
				<div className='relative inline-block text-left'>
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='inline-flex items-center justify-center w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-neutral-100 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '
							id={LANGUAGE_SELECTOR_ID}
							aria-haspopup='true'
							aria-expanded={isOpen}>
							<FlagIcon countryCode={selectedLanguage?.key || 'en'} />
							{selectedLanguage?.name}
							<svg
								className='-mr-1 ml-2 h-5 w-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
					{isOpen && (
						<div
							className='origin-top-right absolute right-0 mt-2 rounded-sm shadow-lg bg-neutral-100 ring-1 ring-black ring-opacity-5 '
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='language-selector'>
							<div className='flex flex-col' role='none'>
								{languages.map((language, index) => {
									return (
										<button
											key={language.key}
											onClick={() => handleLanguageChange(language)}
											className={`${
												selectedLanguage?.key === language.key
													? 'bg-gray-200 text-gray-900'
													: 'text-gray-700'
											}  px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${
												index % 2 === 0 ? 'rounded-r' : 'rounded-l'
											}`}
											role='menuitem'>
											<FlagIcon countryCode={language.key} />
											<span className='truncate'>{language.name}</span>
										</button>
									)
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default SwitchLanguageButton
