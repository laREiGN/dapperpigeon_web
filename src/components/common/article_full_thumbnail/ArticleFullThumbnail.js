import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { daysSince } from "../utils";

import './ArticleFullThumbnail.css'

function ArticleFullThumbnail({
  slug,
  title,
  blurb,
  publishedAt,
  imageUrl,
}) {

  return (
    <Link className="article_fullthumbnail" to={"/news/" + slug} key={slug}>
      <div className="article_fullthumbnail-container">
        <div className="article_fullthumbnail-content">
          <div className="article_fullthumbnail-image-container">
            <img className="article_fullthumbnail-image" src={imageUrl} alt="" />
          </div>
          <div className="article_fullthumbnail-text-container">
            <h1 className="article_fullthumbnail-title">{title}</h1>
            <p className="article_fullthumbnail-blurb">{blurb}</p>
          </div>
        </div>
        <p className="article_fullthumbnail-date">{daysSince(new Date(publishedAt))}</p>
      </div>
    </Link>
  )
}

ArticleFullThumbnail.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  publishedAt: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ArticleFullThumbnail