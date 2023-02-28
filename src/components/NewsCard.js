//lager artikkelkort som tar impot ptops fra API
//Bruker disse til å mappe igjennom og få frem bilder, tittel osv...

export default function NewsCard({img, title, ingress, url}){
  return(
    <article className="article-card">
      <img src={img} alt={title}></img>
      <h3>{title}</h3>
      <p>{ingress}</p>
      <a href={url} >Les mer</a>
    </article>
  )
}