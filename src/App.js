import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import React, {Suspense} from 'react';

const Home =React.lazy(() => import('./pages/Home'));

function App() {
  return (
 <div>
       <BrowserRouter>
      <Suspense fallback={<p>please wait. page is loading</p>}>
      <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />
       </Routes>
     </Suspense>
      </BrowserRouter>
 </div>
  );
}

export default App;
