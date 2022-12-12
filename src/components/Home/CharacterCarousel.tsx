import { Box, Text, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useRef, MutableRefObject } from "react";

import { CharacterDataType } from "../../types";

//import assests
import nextButtonImage from "../../assets/nextButton.png";

export default function CharacterCarousel() {
  const [data, setData] = useState<CharacterDataType[]>([]);
  const [error, setError] = useState(null);

  //for scrolling button
  let scrl = useRef() as MutableRefObject<HTMLDivElement>;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character")
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
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text
            fontWeight={500}
            fontSize="24px"
            textTransform="capitalize"
            color="white"
          >
            Meet the Cast
          </Text>
        </Box>
        <Box
          width="116px"
          border="1px solid #9DFE00"
          borderRadius="8px"
          padding="10px 24px"
          gap="10px"
        >
          <Text fontSize="18px" fontWeight={400} color="white">
            View All
          </Text>
        </Box>
      </Box>
      <Box display="flex">
        {scrollX !== 0 && (
          <Button
            onClick={() => slide(-50)}
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
                <div
                  style={{
                    borderImageSource:
                      "linear-gradient(331.82deg, rgba(132, 247, 41, 0.7) -5.31%, rgba(21, 191, 253, 0.7) 91.15%)",
                    width: "290px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(3.77917px)",
                    borderRadius: "12.0933px",
                    border: "0.76px solid",
                  }}
                >
                  <Image
                    src={item.image}
                    width="258px"
                    borderRadius="3.77917px"
                    marginX="16px"
                    marginTop="16px"
                    marginBottom="64px"
                  />
                  <Text
                    fontSize="16px"
                    fontWeight={500}
                    marginY="24px"
                    marginLeft="16px"
                    color="white"
                  >
                    {item.name}
                  </Text>
                </div>
              );
            })}
        </Box>
        {!scrolEnd && (
          <Button
            onClick={() => slide(+50)}
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
