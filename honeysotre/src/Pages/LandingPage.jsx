import { Box,Button,Flex, Heading,Text,Image, Spacer } from '@chakra-ui/react'
import React,{useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const words = ['HONEY', 'HONEY', 'HONEY'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const aboutUsRef = useRef(null);
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

// -------------------------
let arr=["UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS",
"UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: GRANOLA, HONEY BARS AND DESSERTS, HERBAL TEA",
"UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS"]


  return (
    <>
    <Box  h={"88vh"} className='full_height' style={{overflowY:"hidden",scrollBehavior:"smooth"}}>

    <Box className='main_body1'>
      <Box h={"82vh"} bgColor={"yellow"}>

      <Flex align="center" justify="center"  >
      <Box w={"100%"} h={"82vh"}  position="relative" overflow="hidden">
        {words.map((word, index) => {
          const position = (index - currentIndex + words.length) % words.length;
          const isPrevious = index === currentIndex - 1 || (currentIndex === 0 && index === words.length - 1);
          const isNext = index === currentIndex + 1 || (currentIndex === words.length - 1 && index === 0);

          let transform;
          let transitionDuration;

          if (isPrevious) {
            transform = `translateX(-100%)`;
            transitionDuration = '1.5s';
          } else if (isNext) {
            transform = `translateX(100%)`;
            transitionDuration = '1.5s';
          } else {
            transform = `translateX(0)`;
            transitionDuration = '1.5s';
          }

          return (
 <>
 <Flex
 direction={"column"}
              key={index}
              w={"100%"}
              h={"82vh"}
              position="absolute"
              top={0}
              left={0}
              transform={transform}
              transition={`transform ${transitionDuration} ease`}
              zIndex={index === currentIndex ? 1 : 0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="2.5rem"
              fontFamily={"Brush Script MT"}
              fontWeight={"bold"}
              color="white"
              backgroundColor={['#96C1E4', '#F9AE05', '#185E49'][index]}
            >
 <Box>
 {/* <Heading zIndex={"100"} color={"white"} m={"auto"} top={"10%"} pos={"relative"} fontFamily={"Brush Script MT"}></Heading> */}
 </Box>
 Discover the real taste of Honey
 <Box fontSize={"18rem"} mt={"-100px"} fontFamily={"sans-serif"}>{word}</Box>
            </Flex>
 </>
          );
        })}
        <Flex pos={"relative"} w={"100%"} top={"70vh"} m={"auto"}   color='white' zIndex={"100"} justifyContent={"space-evenly"}>
           <Text>Products</Text>
           <Text onClick={scrollToAboutUs}>Abou Us</Text>
           <Text>Our Blog</Text>
           <Text>Contacts</Text>
        </Flex>
      </Box>
    </Flex>


      </Box>
      <Box  bgColor={"green"} h={"6vh"} color={"white"} overflow={"hidden"} className='moving_small_bannee'>

      <Flex align="center" justify="center"  >
      <Box w={"100%"} h={"6vh"}  position="relative" overflow="hidden">
        {arr.map((word, index) => {
          const position = (index - currentIndex + arr.length) % words.length;
          const isPrevious = index === currentIndex - 1 || (currentIndex === 0 && index === arr.length - 1);
          const isNext = index === currentIndex + 1 || (currentIndex === arr.length - 1 && index === 0);

          let transform;
          let transitionDuration;

          if (isPrevious) {
            transform = `translateX(-100%)`;
            transitionDuration = '1.5s';
          } else if (isNext) {
            transform = `translateX(100%)`;
            transitionDuration = '1.5s';
          } else {
            transform = `translateX(0)`;
            transitionDuration = '1.5s';
          }

          return (
 <>
 <Box
 direction={"column"}
              key={index}
              w={"100%"}
              h={"100%"}
              position="absolute"
              top={0}
              left={0}
              transform={transform}
              transition={`transform ${transitionDuration} ease`}
              zIndex={index === currentIndex ? 1 : 0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="1rem"
              fontFamily={"Helvetica Neue"}
              fontWeight={"bold"}
              color="black"
              backgroundColor={['#F05A1F', '#F05A1F', '#F05A1F'][index]}
              letterSpacing={"3px"}
            >
{word}
            </Box>
 </>
          );
        })}
        <Flex pos={"relative"} w={"100%"} top={"70vh"} m={"auto"}   color='white' zIndex={"100"} justifyContent={"space-evenly"}>
           <Text>Products</Text>
           <Text >Abou Us</Text>
           <Text>Our Blog</Text>
           <Text>Contacts</Text>
        </Flex>
      </Box>
    </Flex>
      </Box>
    </Box>

    </Box>

    <Box h={"100vh"} bgColor={"rgb(255,250,244)"} className='main_body2' id='aboutUs' ref={aboutUsRef} >
 
 <Box w={"90%"} margin={"auto"} h={"100vh"} p={"70px 20px"} borderLeft={"2px solid rgb(164,164,164)"} borderRight={"2px solid rgb(164,164,164)"}>

  <Heading size={"lg"} >ABOUT THE REGION OF HONEY: THE WARMIAN-MASURIAN VOIVODESHIP</Heading>
  <br></br>
  <Heading size={"sm"}>OUR IDEA IS TO DISCOVER NATURAL, VALUABLE PRODUCTS AND HELP IT REACH A WIDER RANGE OF GOURMETS</Heading>
  <br></br>
  <br></br>
  <Flex>
    <Flex direction='column' w={"50%"} gap={"50px"}>
      <Text>Honey and organic products that you Will find in our store come from
the Warmian—Masurian Voivodeship — one Of the cleanest regions in
Poland.</Text>
      <Text> It is thanks to this that they are distinguished by their unique taste and
aroma, as well as invaluable healing properties, We offer you a wide range</Text>
      <Text>Of nectar and honeydew honey — here you will find both your favorite
types and types that are hard to find on the regular market.
Our priority is to provide products Of the highest quality, which in our
understanding means, first Of all. naturalness and respect for nature and
its inhabitants.</Text>



    </Flex>
    <Box w={"40%"} overflow={"hidden"}>
      <Image width={"100%"} mt={"-50px"}  src='https://media.discordapp.net/attachments/1100180350879154326/1111264153663963176/image.png?width=808&height=662'></Image>
    </Box>

  </Flex>
<Flex>
  <Button zIndex={"100"} position={"relative"}>Know more</Button> <hr></hr>
</Flex>
 </Box>

    </Box>
    <Box bgColor={"yellow"} h={"100vh"} className='main_body3'>
      last part
    </Box>
    </>
  )
}

export default LandingPage
