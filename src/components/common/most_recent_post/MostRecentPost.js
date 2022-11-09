import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { sanityClient } from "../../sanity";

import './MostRecentPost.css';

export default function MostRecentPost() {
    const [postData, setPostData] = useState(null);
  
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post"][0]{
          title,
          slug,
          body,
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

    if (!postData) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Most recent news</h1>
        <p style={{textAlign: 'center'}}>
            Catch up with the most recent update of our studio. To see previous updates, click&nbsp;
            <Link to={"/blog/"}>here!</Link>
        </p>
        <div className="postContainer">
            <div className="postImageContainer">
                <img className="postImage" src={postData.mainImage.asset.url} alt="" />
            </div>
            <h1>
                {postData.title}
            </h1>
            <h2>
                Written by {postData.authorName}
            </h2>
        </div>
      </div>
    );
}