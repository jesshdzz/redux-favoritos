import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="https://images.dog.ceo/breeds/eskimo/n02109961_1328.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Perro"
          width={500}
          height={500}
        />
        <div>
          <h1 className="text-5xl font-bold">Hola!</h1>
          <p className="py-6">
            <span className='font-bold'>FavoriteDog!</span> es una aplicación que te permite guardar las fotos de tus perros favoritos.
            Puedes navegar por una amplia variedad de imágenes de perros y seleccionar tus favoritas para guardarlas en tu lista personal.

          </p>
          <button className="btn btn-error">
            <Link href={"random"} className="text-white">
              Comenzar!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
