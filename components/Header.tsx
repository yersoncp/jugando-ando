import Link from "next/link"

const Header = () => {
  return <>
    <header className="header">
      <div className="container">
        <Link href="/">
          <a title="Ir a home">
            <h1>Jugando-ando</h1>
          </a>
        </Link>
      </div>
    </header>
  </>
}
export default Header