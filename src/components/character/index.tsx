import { Box, Image, Text } from "@chakra-ui/react";

//import asset
import heartImage from "../../assets/VectorHeart.png";
import speciesImage from "../../assets/VectorSpecies.png";
import genderImage from "../../assets/VectorGender.png";
import planetImage from "../../assets/VectorPlanet.png";
import locationImage from "../../assets/VectorLocation.png";
import externalLinkImage from "../../assets/Frame.png";
import playlistImage from "../../assets/VectorPlaylist.png";

//import types
import { CharacterDataType } from "../../types";

//import style
import styles from "../../../styles/Card.module.css";

export default function Character({
  characterData,
}: {
  characterData: CharacterDataType[];
}) {
  return (
    <Box color="white" marginTop="146px">
      {characterData.map((item) => {
        return (
          <Box key={item.id}>
            <Box display="flex" justifyContent="center" gap="183px">
              <Box display="flex" alignItems="center">
                <Text
                  fontSize="101.348px"
                  textTransform="capitalize"
                  opacity="0.1"
                  transform="rotate(-90deg)"
                  whiteSpace="nowrap"
                  color="white"
                >
                  {item.name}
                </Text>
                <Box>
                  <Text
                    fontSize="48px"
                    textTransform="capitalize"
                    color="#14D9E6"
                    textAlign="center"
                    marginBottom="32px"
                  >
                    {item.name}
                  </Text>
                  <Box
                    width="400px"
                    background="rgba(255, 255, 255, 0.05)"
                    borderRadius="8px"
                    padding="50px"
                    className={styles.card}
                    sx={{
                      _before: {
                        border: "none",
                      },
                    }}
                  >
                    <Image src={item.image} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box display="flex" gap="40px" marginBottom="40px">
                  <Box
                    background="rgba(255, 255, 255, 0.05)"
                    borderRadius="8px"
                    width="240px"
                    padding="20px"
                    className={styles.card}
                    sx={{
                      _before: {
                        border: "none",
                      },
                    }}
                  >
                    <Image src={heartImage.src} marginBottom="20px" />
                    <Text fontSize="16px">Status</Text>
                    <Text fontSize="20px">{item.status}</Text>
                  </Box>
                  <Box
                    background="rgba(255, 255, 255, 0.05)"
                    borderRadius="8px"
                    width="240px"
                    padding="20px"
                    className={styles.card}
                    sx={{
                      _before: {
                        border: "none",
                      },
                    }}
                  >
                    <Image src={speciesImage.src} marginBottom="20px" />
                    <Text fontSize="16px">Species</Text>
                    <Text fontSize="20px">{item.species}</Text>
                  </Box>
                  <Box
                    background="rgba(255, 255, 255, 0.05)"
                    borderRadius="8px"
                    width="240px"
                    padding="20px"
                    className={styles.card}
                    sx={{
                      _before: {
                        border: "none",
                      },
                    }}
                  >
                    <Image src={genderImage.src} marginBottom="20px" />
                    <Text fontSize="16px">Gender</Text>
                    <Text fontSize="20px">{item.gender}</Text>
                  </Box>
                </Box>
                <Box
                  width="800px"
                  background="rgba(255, 255, 255, 0.05)"
                  borderRadius="8px"
                  padding="20px"
                  marginBottom="40px"
                  className={styles.card}
                  sx={{
                    _before: {
                      border: "none",
                    },
                  }}
                >
                  <Image src={planetImage.src} marginBottom="20px" />
                  <Text fontSize="16px">Origin</Text>
                  <Box display="flex" justifyContent="space-between">
                    <Text fontSize="30px">{item.origin.name}</Text>{" "}
                    <Image src={externalLinkImage.src} width="24px" />{" "}
                  </Box>
                </Box>
                <Box
                  width="800px"
                  background="rgba(255, 255, 255, 0.05)"
                  borderRadius="8px"
                  padding="20px"
                  marginBottom="40px"
                  className={styles.card}
                  sx={{
                    _before: {
                      border: "none",
                    },
                  }}
                >
                  <Image src={locationImage.src} marginBottom="20px" />
                  <Text fontSize="16px">Last Known Location</Text>
                  <Box display="flex" justifyContent="space-between">
                    <Text fontSize="30px">{item.location.name}</Text>{" "}
                    <Image src={externalLinkImage.src} width="24px" />{" "}
                  </Box>
                </Box>
                <Box
                  width="800px"
                  background="rgba(255, 255, 255, 0.05)"
                  borderRadius="8px"
                  padding="20px"
                  className={styles.card}
                  sx={{
                    _before: {
                      border: "none",
                    },
                  }}
                >
                  <Image src={playlistImage.src} marginBottom="20px" />
                  <Text fontSize="16px">Episode(S)</Text>

                  {item.episode.slice(0, 5).map((item) => {
                    return (
                      <ul>
                        <Text fontSize="30px" fontWeight={600}>
                          {item}
                        </Text>
                      </ul>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
