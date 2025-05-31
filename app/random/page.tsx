'use client';

import { toggleFavorito } from "@/app/store/favoritosSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Perro } from "../interfaces/Perro";
import { Toast } from "../components/Toast";
import Image from "next/image";

const getPerro = async (): Promise<Perro> => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random', {
            next: {
                revalidate: 60,
            },
        });
        if (!res.ok) {
            throw new Error('Error en la peticion');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error("Error al obtener los perros", { cause: error });
    }
}

export default function RandomPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [perro, setPerro] = useState<Perro | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [toast, setToast] = useState({
        message: "",
        visible: false
    });

    const dispatch = useAppDispatch();
    const favoritos = useAppSelector((state) => state.favoritos);
    const esFavorito = favoritos.some((f: Perro) => f.message === perro?.message);

    const fetchPerros = async () => {
        try {
            const data = await getPerro();
            setPerro(data);
            setLoading(false);
        } catch (error) {
            setError("Error al obtener la imagen");
            setLoading(false);
        }
    }

    const mostrarToast = () => {
        setToast({
            message: (esFavorito ? "Eliminado de favoritos!" : "Agregado a favoritos!"),
            visible: true
        })
        setLoading(true);
        const timer = setTimeout(() => {
            fetchPerros();
        }, 2000);

        return () => clearTimeout(timer);
    }

    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => {
                setToast({
                    ...toast,
                    visible: false
                });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [toast.visible]);

    useEffect(() => {
        fetchPerros();
    }, []);


    return (
        <div className="container mx-auto text-center my-10">
            <h1 className="text-2xl font-bold">Perro Random</h1>

            {loading && (
                <div className="container mx-auto text-center my-10">
                    <span className="loading loading-dots loading-xl"></span>
                </div>
            )}

            {error && (
                <div className="alert alert-error shadow-lg">
                    <div>
                        <span>{error}</span>
                    </div>
                </div>
            )}

            <Toast mensaje={toast.message} visible={toast.visible} />

            {perro && !loading && (
                <div className="container mx-auto text-center my-10">
                    <Image
                        src={perro.message}
                        alt="Perro"
                        width={500}
                        height={500}
                        priority
                        className="mx-auto my-5 rounded-lg shadow-lg max-h-[500]"
                    />
                    <div className="flex items-center justify-center gap-5 my-5">
                        <button onClick={() => { dispatch(toggleFavorito(perro)); mostrarToast(); }}>
                            <div className="flex justify-center">
                                {esFavorito
                                    ? (<IoMdHeart className="text-red-500 text-5xl" />)
                                    : (<IoMdHeartEmpty className="text-red-500 text-5xl" />)
                                }
                            </div>
                        </button>
                        <button onClick={() => { setLoading(true); fetchPerros() }}>
                            <div className="flex justify-center">
                                <CgClose className="text-red-500 text-5xl" />
                            </div>
                        </button>
                    </div>
                </div>
            )}
            {/* <button className="btn btn-outline btn-error" onClick={() => { setLoading(true); fetchPerros() }}>
                Obtener otro perro
            </button> */}
        </div>
    );
}