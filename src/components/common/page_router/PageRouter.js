import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, AllPosts, AllMembers, OnePost, OneMember} from '../../pages' 

export default function PageRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog" element={<AllPosts />} />
      <Route path="/blog/:slug" element={<OnePost />} />
      <Route exact path="/team" element={<AllMembers />} />
      <Route path="/team/:slug" element={<OneMember />} />
    </Routes>
  )
}