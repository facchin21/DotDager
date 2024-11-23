
import { FaLinkedinIn } from 'react-icons/fa'

export const ButtonLinkedin = () => {
    const link = `https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US`
    return (
        <span className='inline-block bg-[#0275B4] px-2 py-2 
        rounded-full transition-all duration-300 hover:translate-y-1'>
            <a href={link} target='_blank'>
                <FaLinkedinIn color='white'
                className='text-3xl' />
            </a>
        </span>
    )
}
