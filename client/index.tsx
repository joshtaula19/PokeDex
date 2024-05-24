import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'


import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<RouterProvider router={router} />)
})
