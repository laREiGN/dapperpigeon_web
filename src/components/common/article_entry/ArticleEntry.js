import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { daysSince } from "../utils";
import './ArticleEntry.css'

function ArticleEntry({
  slug,
  publishedAt,
  title,
  imageUrl,
}) {

  return (
    <Link className="article_entry" to={"/news/" + slug} key={slug}>
      <div className="article_entry-main">
        <div className="article_entry-content">
          <img className="article_entry-image" src={imageUrl} alt="" />
          <p className="article_entry-title">{title}</p>
        </div>
        <p className="article_entry-date">{daysSince(new Date(publishedAt))}</p>
      </div>
    </Link>
  )
}

ArticleEntry.propTypes = {
  slug: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

export default ArticleEntry