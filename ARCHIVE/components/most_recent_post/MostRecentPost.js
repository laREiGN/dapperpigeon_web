import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { sanityClient } from "../../../src/components/sanity";
import { useIsOverflow, formatDate } from "../../../src/components/common";
import BlockContent from "@sanity/block-content-to-react";

import './MostRecentPost.css';

export default function MostRecentPost() {
    const [postData, setPostData] = useState(null);
  
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post"] | order(_createdAt desc) [0] {
          title,
          slug,
          body,
          publishedAt,
          mainImage{
            asset->{
            _id,
            url
          },
        },
        "authorName": author->name,
        "authorImage": author->image,
        "authorSlug": author->slug
      }`
        )
        .then((data) => setPostData(data))
        .catch(console.error);
    }, []);

    const ref = React.useRef();

    const isOverflow = useIsOverflow(ref, (isOverflowFromCallback) => {
      const isOverflowChecked = isOverflowFromCallback;
      console.log("is checked? : " + isOverflowChecked);
    });
    console.log("is overflow? : " + isOverflow);

    if (!postData) return <div>Loading...</div>;

    return (
      <div>
        <h1>Most recent news</h1>
        <p style={{textAlign: 'center'}}>
            Catch up with the most recent update of our studio. To see previous updates, click&nbsp;
            <Link to={"/blog/"}>here!</Link>
        </p>
        <div className="fullPostContainer">
            <div className="postImageContainer">
                <img className="postImage" src={postData.mainImage.asset.url} alt="" />
            </div>
            <h1 className="postTitle">
                {postData.title}
            </h1>
            <h2 className="postAuthor">
                Written by {postData.authorName} on {formatDate(new Date(postData.publishedAt))}
            </h2>
            <div className="expandable post" ref={ref}>
              <BlockContent
                blocks={postData.body}
                projectId={sanityClient.config().projectId}
                dataset={sanityClient.config().dataset}
              />
            </div>
            {isOverflow && 
              <div>
                <h1>SHOW MORE</h1>
              </div>
            }
        </div>
      </div>
    );
}