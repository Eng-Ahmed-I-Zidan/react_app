import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Contact from './Contact'
import Error404 from './Error404'
import Home from './Home'
import Blogs from './Blogs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
