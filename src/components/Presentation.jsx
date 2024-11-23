import { ButtonLinkedin } from './ButtonLinkedin'
import { ButtonFiver } from './ButtonFiver'
export const Presentation = () => {
    return (
        <div className='flex flex-col justify-center items-center py-48 text-light'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold'>Hola Soy👋</h2>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>Dot Dager</h1>
            <p className='mt-3 text-base sm:text-lg md:text-xl lg:text-lg'>Desarrollador Full-Stack y creador de contenido</p>
            <div className='mt-4 flex gap-4 sm:flex-row'>
                <ButtonLinkedin />
                <ButtonFiver />
            </div>
        </div>

    )
}
