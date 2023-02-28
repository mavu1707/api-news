//Her henter vi inn API og bruker Key
//6f766ef872374052a5bbf58aea921cfb

import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import CatNav from "./CatNav"

export default function Main(){
  //Lager states
  const [news, setNews] = useState([])
  const [filter, setFilter] = useState("All")
  const [resultat, setResultat] = useState([])
  const navCat = [...new Set(news.map((e) => e.source.name))]

  //Forhindrer krasj av nettsiden
  const getNews = async() => {
    const response = await fetch('https://newsapi.org/v2/everything?q=apple&pageSize=21&apiKey=6f766ef872374052a5bbf58aea921cfb')

    //Lager det om til json element
    const data = await response.json()

    //Henter ut articles
    setNews(data.articles);

    setResultat(news.filter(items => items.source.name === filter))
  }

  console.log(resultat);

  //console.log(navCat);

  //Consol logger ut array med artikklene
  //console.log(news);

  //Laster inn getNews etter at koden har kjørt igjennom
  useEffect(() => {
    getNews()
  }, [filter])

  const handleFilter = (event) => {
    console.log(event.target.innerHTML)
    setFilter(event.target.innerHTML)
  }

  const handleReset = () =>{
    setFilter("All")
  }

  return(
    <>
      <h2>Her kommer nyheter</h2>
      <CatNav navCat={navCat} handleFilter={handleFilter} handleReset={handleReset}/>
      {/* 
        Mapper igjennom elementet news, får vist frem bilder tittler osv
      */}
      {resultat.length <= 0 ? news?.map((item, index) => (
        <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} url={item.url}/>
      )) : resultat.map((item, index) => (
        <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} url={item.url}/>
      ))}
    </>
  )
}