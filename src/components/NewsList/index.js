import React,{useState,useEffect} from 'react'
import './index.scss'
import axios from 'axios'
import NewsItem from '../NewsItem'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () =>{
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-06-13&sortBy=publishedAt&apiKey=f1328fbb7a1b45dd87c12f155e52adb6&page=1&pageSize=1&language=es') 
            console.log(response)
            setArticles(response.data.articles)
    }
    getArticles()
        },[])
        // DateTime.now().toFormat('MM-dd-yyyy')
  return (

    <div>
        {articles.map(article =>{
            return(
                
                <NewsItem
                    title={article.title}
                    urlToImage={article.urlToImage}
                    url={article.url}
                    name={article.name}
                    description={article.description}
                    content={article.content}
                    author={article.author}
                    publishedAt={article.publishedAt}
                    
                 />
            )
        })}
    </div>
  )
}

export default NewsList