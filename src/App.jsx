import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useData from './hooks/useData'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { data, loading, error } = useData()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <div className="mx-auto mb-6 h-12 w-12 rounded-full border-4 border-cream-200 border-t-accent-500 animate-spin" />
          <p className="font-display text-ink-500">Loading…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 p-6">
        <div className="rounded-2xl bg-cream-100 p-8 max-w-md text-center shadow-soft">
          <p className="font-display text-accent-600 mb-2">Something went wrong</p>
          <p className="text-ink-600">
            Could not load <code className="text-ink-900">data.json</code>. Make sure it is
            present in the <code className="text-ink-900">public/</code> folder.
          </p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout data={data}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/skills" element={<Skills data={data} />} />
          <Route path="/experience" element={<Experience data={data} />} />
          <Route path="/projects" element={<Projects data={data} />} />
          <Route path="/projects/:id" element={<ProjectDetail data={data} />} />
          <Route path="/achievements" element={<Achievements data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
          <Route path="*" element={<NotFound data={data} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
