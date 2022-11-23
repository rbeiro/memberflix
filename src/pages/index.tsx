import type { NextPage } from "next";
import { Image } from "../reusableComponents/Image";
import { HomeContainer } from "../styles/pages/home";
import testeImage from "../../public/hero-test.jpg";
import { Carousel } from "../reusableComponents/Carousel";
import Link from "next/link";

const Home: NextPage = () => {
  const slideSize = 720;
  return (
    <HomeContainer>
      <Carousel slideWidth={slideSize}>
        <Link href={"/product"}>
          <Image
            src={testeImage}
            alt=""
            width={slideSize}
            height={slideSize}
            withLink
          />
        </Link>
        <Link href={"/product"}>
          <Image
            src={testeImage}
            alt=""
            width={slideSize}
            height={slideSize}
            withLink
          />
        </Link>
        <Link href={"/product"}>
          <Image
            src={testeImage}
            alt=""
            width={slideSize}
            height={slideSize}
            withLink
          />
        </Link>
        <Link href={"/product"}>
          <Image
            src={testeImage}
            alt=""
            width={slideSize}
            height={slideSize}
            withLink
          />
        </Link>
        <Link href={"/product"}>
          <Image
            src={testeImage}
            alt=""
            width={slideSize}
            height={slideSize}
            withLink
          />
        </Link>
      </Carousel>
    </HomeContainer>
  );
};

export default Home;
