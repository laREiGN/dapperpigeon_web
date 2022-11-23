import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { sanityClient } from "../../config";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OneMember() {
  const [memberData, setMemberData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          name,
          slug,
          image{
            asset->{
              _id,
              url
             }
           },
         bio
       }`,
        { slug }
      )
      .then((data) => setMemberData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!memberData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{memberData.name}</h2>
      </div>
      <img src={urlFor(memberData.image).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={memberData.bio}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </div>
    </div>
  );
}
