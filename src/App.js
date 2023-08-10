import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {Suspense} from 'react';

const Home =React.lazy(() => import('./pages/Home'));
const Login =React.lazy(() => import('./pages/Login'));

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
