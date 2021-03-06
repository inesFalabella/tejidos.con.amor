export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
    <a className="navbar-brand" href="#">Tejidos con Amor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Chalecos de 0-2 meses</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Chalecos de 3-6 meses</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled">Contacto</a>
        </li>
    </ul>
    </div>
</div>
</nav>
    )
}