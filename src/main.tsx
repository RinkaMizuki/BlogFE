//import React from 'react'
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
      },
      {
        path: routes.newsletter.path,
        element: (
          <DefaultLayout>
            <routes.newsletter.element />
          </DefaultLayout>
        )
      },
      {
        path: routes.about.path,
        element: (
          <DefaultLayout>
            <routes.about.element />
          </DefaultLayout>
        )
      },
      {
        path: routes.detail.path,
        element: (
          <DefaultLayout>
            <routes.detail.element />
          </DefaultLayout>
        )
      },
      //notfound router
      {
        path: routes.notfound.path,
        element: <routes.notfound.element />
      }
    ]
  }
]);

root.render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
)
