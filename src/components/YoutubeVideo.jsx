import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";

const YouTubeVideos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener los videos desde el localStorage
    const getCachedData = () => {
        const cachedVideos = localStorage.getItem("youtubeVideos");
        const lastFetched = localStorage.getItem("lastFetched"); // Fecha de la última llamada

        if (cachedVideos && lastFetched) {
            const now = new Date();
            const lastFetchDate = new Date(lastFetched);
            const diffInMinutes = (now - lastFetchDate) / (1000 * 60); // Diferencia en minutos

            // Si han pasado más de 30 minutos, considera que los datos están caducados
            if (diffInMinutes > 120) {
                return null; // Los datos han caducado
            }

            return JSON.parse(cachedVideos); // Devuelve los datos almacenados si no han caducado
        }

        return null; // No hay datos almacenados
    };

    // Función para hacer la solicitud a la API de YouTube
    const fetchVideos = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const channelId = import.meta.env.VITE_CHANNEL_ID;

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=3&key=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error de la API:", errorData); // Log del error
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setVideos(data.items || []);

            // Guardar los videos y la fecha de la solicitud en localStorage
            localStorage.setItem("youtubeVideos", JSON.stringify(data.items));
            localStorage.setItem("lastFetched", new Date().toISOString());
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Obtener los videos al montar el componente
    useEffect(() => {
        const cachedData = getCachedData();
        if (cachedData) {
            setVideos(cachedData);
            setLoading(false);
        } else {
            fetchVideos();
        }
    }, []);

    // Mostrar mensajes según el estado de carga o error
    if (loading) return <p>Cargando videos...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (videos.length === 0) return <p>No se encontraron videos.</p>;

    return (
        <section>
            <h1 className="text-4xl text-light-dark py-5 flex gap-2 justify-center items-center">
                YouTube
                <FaYoutube color="red" />
            </h1>
            <h2 className="text-light-dark text-lg mb-8">Últimos tres videos</h2>
            <div className="flex flex-wrap gap-8 justify-center items-center">
                {videos.map((video) => (
                    <article key={video.id.videoId} className="w-56 min:w-56 min-h-56 transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                            className="mb-3"
                        />
                        <h3 className="text-sm text-light-dark mb-4 min-h-16">{video.snippet.title}</h3>
                        <a
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-block 
                            text-center border-2 hover:border-detail-green
                            border-detail py-2 px-4 mt-2 
                            transition-all duration-300 hover:bg-detail-green"
                        >
                            Ver video
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default YouTubeVideos;
