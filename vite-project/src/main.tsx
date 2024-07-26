import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import Layout from './ui/Layout.tsx';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Contact from './pages/Contact.tsx';
import Solutions from './pages/Solutions.tsx';
import AboutUs from './pages/AboutUs.tsx';

const RouterLayout =()=>{
  return(
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Solutions />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
