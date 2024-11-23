import { Carousel } from "./ui/Carousel"
import { itemsAboutData } from "../data/items.about.data";
export const About = () => {
    
  return (
    <div className="text-light w-full flex flex-col justify-center 
    items-center py-16">
        <h1 className="text-light-dark font-extrabold text-4xl">
            Sobre Mi
        </h1>
        <Carousel items={itemsAboutData} initialScroll={0} />
    </div>
  )
}
