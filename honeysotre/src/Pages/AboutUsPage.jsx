import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Spacer,
  border,
  Checkbox,
  Center,
  HStack,
  VStack,
  Input,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function AboutUsPage() {

  const words = ["HONEY", "HONEY", "HONEY"];

  const [currentIndex, setCurrentIndex] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const aboutUsRef = useRef(null);
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const blogRef = useRef(null);
  const scrollToBlog = () => {
    blogRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // -------------------------
  let arr = [
    "UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS",
    "UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: GRANOLA, HONEY BARS AND DESSERTS, HERBAL TEA",
    "UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS",
  ];


  return (
    <Box style={{ height: "88vh", overflowY: "hidden" }}>
      <Box
        h={"100vh"}
        className="full_height"
        style={{
          height: "100vh",
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <Box style={{ scrollSnapAlign: "start" }} className="main_body1">
          <Box h={"82vh"} bgColor={"yellow"}>
            <Flex align="center" justify="center">
              <Box w={"100%"} h={"82vh"} position="relative" overflow="hidden">
                {words.map((word, index) => {
                  const position =
                    (index - currentIndex + words.length) % words.length;
                  const isPrevious =
                    index === currentIndex - 1 ||
                    (currentIndex === 0 && index === words.length - 1);
                  const isNext =
                    index === currentIndex + 1 ||
                    (currentIndex === words.length - 1 && index === 0);

                  let transform;
                  let transitionDuration;

                  if (isPrevious) {
                    transform = `translateX(-100%)`;
                    transitionDuration = "1.5s";
                  } else if (isNext) {
                    transform = `translateX(100%)`;
                    transitionDuration = "1.5s";
                  } else {
                    transform = `translateX(0)`;
                    transitionDuration = "1.5s";
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
                        backgroundColor={
                          ["#96C1E4", "#F9AE05", "#185E49"][index]
                        }
                      >
               
                        Discover the real taste of 
                        <Box
                          fontSize={"18rem"}
                          mt={"-100px"}
                          fontFamily={"sans-serif"}
                        >
                          {word}
                        </Box>
                        <Image src="https://media.discordapp.net/attachments/1100180350879154326/1113757220652453918/image-removebg-preview.png?width=145&height=152" pos={"absolute"} top={"10px"} left={"40px"} ></Image>
                        <Image src="https://cdn.discordapp.com/attachments/1100180350879154326/1113760619615748116/image-removebg-preview_1.png" pos={"absolute"} top={"55px"} right={"130px"} ></Image>
                        <Image src="https://cdn.discordapp.com/attachments/1100180350879154326/1113761379262926890/image-removebg-preview_2.png" pos={"absolute"} bottom={"120px"} left={"130px"} ></Image>
                      </Flex>
                    </>
                  );
                })}
                <Flex
                  pos={"relative"}
                  w={"100%"}
                  top={"70vh"}
                  m={"auto"}
                  fontWeight={"600"}
                  color="black"
                  zIndex={"100"}
                  justifyContent={"space-evenly"}
                >
                  <Text>Products</Text>
                  <Text onClick={scrollToAboutUs}>Abou Us</Text>
                  <Text onClick={scrollToBlog}>Our Blog</Text>
                  <Text>Contacts</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box
            bgColor={"green"}
            h={"6vh"}
            color={"white"}
            overflow={"hidden"}
            className="moving_small_bannee"
          >
            <Flex align="center" justify="center">
              <Box w={"100%"} h={"6vh"} position="relative" overflow="hidden">
                {arr.map((word, index) => {
                  const position =
                    (index - currentIndex + arr.length) % words.length;
                  const isPrevious =
                    index === currentIndex - 1 ||
                    (currentIndex === 0 && index === arr.length - 1);
                  const isNext =
                    index === currentIndex + 1 ||
                    (currentIndex === arr.length - 1 && index === 0);

                  let transform;
                  let transitionDuration;

                  if (isPrevious) {
                    transform = `translateX(-100%)`;
                    transitionDuration = "1.5s";
                  } else if (isNext) {
                    transform = `translateX(100%)`;
                    transitionDuration = "1.5s";
                  } else {
                    transform = `translateX(0)`;
                    transitionDuration = "1.5s";
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
                        backgroundColor={
                          ["#F05A1F", "#F05A1F", "#F05A1F"][index]
                        }
                        letterSpacing={"3px"}
                      >
                        {word}
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Flex>
          </Box>
        </Box>

     
        <Box style={{ scrollSnapAlign: "start" }} className="main_body1">
          <Box h={"230vh"} mt={"40px"}>
          <Box h={"100%"}>
        <Center w="100%">
        <HStack  w="95%">
        
          <Box w="50%"  >
           
           <Text fontSize='3xl' fontWeight="bold">
            OUR VALUES AND IDEA
           </Text>
           <Text fontSize='ms' fontWeight='bold'>
                    OUR FOCUS IS ON PROVIDING THE HEIGEST QUALITY ARTISANAL
           </Text>
           <Text fontSize='ms' fontWeight='bold'>
                    100% HONEY TO THE WORLD
           </Text>
           <HStack  mt="50px">
            <Box>
             <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione officia aspernatur maxime consectetur. Expedita aliquam amet asperiores sed cum, quod tempora libero reprehenderit consequuntur atque pariatur debitis. Saepe labore quisquam accusamus hic dicta mollitia porro voluptate, sunt ad ducimus aut quibusdam ratione fugit, quasi earum distinctio temporibus iste. Maiores.
             </Text>
            </Box>
            <Box>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione officia aspernatur maxime consectetur. Expedita aliquam amet asperiores sed cum, quod tempora libero reprehenderit consequuntur atque pariatur debitis. Saepe labore quisquam accusamus hic dicta mollitia porro voluptate, sunt ad ducimus aut quibusdam ratione fugit, quasi earum distinctio temporibus iste. Maiores.
             </Text>
            </Box>
           </HStack>
          </Box>
          <Box ml="20px" width="50%">
           <img  style={{width:"80%"}} src='https://th.bing.com/th/id/OIP.-PaWwDjfvY5KHHRiMJB68AHaE7?w=269&h=180&c=7&r=0&o=5&pid=1.7' alt=''/>
           </Box>
        </HStack>
        </Center>
        {/* second */}
        <Center w="100%" mt="40px">
          <HStack w="95%">
            <Box w="20%">
            <img  style={{width:"95%"}} src="https://th.bing.com/th/id/OIP.-PaWwDjfvY5KHHRiMJB68AHaE7?w=269&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            </Box>
            <Box >
            <Text fontSize='2xl' fontWeight="bold">
            THE GUARANTEE OF THE QUALITY OF OUR 
           </Text>
           <Text fontSize='2xl' fontWeight='bold'>
                    PRODUCTS IS ITS NATURAL TASTE,UNDISTUREBED AROMA
           </Text>
           <Text fontSize='ms' fontWeight='bold' color="green" fontStyle='oblique' flexWrap='revert'>
                    and pure composition
           </Text>
            </Box>
          </HStack>
        </Center>
        <Center w="100%" mt="30px">
         <HStack w="95%">
          <Box w="50%">
          <Text fontSize='lr' fontWeight='bold'>
                    WHAT'S ALL THE BUZZ ABCUT? WELL THAT'S JUST THE SECOND
           </Text>
           <Text fontSize='lr' fontWeight='bold'>
                   OF PRODUCTS IS ITS NATURAL TASTE,UNDISTUREBED 
           </Text>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos natus explicabo culpa similique illum doloremque in, sunt, quam nihil id, eum iusto excepturi? Eaque quae eos voluptatibus, ad in nobis odio, facilis architecto eligendi culpa adipisci fugiat! Earum sapiente voluptates inventore beatae dolores, doloremque debitis deserunt commodi consequuntur provident a mollitia, nam, sed aliquam magni aspernatur? Vero maxime suscipit sapiente?</p> 
          </Box>
          <Box w="50%">
            <img style={{width:"80%"}} src="https://th.bing.com/th/id/OIP.8jTSOK10EprTwgnGfTCEWAHaFQ?w=251&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
          </Box>
         </HStack>
        </Center>
        <Center w="100%" mt="30px">
         <HStack w="95%">
         <Box w="50%">
            <img style={{width:"80%"}} src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZ5wLC1naSFR_0J4v1pzMVQhHoX8VlP_YLg&usqp=CAU " alt="" />
          </Box>
          <Box  w="50%">
          <Text fontSize='xl' fontWeight='bold' color="green" fontStyle="italic">
                    WHAT'S ALL THE BUZZ ABCUT? WELL THAT'S JUST THE SECOND
           </Text>
           
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos natus explicabo culpa similique illum doloremque in, sunt, quam nihil id, eum iusto excepturi? Eaque quae eos voluptatibus, ad in nobis odio, facilis architecto eligendi culpa adipisci fugiat! Earum sapiente voluptates inventore beatae dolores, doloremque debitis deserunt commodi consequuntur provident a mollitia, nam, sed aliquam magni aspernatur? Vero maxime suscipit sapiente?</p> 
          </Box>
         
         </HStack>
        </Center>
    </Box>


          </Box>
    
        </Box>



        <Box
          style={{ scrollSnapAlign: "start" }}
          w={"100%"}
          bgColor={"rgb(25,94,73)"}
          h={"100vh"}
          className="main_body6"
          id="footer"
        >
          <Box w={"100%"} margin={"auto"} h={"100vh"}>
            <Box
              bgColor={"green"}
              w={"100%"}
              h={"6vh"}
              color={"white"}
              overflow={"hidden"}
              className="moving_small_bannee"
            >
              <Flex align="center" justify="center">
                <Box w={"100%"} h={"6vh"} position="relative" overflow="hidden">
                  {arr.map((word, index) => {
                    const position =
                      (index - currentIndex + arr.length) % words.length;
                    const isPrevious =
                      index === currentIndex - 1 ||
                      (currentIndex === 0 && index === arr.length - 1);
                    const isNext =
                      index === currentIndex + 1 ||
                      (currentIndex === arr.length - 1 && index === 0);

                    let transform;
                    let transitionDuration;

                    if (isPrevious) {
                      transform = `translateX(-100%)`;
                      transitionDuration = "1.5s";
                    } else if (isNext) {
                      transform = `translateX(100%)`;
                      transitionDuration = "1.5s";
                    } else {
                      transform = `translateX(0)`;
                      transitionDuration = "1.5s";
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
                          backgroundColor={
                            ["#F05A1F", "#F05A1F", "#F05A1F"][index]
                          }
                          letterSpacing={"3px"}
                        >
                          {word}
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </Flex>
            </Box>
            <Flex
              zIndex={"1000"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"50px 20px"}
              gap={"20px"}
            >
              <Heading fontSize={"30px"} color={"white"}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Heading>
              <Text color={"white"} fontSize={"13px"}>
                SIGN UP FOR NEWS, UPDATES AND SPECIAL OFFERS! LET IT BEE :)
              </Text>
              <Flex
                w={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <Input
                  color={"white"}
                  border={"none"}
                  borderBottom={"1px solid white"}
                  placeholder="YOUR EMAIL"
                  w={"30%"}
                  borderRadius={"0"}
                />
                <Button
                  borderRadius={"30px"}
                  w={"10%"}
                  color={"white"}
                  variant="outline"
                >
                  SUBSCRIBE
                </Button>
              </Flex>
              <Box>
                <Flex gap={"10px"}>
                  <Checkbox />
                  <Text color={"rgb(82,146,126)"}>
                    By pressing the button you agree to our terms and conditions
                  </Text>
                </Flex>
              </Box>
            </Flex>

            <Box
              background={"white"}
              height={"50vh"}
              p={"30px"}
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"auto"}
            >
              <Flex justifyContent={"space-around"} w={"100%"}>
                <Flex direction={"column"} w={"50%"}>
                  <Heading size={"md"}>LET IT BEE.CO</Heading>
                  <Heading size={"md"} mt={"10px"}>
                    DISCOVER THE REAL TASTE
                  </Heading>
                  <Heading size={"md"}>
                    OF HONEY AND ORGANIC FOOD{" "}
                    <span
                      style={{
                        fontFamily: "Brush Script MT",
                        fontSize: "30px",
                      }}
                    >
                      with love
                    </span>
                  </Heading>
                  <Text
                    mt={"30px"}
                    color={"rgb(184,182,181)"}
                    fontSize={"12px"}
                  >
                    © 2023 Name Company. All rights reserved.
                  </Text>
                </Flex>

                <Flex w={"50%"} justifyContent={"space-evenly"}>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"sm"}>SHOP</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Products
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      About Us
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Our Blog
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"sm"}>INFO</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Orders and shipping
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      FAQ
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap={"10px"}>
                    <Heading fontSize={"sm"}>CONTACTS</Heading>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Instagram
                    </Text>
                    <Text color={"rgb(184,182,181)"} fontSize={"12px"}>
                      Facebook
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUsPage

