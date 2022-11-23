import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { sanityClient } from "../../config";

export default function AllMembers() {
  const [allMembersdata, setAllMembers] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        slug,
        image{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllMembers(data))
      .catch(console.error);
  }, []);

  return (  
    <div>
      <h2>Dapper Pigeon</h2>
      <div>
        {allMembersdata &&
          allMembersdata.map((member, index) => (
            <Link to={"/team/" + member.slug.current} key={member.slug.current}>
              <img src={member.image.asset.url} alt="" />
              <span key={index}>
                <span>
                  <h2>{member.name}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}