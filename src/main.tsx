import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../src/styles/globals.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routes.ts'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.tsx'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <DefaultLayout>
            <routes.home.element />
          </DefaultLayout>
        ),
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
