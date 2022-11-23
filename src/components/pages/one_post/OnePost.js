import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { sanityClient } from "../../config";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "authorName": author->name,
        "authorImage": author->image,
        "authorSlug": author->slug
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <Link to={"/team/" + postData.authorSlug.current}>
          <div>
            <img
              src={urlFor(postData.authorImage).width(100).url()}
              alt="Author is Dapper Pigeon"
            />
            <h4>{postData.authorName}</h4>
          </div>
        </Link>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </div>
    </div>
  );
}
