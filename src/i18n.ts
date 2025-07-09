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
				projectTech: 'Technologies',
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
				aboutTitle: 'O Mnie',
				techTitle: 'umiejętności',
				projectsTitle: 'moje projekty',
				projectTech: 'Technologie',
				heroTitle: `Jestem Michał`,
				heroSubtitle: 'Front-End Developer',
				heroBtn: 'moje projekty',
				moreBtn: 'Więcej',
				contactTitle: 'kontakt',
				goBackBtn: 'Powrót do strony głównej',
				notFoundProject: 'Nie ma takiego projektu',
				skillsTitle: 'Moje Umiejętności',
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
