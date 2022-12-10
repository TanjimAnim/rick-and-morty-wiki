import { Box, Image } from "@chakra-ui/react";
//importing assets
import backgroundImage from "../assets/Background.png";
import backgroundImage2 from "../assets/Background2.png";
import StarLeft from "../assets/StarLeft.png";
import StarMiddle from "../assets/StarMiddle.png";
import StarRight from "../assets/StarRight.png";
import SpiralImage from "../assets/Spiral.png";


//importing components
import Header from "./header";

export default function HomePage() {
  return (
    <Box id="background">
      <Box
        id="Ellipse-75"
        position="absolute"
        left="-52px"
        top="1561px"
        width="356px"
        height="356px"
        background="#2A3E84"
        filter="blur(175px)"
      />
      <Box
        id="Ellipse-76"
        zIndex={1}
        position="absolute"
        left="1698px"
        top="-108px"
        width="217px"
        height="356px"
        background="#2A3E84"
        filter="blur(175px)"
      />

      <Header />
      <Box
        id="Star-23"
        position="absolute"
        left="1033.55px"
        top="1151px"
        width="10.67px"
        height="12.2px"
        backgroundImage={StarMiddle.src}
        transform="matrix(-0.71, 0.71, 0.71, 0.71, 0, 0)"
      />
      <Box
        id="Star-24"
        width="24.96px"
        height="28.52px"
        position="absolute"
        left="1896.58px"
        top="1393px"
        backgroundImage={StarRight.src}
        transform="matrix(-0.99, 0.17, 0.17, 0.99, 0, 0)"
      />
      <Box
        id="Star-22"
        width="24.96px"
        height="28.52px"
        position="absolute"
        left="95.58px"
        top="1415px"
        backgroundImage={StarLeft.src}
        transform="matrix(-0.99, 0.17, 0.17, 0.99, 0, 0)"
      />
      <Box
        id="Spiral-element"
        width="524px"
        height="617px"
        position="absolute"
        left="1396px"
        top="1088px"
        backgroundImage={SpiralImage.src}
      />
      <Box id="image-overlay" width="1920px">
        <Box
          id="rectangle-11"
          position="absolute"
          left="0px"
          top="998px"
          width="1920px"
          background="linear-gradient(180deg, rgba(25, 29, 41, 0) 0%, #191D29 100%)"
        />
        <Box
          id="texture"
          width="1920px"
          height="1117px"
          position="absolute"
          left="0px"
          top="0px"
          backgroundImage={backgroundImage2.src}
          mixBlendMode="saturation"
          opacity="0.6"
        />
        <Box
          id="Rectangle-5"
          width="1920px"
          height="1116.95px"
          position="absolute"
          left="0px"
          top="0px"
          background="radial-gradient(35.56% 83.6% at 50% 50%, rgba(217, 217, 217, 0) 0%, rgba(25, 29, 41, 0.9) 100%)"
        />
        <Box
          id="background-image"
          width="1920px"
          height="1117px"
          position="absolute"
          left="0px"
          top="0px"
          backgroundImage={backgroundImage.src}
          mixBlendMode="normal"
        />
      </Box>
    </Box>
  );
}
