import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
// import logo_small from '@/public/images/Miasto-Pracownia_Logo_small.png'
// import Image from 'next/image'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

type NavigationProps = {
	hidden?: string
}

const hiddenLinkClass =
	'text-center my-0.5 py-0.5 text-xl font-semibold text-orange-950  pointer-events-none'

const LinkClass =
	'text-center my-0.5 py-0.5 text-xl font-semibold hover:text-gray-600 duration-200'

const Navigation = ({ hidden }: NavigationProps) => {
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant='outline' size='icon' className='rounded-full'>
					<Menu className='h-6 w-6' />
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='h-full w-full '>
				<SheetTitle>
					<VisuallyHidden>Ukryty tytuł dla czytników ekranu</VisuallyHidden>
				</SheetTitle>

				<div className=' text-gray-800 flex gap-10 justify-center flex-col items-center h-full'>
					<a
						href='/'
						className={
							hidden === 'home' ? `${hiddenLinkClass}` : `${LinkClass}`
						}>
						Home
					</a>

					<a
						href='/about'
						className={
							hidden === 'about' ? `${hiddenLinkClass}` : `${LinkClass}`
						}>
						O Mnie
					</a>
					<a
						href='/projects'
						className={
							hidden === 'projects' ? `${hiddenLinkClass}` : `${LinkClass}`
						}>
						Projekty
					</a>

					<a
						href='/contact'
						className={
							hidden === 'contact' ? `${hiddenLinkClass}` : `${LinkClass}`
						}>
						Kontakt
					</a>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Navigation
