import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import { AnimatePresence } from 'framer-motion'

function App() {
	const location = useLocation()

	return (
		<AnimatePresence mode={'wait'}>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Layout />}>
					<Route index element={<Hero />} />
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />} />
					<Route path='projects/:projectId' element={<ProjectDetails />} />
					<Route path='contact' element={<Contact />} />
					<Route path='projects/:projectId' element={<ProjectDetails />} />
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default App
