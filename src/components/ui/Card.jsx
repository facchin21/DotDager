import { useContext, useEffect, useRef, useState } from "react";
import { CarouselContext } from "./Carousel";
import { AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const Card = ({ card, index, layout = false }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") handleClose();
        };
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 h-screen z-50 overflow-auto">
                        {/* Fondo difuso */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                        />
                        {/* Contenido del modal */}
                        <motion.div
                            ref={containerRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="max-w-5xl mx-auto bg-white h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
                        >
                            {/* Botón de cerrar */}
                            <button
                                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black rounded-full flex items-center justify-center z-60"
                                onClick={handleClose}
                            >
                                <IconX className="h-6 w-6 text-neutral-100" />
                            </button>
                            <p className="text-base font-medium text-black">{card.category}</p>
                            <p className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4">
                                {card.title}
                            </p>
                            <div className="py-10 text-dark-light">
                                {card.content}
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <img src={card.imageContent} 
                                alt={`Imagen del contenido sobre ${card.title}`} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <button
                onClick={handleOpen}
                className="relative rounded-3xl bg-gray-100 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start"
            >
                {/* Imagen de fondo */}
                <img src={card.src} alt={card.title} className="absolute inset-0 h-full w-full object-cover opacity-70" />
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div className="relative p-8">
                    <p className="text-white text-sm md:text-base font-medium">{card.category}</p>
                    <p className="text-white text-xl md:text-3xl font-semibold mt-2">{card.title}</p>
                </div>
            </button>
        </>
    );
};
