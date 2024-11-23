import imageBackground from '../assets/background.png';
import { Presentation } from './Presentation';
import {Navbar} from './Navbar';
export const Hero = () => {

    return (
        <div
            className="bg-cover bg-center h-content"
            style={{ backgroundImage: `url(${imageBackground})` }}
        >
            <Navbar/>
            <Presentation/>   
        </div>
    );
};

