import { useState } from "react";

export const BlurImage = ({ src, alt, className }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <img
            src={src}
            alt={alt || "Blurred background"}
            className={`transition duration-300 ${isLoading ? "blur-sm" : "blur-0"} ${className}`}
            onLoad={() => setLoading(false)}
            loading="lazy"
        />
    );
};
