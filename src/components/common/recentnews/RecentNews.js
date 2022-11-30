import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../../config";

import './RecentNews.css'

export default function RecentNews() {
    const [recentNews, setRecentNews] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"] | order(publishedAt desc)[0...3]{
                    title,
                    slug,
                    blurb,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    }
                }`
            )
            .then((data) => setRecentNews(data))
            .catch(console.error);
    }, []);

    return (
        <div className="recentnews-container">
            <h1 className="recentnews-title">NEWS</h1>
            <div className="recentnews">
                {recentNews &&
                    recentNews.map((post, index) => (
                        <Link className="recentnews__post" to={"/news/" + post.slug.current} key={post.slug.current}>
                            <div className="recentnews__post-content" key={index}>
                                <img className="recentnews__post-image" src={post.mainImage.asset.url} alt=""/>
                                <h1 className="recentnews__post-title">{post.title}</h1>
                                <p className="recentnews__post-blurb">{post.blurb}</p>
                            </div>
                        </Link>
                    ))}
            </div>
            <Link className="btn" to={"/news"}>SEE MORE NEWS</Link>
        </div>
    )
}