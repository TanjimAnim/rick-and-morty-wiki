import { Box, Image, Text, Button, chakra, Center } from "@chakra-ui/react";

import Link from "next/link";

//importing assets
import rickHeadImage from "../../assets/portal.png";
import bubbleImage from "../../assets/bubble.png";
import barImage from "../../assets/bar.png";
import gunImage from "../../assets/Gun.png";
import logoImage from "../../assets/Logo.png";
import playIconImage from "../../assets/Vector.png";

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
        paddingTop="26px"
        marginX="auto"
        display="flex"
        justifyContent="center"
      >
        <Box
          zIndex={1}
          position="relative"
          fontStyle="italic"
          fontWeight="800"
          fontSize="128px"
          letterSpacing="6px"
          color="#FFFFFF"
          marginTop="129px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Box
            bgGradient="linear-gradient(99.46deg, #9DFE00 -10.9%, #14D9E6 97.14%)"
            backgroundClip="text"
            color="transparent"
          >
            <Text color="white">
              <chakra.span color="white">THE</chakra.span>
              <chakra.span whiteSpace="nowrap" display="inline-block">
                <Image src={rickHeadImage.src} />
              </chakra.span>
              <chakra.span fontStyle="normal">RICK &amp;</chakra.span>
            </Text>
          </Box>

          <Text>
            <chakra.span
              fontStyle="normal"
              bgGradient="linear-gradient(99.46deg, #9DFE00 -10.9%, #14D9E6 97.14%)"
              backgroundClip="text"
            >
              MORTY
            </chakra.span>{" "}
            WIKI
          </Text>

          <Box position="absolute" top="-100px" left="-155px">
            <Image src={bubbleImage.src} />
          </Box>

          <Box position="absolute" top="30px" right="6px">
            <Image src={barImage.src} />
          </Box>

          <Box position="absolute" top="52px" right="-335px">
            <Image src={gunImage.src} />
          </Box>
        </Box>
      </Box>
      <Box
        zIndex={1}
        position="relative"
        marginTop="21px"
        display="flex"
        justifyContent="center"
        gap="64px"
      >
        <Link href="https://www.youtube.com/watch?v=KQ9Cgdsa9tc&t=1s">
          <Box
            width="203px"
            height="58px"
            display="flex"
            alignItems="flex-start"
            padding="17px 25px"
            gap="10px"
            background="linear-gradient(99.46deg, #9DFE00 -10.9%, #14D9E6 97.14%)"
            borderRadius="100px"
            cursor="pointer"
          >
            <Image src={playIconImage.src} />
            <Text
              width="119px"
              height="24px"
              fontWeight={600}
              fontSize="20px"
              lineHeight="18px"
              color="#FBF8F3"
            >
              Watch Now
            </Text>
          </Box>
        </Link>
        <Box
          width="364px"
          height="51px"
          fontStyle="normal"
          fontWeight={600}
          fontSize="14px"
          lineHeight="17px"
          color="#14D9E6"
        >
          <Text>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </Text>
        </Box>
      </Box>
    </>
  );
}
