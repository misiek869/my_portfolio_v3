import { v4 as uuidv4 } from 'uuid'
import {
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiCss3,
	SiAxios,
	SiRedux,
	SiReactrouter,
	SiReactquery,
	SiMongodb,
	SiExpress,
	SiRender,
} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'

export const projects = [
	{
		id: uuidv4(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://miasto-pracownia-foundation-website.vercel.app/',
		github: 'https://github.com/misiek869/Miasto_Pracownia_Foundation_Website',
		adminUrl: 'https://miasto-pracownia-foundation-website.vercel.app/sign-in',
		title: 'Miasto Pracownia Website',
		text: {
			en: 'Development of a Website for a Non-Profit Organization - Fundacja Miasto Pracownia. The website is being created using Next.js. It allows users to learn all about the foundation and sign up for workshops. The site features: an event calendar displaying current workshops, registration functionality for upcoming events (past workshops are automatically deactivated). An admin panel for foundation owners with: full visibility of upcoming/past events, event creation (automatically appears in the calendar), event editing capabilities. Tech implementation: authentication via NextAuth, database integration using Prisma. Live deployment on Vercel, with continuous updates as the project evolves',
			pl: 'Wykonanie strony internetowej dla organizacji pozarzadowej - Fundacja Miasto Pracownia, powstaje przy użyciu NextJs. Strona pozwala użytkownikom dowiedzieć się wszyskiego o fundacji a także zapisać się na warsztaty. Na stonie znajduje się kalendarz z aktualnymi wydarzeniami, na przyszłe wydażenia użytkownik może się zapisać, warsztaty które się odbyły są już nieaktywne.  Projekt pozwala się tażke  zalogować właścicielowi fundacji do panelu administratora. W panelu można zobaczyć wszystkie informacje na tema nadchodzących i przeszłych wydarzeń. Można także utworzyć nowe wydarzenie, które wyświetli się w kalendarzu, można także edytować wydarzenia.  Autoryzacja jest obsługowana przy użyciu next auth, połączenie z bazą danych przy użyciu Prisma. Dostępna jest wersja Live, która jest umieszczona na platformie Vercel. Wraz z rozwojem projektu wersja live będzie aktualizowania.',
		},
		tech: [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss],
		techText: ['Next.js', 'TypeScript', 'React', 'tailwindcss'],
	},
	{
		id: uuidv4(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://search-images-app-misiek869.netlify.app/',
		github: 'https://github.com/misiek869/Search_Images_App',
		title: 'search images app',
		text: {
			en: `It is a simple project that uses the Unsplash API to search for photos. The most important aspect of this project was using the React Query library to cache images, eliminating the need to download them multiple times. It also provides day/night functionality.`,
			pl: `Projekt, który wykorzystuje API Unsplash do wyszukiwania zdjęć. Najważniejszym elementem tego projektu było użycie biblioteki React Query do cache'owania obrazów, co pozwala na uniknięcie wielokrotnego pobierania tych samych zdjęć. Projekt oferuje również funkcjonalność przełączania między trybem dziennym a nocnym.`,
		},
		tech: [SiTypescript, SiReact, SiAxios, SiReactquery, SiCss3],
		techText: ['TypeScript', 'React', 'Axios', 'React Query', 'CSS'],
	},
	{
		id: uuidv4(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://redux-toolkit-basket.netlify.app/',
		github: 'https://github.com/misiek869/Redux-Toolkit-Basket',
		title: 'redux toolkit basket',
		text: {
			en: `This project is based on the Redux Toolkit library, which provides better state management for React. The project utilizes an API created specifically for it. The main functionalities are to add more items to the basket and to remove items from the basket. With every action, the total price changes. It also allows you to clear the entire basket at once. The project is hosted on the Render platform; to access it, you must wait for 30 seconds due to Render's limitations.`,
			pl: 'Ten projekt oparty jest na bibliotece Redux Toolkit, która zapewnia lepsze zarządzanie stanem w React. Projekt korzysta z API stworzonego specjalnie dla niego. Główne funkcjonalności to dodawanie kolejnych przedmiotów do koszyka oraz usuwanie przedmiotów z koszyka. Przy każdej akcji całkowita cena się zmienia. Umożliwia również jednoczesne opróżnienie całego koszyka. Projekt jest hostowany na platformie Render; aby uzyskać do niego dostęp, musisz poczekać 30 sekund z powodu ograniczeń Rendera.',
		},
		tech: [SiTypescript, SiReact, SiAxios, SiRedux, SiTailwindcss],
		techText: ['TypeScript', 'React', 'Axios', 'Reduc', 'Tailwindcss'],
	},
	{
		id: uuidv4(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://search-drinks-app-misiek869.netlify.app/',
		github: 'https://github.com/misiek869/Drink_Search_App',
		title: 'search drinks app',
		text: {
			en: `Main goal of this project was to use the React Router library to handle page routing. This project utilizes TheCocktailDB API to search for cocktails from around the world. Users can search for drinks and see more details about them, such as instructions on how to prepare them. The project also uses the React Query library to cache images, eliminating the need to download them multiple times.`,
			pl: `Głównym celem tego projektu było wykorzystanie biblioteki React Router do obsługi routingu stron. Projekt korzysta z API TheCocktailDB, aby wyszukiwać koktajle z całego świata. Użytkownicy mogą wyszukiwać napoje i zobaczyć więcej szczegółów na ich temat, takich jak instrukcje dotyczące ich przygotowania. Projekt wykorzystuje również bibliotekę React Query do cache'owania obrazów, eliminując potrzebę ich wielokrotnego pobierania.`,
		},
		tech: [SiCss3, SiTypescript, SiReact, SiAxios, SiReactquery, SiReactrouter],
		techText: ['TypeScript', 'React', 'Axios', 'React Query', 'React Router'],
	},
	{
		id: uuidv4(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		github: 'https://github.com/misiek869/Redux-Toolkit-API',
		title: 'redux toolkit basket API',
		text: {
			en: 'This API was created specifically for the Redux Toolkit Basket project. Data is stored in a MongoDB database and hosted on the Render platform.',
			pl: 'To API zostało stworzone specjalnie dla projektu Redux Toolkit Basket. Dane są przechowywane w bazie danych MongoDB i hostowane na platformie Render.',
		},
		tech: [SiJavascript, FaNode, SiMongodb, SiExpress, SiRender],
		techText: ['JavaScript', 'Node', 'MongoDb', 'Express', 'Render'],
	},
	{
		id: uuidv4(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		github: 'https://github.com/misiek869/Redux-Toolkit-API',
		title: 'E-Commerce API',
		text: {
			en: 'This API has been created specifically for e-commerce projects. It allows for user login, including admin access. It is also possible to add, delete, and edit products. The data is stored in a MongoDB database and hosted on the Render platform.',
			pl: 'To API zostało stworzone specjalnie dla projektów sklepów intenetowych. API pozwala na logowanie użytkowników, w tym także jako admin. Możliwe jest także dodawanie, usuwanie i edycja produktów. Dane są przechowywane w bazie danych MongoDB i hostowane na platformie Render.',
		},
		tech: [SiJavascript, FaNode, SiMongodb, SiExpress, SiRender],
		techText: ['JavaScript', 'Node', 'MongoDb', 'Express', 'Render'],
	},
]
