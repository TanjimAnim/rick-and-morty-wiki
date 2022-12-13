import { Box, Text, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useRef, MutableRefObject } from "react";

import { EpisodeDataType } from "../../types";

//import assests
import nextButtonImage from "../../assets/nextButton.png";

//import style
import styles from "../../../styles/Card.module.css";

export default function EpisodeCarousel() {
  const [data, setData] = useState<EpisodeDataType[]>([]);
  const [error, setError] = useState(null);

  //for scrolling button
  let scrl = useRef() as MutableRefObject<HTMLDivElement>;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/episode")
      .then((response) => setData(response.data.results))
      .catch((error) => setError(error.message));
  });

  //Slide click
  const slide = (shift: number) => {
    if (scrl.current !== null) {
      scrl.current.focus();
    }
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <Box
      position="relative"
      zIndex={1}
      width="96%"
      marginLeft="65px"
      marginRight="85px"
      marginTop="82px"
      marginBottom="31px"
    >
      <Box>
        <Text
          fontWeight={500}
          fontSize="24px"
          textTransform="capitalize"
          color="white"
        >
          Episodes
        </Text>
      </Box>

      <Box display="flex">
        {scrollX !== 0 && (
          <Button
            onClick={() => slide(-100)}
            transform="rotate(180deg)"
            borderRadius="50%"
            width="1%"
            marginTop="auto"
            marginBottom="auto"
          >
            <Image src={nextButtonImage.src} />
          </Button>
        )}
        <Box
          display="-webkit-box"
          alignItems="center"
          max-width="100%"
          overflowX="scroll"
          scrollBehavior="smooth"
          marginTop="33px"
          gap="32px"
          __css={{
            "&::-webkit-scrollbar": {
              background: "none" /* make scrollbar transparent */,
              "-webkit-appearance": "none",
              width: 0,
              height: 0,
            },
          }}
          style={{
            scrollbarWidth: "none",
          }}
          ref={scrl}
          onScroll={scrollCheck}
        >
          {data
            .filter((elem) => elem.id <= 7)
            .map((item) => {
              return (
                <Box className={styles.card} width="360px" key={item.id}>
                  <Text
                    fontSize="16px"
                    fontWeight={500}
                    marginY="24px"
                    marginLeft="16px"
                    color="white"
                  >
                    {item.episode}
                  </Text>

                  <Text
                    fontSize="16px"
                    fontWeight={500}
                    marginY="24px"
                    marginLeft="16px"
                    color="white"
                  >
                    {item.name}
                  </Text>
                </Box>
              );
            })}
        </Box>
        {!scrolEnd && (
          <Button
            onClick={() => slide(+100)}
            width="1%"
            borderRadius="50%"
            marginTop="auto"
            marginBottom="auto"
          >
            <Image src={nextButtonImage.src} />
          </Button>
        )}
      </Box>
    </Box>
  );
}
