import NextImage, { StaticImageData } from "next/image";
import { ImageContainer } from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  withLink?: boolean;
}

export function Image({
  src,
  alt,
  width,
  height,
  withLink = true,
}: ImageProps) {
  const stylingProps = {
    $$height: `${height}px`,
    $$width: `${width}px`,
  };

  return (
    <ImageContainer css={stylingProps} withLink={withLink}>
      <NextImage src={src} alt={alt} width={width} height={height} />
    </ImageContainer>
  );
}
