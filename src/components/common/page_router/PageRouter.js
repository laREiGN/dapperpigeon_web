import React, {useLayoutEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Home, Blogpost, Blog, Team, PageNotFound} from '../../pages' 

export default function PageRouter() {

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/game" element={<PageNotFound />} /> */}
      <Route exact path="/news" element={<Blog />} />
      <Route path="/news/:slug" element={<Blogpost />} />
      <Route exact path="/team" element={<Team />} />
      <Route path="/contact" element={<PageNotFound />} />
    </Routes>
  )
}