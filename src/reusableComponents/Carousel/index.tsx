import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { CarouselContainer } from "./styles";

interface CarouselProps {
  // eslint-disable-next-line
  children?: JSX.Element | JSX.Element[];
  slideWidth?: number;
}

export function Carousel({ children, slideWidth }: CarouselProps) {
  const windowSize = useWindowSize();
  const spacingBetweenSlides = 25;
  const centerSlidePadding =
    windowSize.width && slideWidth
      ? (windowSize.width - slideWidth) / 2 - spacingBetweenSlides
      : 0;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer
      css={{ $$containerPadding: `${centerSlidePadding}px` }}
      {...settings}
    >
      {children}
    </CarouselContainer>
  );
}
