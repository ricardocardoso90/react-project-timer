import { useRoutes, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { History } from '../pages/History';
import { DefaultLayoult } from '../layouts/DefaultLayout';

export function MainRoutes() {
  return (
    // useRoutes([
    //   { path: '/', element: <Home /> },
    //   { path: '/history', element: <History /> }
    // ])
    <Routes>
      <Route path='/' element={<DefaultLayoult />}>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  )
};