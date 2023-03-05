import React, { useState, useEffect} from 'react';
import { Flex, Box, Image, HStack, Text, Stack } from '@chakra-ui/react';
import { slides } from '../../data/casousel-img';
import { StyledContainer } from './Carousel';

export const Carousel = () => {
    const arrowStyles = {
      cursor: "pointer",
      pos: "absolute",
      top: "50%",
      w: "auto",
      mt: "-22px",
      p: "16px",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "0.6s ease",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      _hover: {
        opacity: 0.8,
        bg: "black",
      },
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
  
    const setSlide = (slide) => {
      setCurrentSlide(slide);
    };

    //para que el carrosel avance
    useEffect(() => {
      const timer = setTimeout(() => {
        nextSlide();
      }, 4000);
      return () => clearTimeout(timer);
    });

  
    const carouselStyle = {
      transition: "all 1s",
      ml: `-${currentSlide * 100}%`,
    };
    return (
      <StyledContainer>
        <Flex w="full" pos="relative" overflow="hidden">
          <Flex minH="200px" maxH="320px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none" pos="relative">
                <Image src={slide.img} alt="carousel image" boxSize="full" backgroundSize="cover" />
                {(slide.label || slide.description)&&<Stack
                  p="10px 10px 30px 10px"
                  pos="absolute"
                  bottom="0px"
                  textAlign="center"
                  w="full"
                  bg="blackAlpha.500"
                  color= "white"
                  left="50%"
                  transform={"translateX(-50%)"}
                  minH="111px"
                >
                  <Text fontSize="2xl">{slide.label}</Text>
                  <Text fontSize="lg">{slide.description}</Text>
                </Stack>}
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </StyledContainer>
    );
}





