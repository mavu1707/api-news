//Tar imot props (children)

export default function Layout({children}){
  return (
    <div className="container">
      <header>
        <h1>Nyheter.no</h1>
        <nav>
          <li>Om oss</li>
          <li>Siste nytt</li>
          <li>Tips oss</li>
        </nav>
      </header>

      {/*
        Tar impot props (children)
      */}
      <main>
        {children}
      </main>

      <footer>
        <span>Ikoner</span>
      </footer>
    </div>
  )
}