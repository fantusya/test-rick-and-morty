import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Pending from './Pending';
import { GlobalStyle } from 'constants/GlobalStyle';

const Home = lazy(() => import('pages/Home'));
const CharacterPage = lazy(() => import('pages/CharacterPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Pending />}>
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;
