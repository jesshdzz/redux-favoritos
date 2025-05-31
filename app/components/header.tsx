import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Inicio</Link></li>
                            <li><Link href={"/random"}>Random</Link></li>
                            <li><Link href={"/categorias"}>Cateogorias</Link></li>
                            <li><Link href={"/favoritos"}>Favoritos</Link></li>

                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl btn-error">FavoriteDog!</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li><Link className="btn btn-ghost btn-error" href={"/"}>Inicio</Link></li>
                        <li><Link className="btn btn-ghost btn-error" href={"/random"}>Random</Link></li>
                        <li><Link className="btn btn-ghost btn-error" href={"/categorias"}>Categorias</Link></li>
                        <li><Link className="btn btn-ghost btn-error" href={"/favoritos"}>Favoritos</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={"/"} className="btn btn-error">Iniciar sesion</Link>
                </div>
            </div>
            {/* <div className="container mx-auto text-center">
                <h1 className="text-2xl font-bold">Favorite Dogs</h1>
                <nav>
                    <ul className="flex justify-around">
                        <li><a href="/" className="text-white hover:underline">Inicio</a></li>
                        <li><a href="/dogs" className="text-white hover:underline">Perros</a></li>
                        <li><a href="/categoria" className="text-white hover:underline">Categorias</a></li>
                        <li><a href="/random" className="text-white hover:underline">random</a></li>
                    </ul>
                </nav>
            </div> */}
        </header>
    )
}