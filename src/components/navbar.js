import { Link } from "react-router-dom";
export function Nav() {
    return (
        <nav className="navbar bg-dark">
            <Link to="/" className="navbar-brand fs-1 text-light">Logo</Link>
            <div className="nav">
                <Link to="/" className="nav-link fs-4 text-light">Home</Link>
                <Link to="/About" className="nav-link fs-4 text-light">About</Link>
                <Link to="/projects" className="nav-link fs-4 text-light">Projects</Link>
                <Link to="/Contact" className="nav-link fs-4 text-light">Contact</Link>
            </div>
        </nav>
    );
}