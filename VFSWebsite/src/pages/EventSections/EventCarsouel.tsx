import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"


type Props = {
  images: string[]
  className?: string  
}




export default function EventCarousel({ images, className }: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    api.on("select", update);
    update();

    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="w-full sm:max-w-[65%] md:max-w-[85%] flex flex-col items-center">
      {/* Carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Image ${index}`}
                className={
                  className ??
                  "rounded-lg w-full sm:h-[450px] h-[370px] object-contain"
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* External custom buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">

        <Button variant="outline" className = "rounded-full" onClick={() => api?.scrollPrev()}><ArrowLeft/></Button>

        <span className="text-sm text-gray-800 font-medium">
          Slide {current + 1} of {count}
        </span>

        <Button variant="outline" className = "rounded-full" onClick={() => api?.scrollNext()}><ArrowRight/></Button>

      </div>
    </div>
  )
}
