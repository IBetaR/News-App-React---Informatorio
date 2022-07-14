import './index.scss'
import React from 'react'

const NewsItem = ({title, description, content, author, publishedAt, url,name ,urlToImage}) => {
  return (
    <div className='news-app'>
      <div className='news-item'>
        <img className='news-img' src={urlToImage} alt={urlToImage} />
        <h3><a href={url}>{title} - {name}</a></h3>
        <p>{description}</p>
        <p>{content}</p>
        <p>Autor: {author}</p>
        <p>Publicado: {publishedAt}</p>
      </div>
    </div>
  )
}

export default NewsItem