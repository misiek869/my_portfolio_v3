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
	disabled?: boolean
	hidden?: string
}

const Navigation = ({ disabled, hidden }: NavigationProps) => {
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
							hidden === 'home'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-orange-950  pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}>
						Home
					</a>
          
					<a
						href='/about'
						className={
							hidden === 'about'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold line-through pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}>
						O Mnie
					</a>
					<a
						href='/projects'
						className={
							hidden === 'workshops'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-pink-500'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}>
						Projekty
					</a>

					<a
						href='/contact'
						className={
							hidden === 'contact'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-pink-500 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}>
						Kontakt
					</a>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Navigation
