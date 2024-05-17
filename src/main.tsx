//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../src/styles/globals.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routes.ts'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react'
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
        path: routes.login.path,
        element: (
          <DefaultLayout>
            <routes.login.element />
          </DefaultLayout>
        )
      },
      {
        path: routes.register.path,
        element: (
          <DefaultLayout>
            <routes.register.element />
          </DefaultLayout>
        )
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
        path: routes.profile.path,
        element: (
          <DefaultLayout>
            <routes.profile.element />
          </DefaultLayout>
        )
      },
      {
        path: routes.resetPassword.path,
        element: (
          <DefaultLayout>
            <routes.resetPassword.element />
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
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  //</React.StrictMode>,
)
