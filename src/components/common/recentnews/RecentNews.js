import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../../config";
import imageUrlBuilder from "@sanity/image-url";
import ArticleThumbnail from "../article_thumbnail";

import './RecentNews.css'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function RecentNews() {
    const [recentNews, setRecentNews] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"] | order(publishedAt desc)[0...3]{
                    title,
                    slug,
                    blurb,
                    mainImage,
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
                            key={index}
                            slug={post.slug.current}
                            title={post.title}
                            blurb={post.blurb}
                            imageUrl={urlFor(post.mainImage).size(200).url()}
                        />
                    ))}
            </div>
            <Link className="btn secondary" to={"/news"}>SEE MORE NEWS</Link>
        </div>
    )
}