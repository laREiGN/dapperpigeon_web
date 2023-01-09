import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../../config";
import ArticleThumbnail from "../article_thumbnail";

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
                        <ArticleThumbnail
                            isFullThumbnail={false}
                            key={index}
                            slug={post.slug.current}
                            title={post.title}
                            blurb={post.blurb}
                            imageUrl={post.mainImage.asset.url}
                        />
                    ))}
            </div>
            <Link className="btn secondary" to={"/news"}>SEE MORE NEWS</Link>
        </div>
    )
}