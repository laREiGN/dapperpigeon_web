import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './ArticleThumbnail.css'

function ArticleThumbnail({
  slug,
  title,
  blurb,
  imageUrl,
}) {

  return (
    <Link className="recentnews__post" to={"/news/" + slug} key={slug}>
        <div className="recentnews__post-content">
            <img className="recentnews__post-image" src={imageUrl} alt=""/>
            <h1 className="recentnews__post-title">{title}</h1>
            <p className="recentnews__post-blurb">{blurb}</p>
        </div>
    </Link>
  )
}

ArticleThumbnail.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ArticleThumbnail