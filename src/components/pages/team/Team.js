import React, {useEffect, useState} from "react";
import { sanityClient } from "../../config";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import './Team.css'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Team() {

    const [aboutUs, setAboutUs] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "aboutus"] | order(_createdAt desc)[0]{
                    description,
                    teamImage{
                        asset->{
                            _id,
                            url
                        }
                    }
                }`
            )
            .then((data) => setAboutUs(data))
            .catch(console.error);
    }, []);

    return (
        <div className="team_container">
            {aboutUs && 
                <div className="team">
                    <div className="about-us_image">
                        <img src={urlFor(aboutUs.teamImage).url()} alt="" />
                    </div>
                    <div className="about-us_container">
                        <h1>ABOUT US</h1>
                        <h2>Who is Dapper Pigeon?</h2>
                        <div className="about-us_brief">
                            <BlockContent
                                blocks={aboutUs.description}
                                projectId={sanityClient.config().projectId}
                                dataset={sanityClient.config().dataset}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}