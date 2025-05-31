'use client';

import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { eliminarFavorito } from "../store/favoritosSlice";
import { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";

export default function FavoritosPage() {
    const [esMontado, setEsMontado] = useState(false);
    const dispatch = useAppDispatch();
    const favoritos = useAppSelector((state) => state.favoritos);

    useEffect(() => {
        setEsMontado(true);
    }, []);

    if (!esMontado) {
        return (
            <div className="container mx-auto p-4 py-10">
                <div className="flex items-center justify-center mb-4 gap-10">
                    <span className="loading loading-spinner text-error"></span>
                </div>
            </div>
        );
    }


    if (favoritos.length === 0) {
        return (
            <div className="container mx-auto p-4 py-10">
                <div className="flex items-center justify-center mb-4 gap-10">
                    <h1 className="text-2xl font-bold">Favoritos</h1>
                </div>
                <div className="divider"></div>
                <p className="text-center text-gray-500">No tienes favoritos</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 py-10">
            <div className="flex items-center justify-center mb-4 gap-10">
                <h1 className="text-2xl font-bold">Favoritos</h1>
            </div>
            <div className="divider"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                {favoritos.map((perro) => (
                    <div key={perro.message} className="w-auto shadow-xl">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className="w-full h-64 flex items-center justify-center">
                                <Image
                                    src={perro.message}
                                    alt="Perro"
                                    width={200}
                                    height={200}
                                    className="rounded-lg shadow-lg w-full h-full object-cover max-h-[250px] max-w-[250px] mx-auto"
                                />
                            </div>
                            <div className="mb-5">
                                <button onClick={() => { dispatch(eliminarFavorito(perro.message)) }}>
                                    <IoMdHeart className="text-red-500 text-4xl" />
                                </button>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    );
}