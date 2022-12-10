import { Box, Image, Text, chakra } from "@chakra-ui/react";

//importing assets
import rickHeadImage from "../assets/portal.png";
import bubbleImage from "../assets/bubble.png";
import barImage from "../assets/bar.png";
import gunImage from "../assets/Gun.png";
import logoImage from "../assets/Logo.png";

export default function Header() {
  return (
    <>
      <Box
        id="logo"
        position="relative"
        zIndex={1}
        width="227px"
        paddingTop="58px"
        marginLeft="auto"
        marginRight="auto"
        background="transparent"
      >
        <Image src={logoImage.src} alt="rick-and-morty" />
      </Box>
      <Box
        id="header-container"
        width="1475.91px"
        marginTop="26px"
        marginBottom="85px"
        marginLeft="268px"
        marginRight="176px"
      >
        <Box
          zIndex="1"
          position="relative"
          marginTop="129px"
          marginBottom="74px"
          marginLeft="154px"
          marginRight="280.91px"
        >
          <Text
            fontWeight={800}
            fontSize="128px"
            textTransform="uppercase"
            width="1041px"
            lineHeight="154px"
            color="white"
            background="linear-gradient(99.46deg, #9DFE00 -10.9%, #14D9E6 97.14%)"
            backgroundClip="text"
            filter="blur(75px)"
          >
            The
            <chakra.span>
              <Image src={rickHeadImage.src} />
            </chakra.span>
            Rick &amp;
          </Text>
          <Text
            fontWeight={800}
            fontSize="128px"
            textTransform="uppercase"
            width="1041px"
            lineHeight="154px"
            color="white"
          >
            morty wiki
          </Text>
          <Box position="absolute">
            <Image src={bubbleImage.src} />
          </Box>
          <Box position="absolute">
            <Image src={barImage.src} />
          </Box>
          <Box position="absolute">
            <Image src={barImage.src} />
          </Box>
          <Box position="absolute">
            <Image src={gunImage.src} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
