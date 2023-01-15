import React, { useEffect, useState } from "react";
import { sanityClient } from "../../config";
import imageUrlBuilder from "@sanity/image-url";
import ArticleFullThumbnail from "../../common/article_full_thumbnail";

import './Blog.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Blog() {

  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
                title,
                slug,
                blurb,
                publishedAt,
                mainImage,
            }`
      )
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">NEWS</h1>
      <div className="blog">
        {blogPosts &&
          blogPosts.map((post, index) => (
            <ArticleFullThumbnail
              key={index}
              slug={post.slug.current}
              title={post.title}
              blurb={post.blurb}
              publishedAt={post.publishedAt}
              imageUrl={urlFor(post.mainImage).size(300).url()}
            />
          ))}
      </div>
    </div>
  )
}