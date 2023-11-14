import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/Main';

import Home from './pages/Home';
//import Account from './pages/Account'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route path="account">
            {/* <Route index element={<Account />} /> */}
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;