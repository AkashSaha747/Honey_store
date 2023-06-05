
import {
  Box, Flex, Heading, Text,
  Button,
  Image,
  Spacer,
  border,
  Checkbox,
  Center,
  HStack,
  VStack,
  Input,
} from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Contact = () => {

  const words = ["HONEY", "HONEY", "HONEY"];

  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[phone,setphone]=useState("");
  const[message,setmessage]=useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  let navigate = useNavigate();


  const aboutUsRef = useRef(null);
  const scrollToAboutUs = () => {
    navigate("/about-us");
  };
  const blogRef = useRef(null);
  const scrollToBlog = () => {
    // blogRef.current.scrollIntoView({ behavior: "smooth" });
    navigate("/blog");
  };

  const gotoproducts = () => {
    navigate("/products");
  }
  const gotocontacts = () => {
    navigate("/contact");
  }

  // -------------------------
  let arr = [
    "UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS",
    "UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: GRANOLA, HONEY BARS AND DESSERTS, HERBAL TEA",
    "UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS",
  ];

  function handlesubmit(){
    if(name!="" || email!="" || phone!="" || message!=""){
       alert("Form Submitted successfully!!")
    }else{
      alert("Please fill all details")
    }
  }

  return (
    <Box  h={"100vh"}
    className="full_height"
    style={{
      height: "230vh",
      // scrollSnapType: "y mandatory",
      overflowY: "hidden",
      scrollBehavior: "smooth",
    }}>
      {/* <Flex style={{ direction: "column", margin: "0px auto", width: "95%", justifyContent: "center", alignItems: "center", borderLeft: "2px solid black", borderRight: "2px solid black" }}>
        <img style={{ width: "100%", height: "400px" }} src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-yellow-simple-gourmet-nutrition-honey-e-commerce-food-banner-image_174514.jpg" alt="" />
      </Flex>
      <Box className='scroll-container' style={{ h: "50px", w: "100%", backgroundColor: "#f15a1e",display:"flex",justifyContent:"space-between",alignItems:"center", padding:"7px",border:"2px solid black" }}>
          
        <p className='scroll-text'>UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS: HONEY, GRANOLA, CHOCOLATE AND BARS  UNIQUE TASTE, UNIQUE AROMA OF RAW HONEY AND ORGANIC PRODUCTS:</p>
      </Box> */}

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
                      color="rgb(49,49,49)"
                      backgroundColor={
                        ["white", "#F9AE05", "#185E49"][index]
                      }
                    >


                      <Box
                        fontSize={["4rem", "6rem", "13rem"]}
                        mt={"-100px"}
                        fontFamily={"sans-serif"}
                      >
                        CONTACTS

                      </Box>
                      <Text fontFamily={"Brush script MT"}>for friends of bees</Text>
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
                <Text onClick={gotoproducts}>Products</Text>
                <Text onClick={scrollToAboutUs}>Abou Us</Text>
                <Text onClick={scrollToBlog}>Our Blog</Text>
                <Text onClick={gotocontacts}>Contacts</Text>
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

      <Flex style={{  direction: "column", margin: "0px auto", width: "95%", justifyContent: "space-evenly", alignItems: "center", borderLeft: "2px solid grey", borderRight: "2px solid grey" }}>
        <Box  style={{ height:"50vh", display:"flex", flexDirection:"column", justifyContent:"space-evenly" , marginTop:"50px",width:"450px"}}>
          <Heading>HELLO! WE WOULD LOVE TO HEAR FROM YOU!</Heading>
          <p>PLEASE FEEL FREE TO SEND US EMAIL AND WE WEILL GET BACK TO YOU :)</p>
          <Text fontSize={["20px", "26px", "32px"]} color={"#195e49"} fontFamily={"Brush script MT"}>let's be friends?</Text>
        </Box>

        <Flex direction={"column"} gap={"5px"}>
          <input style={{borderBottom:"2px solid grey",width:"450px"}} type="text" placeholder='NAME' onChange={(e)=>{setname(e.target.value)}}/> <br />
          <input style={{borderBottom:"2px solid grey",width:"450px"}} type="text" placeholder='EMAIL' onChange={(e)=>{setemail(e.target.value)}}/> <br />
          <input style={{borderBottom:"2px solid grey",width:"450px"}} type="text" placeholder='PHONE' onChange={(e)=>{setphone(e.target.value)}}/> <br />
          <textarea style={{borderBottom:"2px solid grey",width:"450px"}} placeholder='MESSAGE' onChange={(e)=>{setmessage(e.target.value)}}/>  <br />
          <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
            <hr style={{width:"60%", borderBottom:"2px solid grey"}}/>
          <Button variant={"outline"} borderRadius={"25px"} border={"1px solid black"} onClick={handlesubmit}>SEND FORM</Button>
          </Flex>
        </Flex>
      </Flex>

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
  )
}

export default Contact
