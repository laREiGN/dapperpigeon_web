import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import { sanityClient } from "../../config";

import { writtenDate } from "../../common/utils/timeFunctions";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import './Blogpost.css';
import ArticleEntry from "../../common/article_entry/ArticleEntry";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Blogpost() {
  const [postData, setPostData] = useState(null);
  const [otherPostData, setOtherPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // RETREIVE FULL POST
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
              }
            },
          body,
       }`,
          { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);

    // RETRIEVE OTHER POSTS FOR SIDEBAR
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(publishedAt desc){
              title,
              slug,
              publishedAt,
              mainImage{
                  asset->{
                      _id,
                      url
                  }
              }
          }`,
        { slug }
      )
      .then((data) => setOtherPostData(data))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="blogpost">
      <div className="blogpost-container">
        <div className="blogpost-main">
          <h1 className="bp-title">{postData.title}</h1>
          <h2 className="bp-date">{writtenDate(new Date(postData.publishedAt))}</h2>
          <img className="bp-header" src={urlFor(postData.mainImage).url()} alt="" />
          <BlockContent
            className={'bp-content'}
            blocks={postData.body}
            projectId={sanityClient.config().projectId}
            dataset={sanityClient.config().dataset}
          />
        </div>

        <div className="blogpost-navbar_container">
          <div className="blogpost-navbar">
            {otherPostData &&
              otherPostData.map((post, index) => (
                <ArticleEntry
                  key={index}
                  slug={post.slug.current}
                  publishedAt={post.publishedAt}
                  title={post.title}
                  imageUrl={urlFor(post.mainImage).size(100).url()}
                />
              ))}
          </div>
        </div>

        <div className="blogpost-button">
          <NavLink className="btn secondary" to={"/news"}>
            <p>SEE MORE NEWS</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
