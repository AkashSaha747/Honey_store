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
  Input,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
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
                  <Text onClick={()=>{
                    navigate("/products")
                  }}>Products</Text>
                  <Text onClick={scrollToAboutUs}>Abou Us</Text>
                  <Text onClick={scrollToBlog}>Our Blog</Text>
                  <Text onClick={()=>{
                    navigate("/contact")
                  }}>Contacts</Text>
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

        <Box
          h={"100vh"}
          style={{ scrollSnapAlign: "start" }}
          bgColor={"rgb(255,250,244)"}
          className="main_body2"
          id="aboutUs"
          ref={aboutUsRef}
        >
          <Box
            w={"90%"}
            margin={"auto"}
            h={"100vh"}
            p={" 20px 20px 150px 20px"}
            borderLeft={"2px solid rgb(164,164,164)"}
            borderRight={"2px solid rgb(164,164,164)"}
          >
            <Heading size={"lg"}>
              ABOUT THE REGION OF HONEY: THE WARMIAN-MASURIAN VOIVODESHIP
            </Heading>
            <br></br>
            <Heading size={"sm"}>
              OUR IDEA IS TO DISCOVER NATURAL, VALUABLE PRODUCTS AND HELP IT
              REACH A WIDER RANGE OF GOURMETS
            </Heading>
            <br></br>
            <br></br>
            <Flex>
              <Flex direction="column" w={"50%"} gap={"50px"}>
                <Text>
                  Honey and organic products that you Will find in our store
                  come from the Warmian—Masurian Voivodeship — one Of the
                  cleanest regions in Poland.
                </Text>
                <Text>
                  {" "}
                  It is thanks to this that they are distinguished by their
                  unique taste and aroma, as well as invaluable healing
                  properties, We offer you a wide range
                </Text>
                <Text>
                  Of nectar and honeydew honey — here you will find both your
                  favorite types and types that are hard to find on the regular
                  market. Our priority is to provide products Of the highest
                  quality, which in our understanding means, first Of all.
                  naturalness and respect for nature and its inhabitants.
                </Text>
              </Flex>
              <Box w={"40%"} overflow={"hidden"}>
                <Image
                  width={"100%"}
                  mt={"-50px"}
                  src="https://media.discordapp.net/attachments/1100180350879154326/1111264153663963176/image.png?width=808&height=662"
                ></Image>
              </Box>
            </Flex>
            <Flex>
              <Button
                zIndex={"100"}
                onClick={() => {
                  navigate("/about-us");
                }}
                position={"relative"}
                border={"1px solid black"}
                borderRadius={"30px"}
                variant="outline"
              >
                LEARN MORE
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <hr
                style={{
                  width: "80%",
                  marginTop: "20px",
                  border: "2px solid rgb(161,160,158)",
                }}
              ></hr>
            </Flex>
          </Box>
        </Box>

        <Box
          style={{ scrollSnapAlign: "start" }}
          h={"100vh"}
          className="main_body3"
          bgColor={"rgb(255,250,244)"}
        >
          <Box
            w={"90%"}
            margin={"auto"}
            h={"100vh"}
            p={"70px 20px"}
            borderLeft={"2px solid rgb(164,164,164)"}
            borderRight={"2px solid rgb(164,164,164)"}
          >
            <Heading textAlign={"center"}>WHY CHOOSE US?</Heading>
            <br></br>
            <br></br>
            <Flex
              justifyContent={"space-evenly"}
              gap={"40px"}
              w={"100%"}
              p={"0 30px"}
            >
              <Flex
                direction={"column"}
                w={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Box w={"70%"}>
                  <Image
                    width={"100%"}
                    src="https://cdn.discordapp.com/attachments/1100180350879154326/1111318183555633282/image.png"
                  ></Image>
                </Box>
                <Text
                  fontSize={"16px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  ALL PRODUCTS ARE ORGANIC
                </Text>
                <Text fontSize={"15px"} textAlign={"center"}>
                  All products are produced in a small private apiary
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"100%"}
                gap={"10px"}
              >
                <Box w={"70%"}>
                  <Image
                    mt={"-13px"}
                    width={"100%"}
                    src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287271816183809/image.png"
                  ></Image>
                </Box>
                <Text
                  fontSize={"16px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  100% NATURAL RAW HONEY
                </Text>
                <Text fontSize={"15px"} textAlign={"center"}>
                  Harvested and packed in the Poland
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"100%"}
                gap={"10px"}
              >
                <Box w={"70%"}>
                  <Image
                    width={"100%"}
                    mt={"12px"}
                    src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287333598265407/image.png"
                  ></Image>
                </Box>
                <Text
                  fontSize={"16px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  ECOLOGICAL BEEKEEPING
                </Text>
                <Text fontSize={"15px"} textAlign={"center"}>
                  Encorage organic ways of sustainable beekeeping
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"100%"}
                gap={"10px"}
              >
                <Box w={"70%"}>
                  <Image
                    width={"100%"}
                    src="https://cdn.discordapp.com/attachments/1100180350879154326/1111287410010103879/image.png"
                  ></Image>
                </Box>
                <Text
                  fontSize={"16px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  HOME FOR BEES
                </Text>
                <Text fontSize={"15px"} textAlign={"center"}>
                  providing homes for our splendid polinators
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Box
          style={{ scrollSnapAlign: "start" }}
          bgColor={"rgb(255,250,244)"}
          h={"100vh"}
          className="main_body4"
        >
          <Box
            w={"90%"}
            margin={"auto"}
            h={"100vh"}
            p={"70px 20px"}
            borderLeft={"2px solid rgb(164,164,164)"}
            borderRight={"2px solid rgb(164,164,164)"}
          >
            <Flex gap={"20%"}>
              <Flex direction={"column"} gap={"10%"} w="40%">
                <Flex w={"150%"}>
                  <Box width={"150%"}>
                    <Heading size={"xl"}>
                      CHECKOUT<br></br> ALL PRODUCTS
                    </Heading>
                    <br></br>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      CHOOSE WHAT IS RIGHT FOR YOU<br></br>
                      FROM OUR LINE OF ORGANIC<br></br>
                      AND HONEY PRODUCTS
                    </Text>
                  </Box>
                  <Image
                    w={"100%"}
                    src="https://cdn.discordapp.com/attachments/1100180350879154326/1111557552384262164/image.png"
                  ></Image>
                </Flex>

                <Box>
                  <Flex
                    direction={"column"}
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    gap={"5px"}
                  >
                    <hr
                      style={{
                        border: "1px solid rgb(128,127,125)",
                        width: "55%",
                      }}
                    ></hr>
                    <Box>HONEY</Box>
                    <hr
                      style={{
                        border: "1px solid rgb(128,127,125)",
                        width: "55%",
                      }}
                    ></hr>
                    <Box> GRANOLA</Box>
                    <hr
                      style={{
                        border: "1px solid rgb(128,127,125)",
                        width: "55%",
                      }}
                    ></hr>
                    <Box>HONEY BARS</Box>
                    <hr
                      style={{
                        border: "1px solid rgb(128,127,125)",
                        width: "55%",
                      }}
                    ></hr>
                    <Box>CHOCOLATE WITH HONEY</Box>
                    <hr
                      style={{
                        border: "1px solid rgb(128,127,125)",
                        width: "55%",
                      }}
                    ></hr>
                    <Box>HONEY DESSERTS</Box>
                    <hr
                      style={{
                        border: "1px solid rgb(128,127,125)",
                        width: "55%",
                      }}
                    ></hr>
                  </Flex>
                </Box>
              </Flex>

              <Box w={"60%"}>
                <Image
                  w={"60%"}
                  src="https://cdn.discordapp.com/attachments/1100180350879154326/1111557842302935112/image.png"
                ></Image>
              </Box>
            </Flex>
            <Flex mt={"50px"} gap={"20px"} margin={"auto"}>
              <hr
                style={{
                  width: "80%",
                  marginTop: "20px",
                  border: "2px solid rgb(161,160,158)",
                }}
              ></hr>
              <Button
                zIndex={"100"}
                onClick={() => {
                  navigate("/products");
                }}
                position={"relative"}
                border={"1px solid black"}
                borderRadius={"30px"}
                variant="outline"
              >
                ALL PRODUCTS
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Flex>
          </Box>
        </Box>
        <Box
          style={{ scrollSnapAlign: "start" }}
          bgColor={"rgb(255,250,244)"}
          h={"100vh"}
          className="main_body4"
          id="blog"
          ref={blogRef}
        >
          <Box
            w={"90%"}
            margin={"auto"}
            h={"100vh"}
            p={"70px 20px"}
            borderLeft={"2px solid rgb(164,164,164)"}
            borderRight={"2px solid rgb(164,164,164)"}
          >
            <Flex justifyContent={"space-evenly"} w={"100%"}>
              <Flex
                className="Blog_1"
                direction={"column"}
                w={"100%"}
                gap={"10px"}
              >
                <Heading size={"lg"}> Our Blog</Heading>
                <Heading fontFamily={"Brush Script MT"} size={"lg"}>
                  For real honey fans
                </Heading>
              </Flex>
              <Flex
                className="Blog_2"
                w={"100%"}
                direction={"column"}
                gap={"10px"}
              >
                <hr
                  style={{
                    width: "80%",
                    marginTop: "20px",
                    border: "2px solid rgb(161,160,158)",
                  }}
                ></hr>
                <Text size={"18px"} w={"90%"} fontWeight={"bold"}>
                  HOW TO DISTINGUISH REAL HONEY FROM ARTIFICIAL HONEY?
                </Text>
                <Text size={"12px"} color="rgb(192,192,192)">
                  Jan 18, 20223
                </Text>
                <Image
                  w={"80%"}
                  h={"50%"}
                  src="https://4.imimg.com/data4/VE/NM/MY-12668164/pure-natural-honey-500x500.jpg"
                ></Image>
              </Flex>
              <Flex
                className="Blog_3"
                w={"100%"}
                direction={"column"}
                gap={"10px"}
              >
                <hr
                  style={{
                    width: "80%",
                    marginTop: "20px",
                    border: "2px solid rgb(161,160,158)",
                  }}
                ></hr>
                <Text w={"90%"} size={"18px"} fontWeight={"bold"}>
                  RECIPE FOR HOMEMADE HONEY CAKE THAT WILL NOT LEAVE ANYONE
                  INDIFFERENT
                </Text>
                <Text size={"12px"} color="rgb(192,192,192)">
                  Jan 10, 2023
                </Text>
                <Image
                  w={"80%"}
                  h={"50%"}
                  src="https://st2.depositphotos.com/1000141/5492/i/950/depositphotos_54925987-stock-photo-fresh-honey.jpg"
                ></Image>
              </Flex>
            </Flex>
            <Flex w={"100%"}>
              <Button
                zIndex={"100"}
                onClick={() => {
                  navigate("/blog");
                }}
                position={"relative"}
                border={"1px solid black"}
                borderRadius={"30px"}
                variant="outline"
              >
                LEARN MORE
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <hr
                style={{
                  width: "80%",
                  marginTop: "20px",
                  border: "2px solid rgb(161,160,158)",
                }}
              ></hr>
            </Flex>
          </Box>
        </Box>

        <Box
          style={{ scrollSnapAlign: "start" }}
          w={"100%"}
          bgColor={"rgb(25,94,73)"}
          h={"100vh"}
          className="main_body4"
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
};

export default LandingPage;




