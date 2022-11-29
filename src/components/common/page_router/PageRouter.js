import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, PageNotFound} from '../../pages' 

export default function PageRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<PageNotFound />} />
      <Route exact path="/news" element={<PageNotFound />} />
      <Route path="/news/:slug" element={<PageNotFound />} />
      <Route exact path="/team" element={<PageNotFound />} />
      <Route path="/team/:slug" element={<PageNotFound />} />
    </Routes>
  )
}