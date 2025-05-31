export const Footer = () => {
    return (
        <footer className="bg-red-300 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025. FavoriteDog! - Todos los derechos reservados</p>
                <p>
                    <a href="/privacy" className="text-gray-700 hover:underline">Aviso de privacidad</a> |
                    <a href="/terms" className="text-gray-700 hover:underline"> Terminos de uso</a>
                </p>
            </div>
        </footer>
    );
}