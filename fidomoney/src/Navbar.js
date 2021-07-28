const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a href="/" className="navbar-brand h1 p-3">fidomoney</a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/features">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        <button class="btn btn-outline-success">login</button>
                        <button class="btn btn--light-blue">login</button>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;