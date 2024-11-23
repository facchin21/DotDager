import imageBgProgrammer from "../assets/image-code.png";
import imageBgMusic from '../assets/image-guitar.png';
import imageDotDager from '../assets/dotdager.jpg';
import imageDotDagerMusic from '../assets/banner-music.jpg';
import imageBgAda13 from '../assets/image-ada13.png';
import imageAda13 from '../assets/ada13.jpg'
import imageFilosofia from '../assets/image-bg.png'
import { image } from "framer-motion/client";
export const itemsAboutData = [
  {
    category: "Programación",
    title: "Programador Full-Stack",
    content: `
          Soy un desarrollador full-stack senior con más de 8 años de experiencia en la industria del software, especializado en tecnologías como .NET Core, Java, MySQL y AWS. A lo largo de mi carrera, he trabajado en el desarrollo de aplicaciones completas, liderado equipos de desarrollo y brindado consultoría en el diseño de sistemas. Mi enfoque está en crear soluciones de software eficientes y de alta calidad, siempre aplicando principios sólidos y mejores prácticas.

          He trabajado en proyectos de diversa envergadura, desde la creación de microservicios hasta el desarrollo de aplicaciones móviles con Xamarin. Además, tengo una amplia experiencia en la gestión de infraestructuras de TI y en la optimización de procesos empresariales a través de la automatización.
            `,
    imageContent: imageDotDager,
    src: imageBgProgrammer,
  },
  {
    category: "Música",
    title: "Música Experimental",
    content: `
    Hola, soy DotDager, un músico dedicado a la creación de música experimental y alternativa. Mi arte se caracteriza por la realización de loops en vivo y la composición de canciones improvisadas que siempre tienen un toque humorístico y único.
    En mi trayectoria, he construido una sólida presencia en línea. Mi perfil verificado en Spotify cuenta con 52 oyentes mensuales, y en mi canal de YouTube, he estado subiendo videos musicales durante más de dos años, compartiendo mi pasión por la música con una comunidad creciente.
    ¡Espero que disfrutes de mi música tanto como yo disfruto creándola!
    `,
    imageContent : imageDotDagerMusic,
    src: imageBgMusic, 
  },
  {
    category: "Evento",
    title: "ADA 13 - Día del Programador 2024",
    content: `
      Únete a nosotros en la gran celebración del Día del Programador, organizada por ADA 13 con la participación especial de Soy Dalto. Este evento gratuito está diseñado para fortalecer la comunidad de desarrolladores a través de la colaboración y el aprendizaje. Mantente atento a las próximas novedades sobre el evento ADA 13 en 2024. ¡No te lo pierdas!
    `,
    imageContent : imageAda13,
    src: imageBgAda13,  
  },
  {
    category: 'Inspiración ',
    title : 'Filosofía',
    content:`
      Soy un firme creyente en el enfoque **SOLID** en el desarrollo de software, donde cada pieza de código tiene que ser reutilizable, fácil de mantener y flexible. La calidad en el código es mi principal objetivo, y siempre me esfuerzo por crear soluciones eficientes y limpias.
      En cuanto a la música, mi estilo se basa en la improvisación. Creo que la música debe ser un espacio para la creatividad espontánea y, por lo tanto, suelo experimentar con loops y sonidos inesperados. Cada presentación en vivo es única, y eso es lo que la hace especial.
      Mis Influencias:
      - Programación: Rob Pike, Martin Fowler, Uncle Bob
      - Música: Brian Eno, Daft Punk, The Chemical Brothers
      `,
    imageContent: imageFilosofia,
    src: imageFilosofia,
  }
];
