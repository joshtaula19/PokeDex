import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<RouterProvider router={router} />)
})
