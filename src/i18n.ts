import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				about_01: `Hi! My name is Michał, and I'm learning frontend development with the goal of entering to the world of IT.`,
				about_02: `By day, I run my own car detailing business, but for quite some time now, coding has been drawing more and more of my attention – to the point where I decided to take it seriously and fully commit to this new path.`,
				about_03: `I don’t yet have commercial experience or a computer science degree, but I do have something else: determination, consistency, and practical skills that I improve every day. I’ve been learning on my own, and for six months I took part in a mentoring program through DevMentor, where I worked closely with a professional developer to sharpen my skills.`,
				about_04: `Right now, I feel most confident working with React, Next.js, and Tailwind CSS. I’m also comfortable with TypeScript, JavaScript, CSS, and have a basic understanding of Node.js.
I build both frontend and full-stack projects – you can check out a few of them below.`,
				about_05: `I’m currently looking for my first job as a frontend developer. I want to learn from experienced developers, grow by working on real products, and bring fresh energy, reliability, and a strong work ethic to the team.`,
				about_06: `If you’re looking for someone who’s genuinely committed to entering tech and isn’t afraid of hard work – let’s connect.`,
				aboutTitle: 'About Me',
				techTitle: 'tech stack',
				projectsTitle: 'my projects',
				projectTech: 'Used technologies',
				heroTitle: `I'm Michael`,
				heroSubtitle: 'Front-End Developer from Poland',
				heroBtn: 'my projects',
				seeMoreBtn: 'show more',
				seeLessBtn: 'show less',
				moreBtn: 'More',
				contactTitle: 'contact me',
				goBackBtn: 'Go Back',
				notFoundProject: `Can't find project`,
				skillsTitle: 'My Skills',
				educationTitle: 'Education',
				mentoringDescription:
					'The mentoring covered topics ranging from the basics to advanced concepts of HTML, CSS, JavaScript, React, Redux, and React Router. Under the guidance of an experienced developer-mentor, I learned how to build responsive websites and web applications. Additionally, I mastered the use of Git and GitHub to manage my projects. Through the mentoring program, I also gained knowledge of best programming practices and tools for testing and debugging code. Thanks to this course, I now feel confident in creating modern and functional web applications.',
				mentoringOrganizer: 'Organizer',
				projectsDescription: `Here is a collection of projects showcasing my skills. Click on any project to explore details about the technologies used and the skills I gained during development. You can also go directly to the live version or the GitHub repository. I'm constantly learning and working on new projects, so more will be added here regularly.`,
			},
		},
		pl: {
			translation: {
				about_01:
					'Cześć! Mam na imię Michał i uczę się frontend developmentu z myślą o wejściu do świata IT.',
				about_02:
					'Na co dzień prowadzę własną firmę zajmującą się detailingiem samochodowym, ale od dłuższego czasu to kodowanie coraz mocniej przyciąga moją uwagę – aż w końcu stało się czymś, w co postanowiłem wejść na poważnie.',
				about_03:
					'Nie mam jeszcze komercyjnego doświadczenia ani dyplomu z informatyki, ale mam coś innego: determinację, konsekwencję i konkretne umiejętności, które rozwijam każdego dnia. Uczyłem się samodzielnie, a przez pół roku uczestniczyłem w mentoringu w ramach programu DevMentor, gdzie pracowałem z doświadczonym programistą nad rozwojem praktycznych umiejętności.',
				about_04:
					'Dzisiaj najlepiej czuję się w React, Next.js i Tailwind CSS. Znam również dobrze TypeScript, JavaScript, CSS oraz podstawy Node.js. Buduję projekty – zarówno frontendowe, jak i full-stackowe – kilka z nich możesz zobaczyć poniżej.',
				about_05:
					'Szukam swojej pierwszej pracy jako frontend developer. Chcę uczyć się od bardziej doświadczonych programistów, rozwijać się w realnych produktach i wnosić do zespołu świeżą energię, odpowiedzialność i gotowość do działania.',
				about_06:
					'Jeśli szukasz kogoś, kto na serio chce wejść w IT i nie boi się pracy – odezwij się.',
				aboutTitle: 'Kim Jestem?',
				techTitle: 'umiejętności',
				projectsTitle: 'moje projekty',
				projectTech: 'Użyte technologie',
				heroTitle: `Jestem Michał`,
				heroSubtitle: 'Front-End Developer',
				heroBtn: 'moje projekty',
				moreBtn: 'Więcej',
				contactTitle: 'kontakt',
				goBackBtn: 'Powrót do projektów',
				notFoundProject: 'Nie ma takiego projektu',
				skillsTitle: 'Moje Umiejętności',
				educationTitle: 'Edukacja',
				mentoringDescription:
					'Mentoring obejmował tematy od podstaw do zaawansowanych koncepcji HTML, CSS, JavaScript, React, Redux, React Router. Pod okiem doświadczonego mentora-programisty nauczyłem się, jak tworzyć responsywne strony internetowe i aplikacje internetowe. Dodatkowo opanowałem korzystanie z Gita i GitHuba do zarządzania moimi projektami. Dzięki mentoringowi zdobyłem również wiedzę na temat najlepszych praktyk programistycznych i narzędzi do testowania i debugowania kodu. Dzięki temu kursowi czuję się pewnie w tworzeniu nowoczesnych i funkcjonalnych aplikacji internetowych. ',
				mentoringOrganizer: 'Organizator',
				projectsDescription:
					'Oto kolekcja projektów pokazujących moje umiejętności. Kliknij na dowolny projekt, aby zgłębić szczegóły dotyczące wykorzystanych	technologii oraz umiejętności nabytych w trakcie ich realizacji.	Możesz też od razu przejść do wersji live lub repozytorium na GitHub. Cały czas się uczę i pracuję nad kolejnymi projektami, na bieżąco będą się tutaj pojawiać...',
			},
		},
	},
	lng: 'pl',
	fallbackLng: 'pl',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
