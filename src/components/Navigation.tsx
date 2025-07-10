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
			<SheetContent side='left' className='h-[300px] w-[300px] rounded-full'>
				<SheetTitle>
					<VisuallyHidden>Ukryty tytuł dla czytników ekranu</VisuallyHidden>
				</SheetTitle>

				<div className='flex gap-0.5 justify-center flex-col items-center bg-red-200 '>
					<a
						href='/'
						className={
							hidden === 'calendar'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-pink-500 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						Home
					</a>
					<a
						href='/about'
						className={
							hidden === 'about'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-pink-500 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						O Mnie
					</a>
					<a
						href='/projects'
						className={
							hidden === 'workshops'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-pink-500'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						Projekty
					</a>

					<a
						href='/contact'
						className={
							hidden === 'contact'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-pink-500 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						Kontakt
					</a>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Navigation
