import { Box, Image } from "@chakra-ui/react";
//importing assets
import StarLeft from "../../src/assets/StarLeft.png";
import StarMiddle from "../../src/assets/StarMiddle.png";
import StarRight from "../../src/assets/StarRight.png";
import logoImage from "../../src/assets/Logo.png";

//router next
import { useRouter } from "next/router";

//import types
import { GetServerSideProps } from "next";

import axios from "axios";
import { CharacterResponseDataType } from "../../src/types";
import Character from "../../src/components/character";

export default function CharacterPage({
  data,
}: {
  data: CharacterResponseDataType;
}) {
  const router = useRouter();
  const { slug } = router.query;

  var characterData = data.results.filter((elem) => {
    if (slug) {
      return parseInt(slug[0]) == elem.id;
    }
  });

  return (
    <Box id="background">
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
        <Character characterData={characterData} />
      </Box>
      <Box
        id="Ellipse-76"
        position="absolute"
        left="1694px"
        top="537px"
        width="356px"
        height="356px"
        background="#2A3E84"
        filter="blur(175px)"
      />
      <Box
        id="Ellipse-75"
        zIndex={1}
        position="absolute"
        left="-52px"
        top="1381px"
        width="217px"
        height="356px"
        background="#2A3E84"
        filter="blur(175px)"
      />

      <Box
        id="Star-23"
        position="absolute"
        left="421.55px"
        top="1274px"
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
        top="989px"
        backgroundImage={StarRight.src}
        transform="matrix(-0.99, 0.17, 0.17, 0.99, 0, 0)"
      />
      <Box
        id="Star-22"
        width="24.96px"
        height="28.52px"
        position="absolute"
        left="99.58px"
        top="647px"
        backgroundImage={StarLeft.src}
        transform="matrix(-0.99, 0.17, 0.17, 0.99, 0, 0)"
      />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `https://rickandmortyapi.com/api/character`;

  const { data }: { data: CharacterResponseDataType } = await axios.get(url);

  return {
    props: { data },
  };
};
