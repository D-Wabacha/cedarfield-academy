import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'

// Inner pages are split into their own chunks.
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admissions = lazy(() => import('./pages/Admissions'))
const SchoolLife = lazy(() => import('./pages/SchoolLife'))
const News = lazy(() => import('./pages/News'))
const NewsArticle = lazy(() => import('./pages/NewsArticle'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const page = (el: React.ReactNode) => <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>{el}</Suspense>

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: page(<About />) },
      { path: '/academics', element: page(<Academics />) },
      { path: '/admissions', element: page(<Admissions />) },
      { path: '/school-life', element: page(<SchoolLife />) },
      { path: '/news', element: page(<News />) },
      { path: '/news/:slug', element: page(<NewsArticle />) },
      { path: '/contact', element: page(<Contact />) },
      { path: '*', element: page(<NotFound />) },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
