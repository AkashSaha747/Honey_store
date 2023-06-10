// import React, { useContext, useEffect, useState } from 'react'
// import {Box,Center,Flex, SimpleGrid,Image,Text, Heading, Skeleton, HStack, Stack, Select,Modal,useDisclosure, ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter,Button} from '@chakra-ui/react'
// import Pagination from '../Components/Pagination';
// import { Appcontext } from '../ContextProvider/AppcontextProvider';
// import { useNavigate } from 'react-router-dom';
// import { AddIcon } from '@chakra-ui/icons';
// const AllProductsPage = () => {
// let navigate=useNavigate();
// let [data,setdata]=useState([]);
// let [filter,setFilter]=useState("");
// let{page}=useContext(Appcontext);
// const { isOpen, onOpen, onClose } = useDisclosure()
// let getdata=async()=>{
//  if(filter!=""){
//   let res=await fetch(`http://localhost:8080/products?_limit=9&_page=${page}&_sort=price&_order=${filter}`);
//   let jdata=await res.json();
//   console.log(jdata);
//   setdata(jdata);
//  }else{
//   let res=await fetch(`http://localhost:8080/products?_limit=9&_page=${page}`);
//   let jdata=await res.json();
//   console.log(jdata);
//   setdata(jdata);
//  }
// }
// let d=useContext(Appcontext);


//   useEffect(()=>{
// getdata();
// console.log(d);
//   },[page,filter]);

//   let clickonasingleitem=(id)=>{
//     // go to single product page
//     navigate(`/products/${id}`);
//   }



//   return (<>
//  <Box>
//     {data.length>0?
//     <Box h={"88vh"} w={"100%"} p={"20px"}>
//     <Box margin={"left"}>
//    <Flex alignItems={"center"}  gap={"5px"}><AddIcon onClick={onOpen}>Open Modal</AddIcon><Text>Sort</Text> </Flex> 

// <Modal isOpen={isOpen} onClose={onClose}>
//   <ModalOverlay />
//   <ModalContent>
//     <ModalHeader>Sort by Price</ModalHeader>
//     <ModalCloseButton />
//     <ModalBody>
//       <Select onChange={(e)=>{
//         setFilter(e.target.value)
//       }}>
//         <option value={""}>Sort By Price</option>
//         <option value={"asc"}>Price Low to High</option>
//         <option value={"desc"}>Price High to Low</option>
//         <option value={""}>Default</option>
//       </Select>
//     </ModalBody>

//     <ModalFooter>
//       <Button colorScheme='blue' mr={3} onClick={onClose}>
//         Close
//       </Button>
//     </ModalFooter>
//   </ModalContent>
// </Modal>
//     </Box>
//       <Flex  direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} >
//         <Flex m={"auto"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
//         <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
//         <SimpleGrid columns={[1,1,2]}  gap={"20px"} justifyContent={"center"} alignItems={"center"}>
//           <Flex className='item1' onClick={()=>{
//             clickonasingleitem(data[0].id)
//           }}  direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image src={data[0].image} w={"80%"} h={"100%"}></Image>
//             <br></br>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text>chocolate honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[0].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>
//           <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}>
//             <Center h={"100%"} w={"100%"} fontSize={"30px"} fontWeight={"bold"}>All Products</Center>
//           </Box>
//           <Flex  display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}>
//             <Flex justifyContent={"center"} alignItems={"center"} fontFamily={"Brush Script MT"}  w={"100%"} h={"100%"} fontSize={"40px"} fontWeight={"bold"}>
//               New Flavour!
//             </Flex>
//           </Flex>
//           <Flex className='item2'  onClick={()=>{
//             clickonasingleitem(data[1].id)
//           }} direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image src={data[1].image} w={"80%"} h={"100%"}></Image>
//             <br></br>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text>chocolate with honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[1].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>
//         </SimpleGrid>
//         <Box className='item3'  onClick={()=>{
//             clickonasingleitem(data[2].id)
//           }} w={["250px","250px","570px"]} h={["250px","250px","570px"]}  >

//         <Image src={data[2].image} w={"80%"}  m={"auto"} h={"80%"}></Image>
//         <br></br>

//             <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
//             <Text>chocolate honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[2].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>

//         </Box>
//         </Flex>
 
//         </Flex>
// <br></br>
// <br></br>

//         <Flex gap={"20px"} direction={["column","row","row"]}>
//         <Box h={"250px"} w={"250px"}  onClick={()=>{
//             clickonasingleitem(data[3].id)
//           }} className='item4'>
//         <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image src={data[3].image} w={"80%"} h={"100%"}></Image>
//             <br></br>

//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text> chocolate honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[3].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>
//         </Box>
//         <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}></Box>
//         <Box h={"250px"}  w={"250px"} className='item5'  onClick={()=>{
//             clickonasingleitem(data[4].id)
//           }}>
//         <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image src={data[4].image} h={"100%"} w={"80%"} ></Image>
//             <br></br>

//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text>Real honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[4].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>
//         </Box>
//         <Box h={"250px"}  w={"250px"} className='item6' onClick={()=>{
//             clickonasingleitem(data[5].id)
//           }}>
//         <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image h={"100%"} src={data[5].image} w={"80%"} ></Image>
//             <br></br>

//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text> mango with honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[5].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>
//         </Box>
//         </Flex>
//         <br></br>
//         <br></br>
        
//         <Flex gap={"20px"}  direction={["column","row","row"]}>
//         <Box w={["250px","250px","570px"]} h={["250px","250px","570px"]}  onClick={()=>{
//             clickonasingleitem(data[6].id)
//           }} className='item7'>
//             <Image h={"80%"} src={data[6].image} w={"80%"} m={"auto"} ></Image>
//             <br></br>

//             <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>

//             <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
//             <Text>Name: strawberry with honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[6].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>

//         </Box>
//         <Box>
//         <SimpleGrid columns={[1,1,2]} gap={"20px"}>
//           <Box h={"250px"} bg={"white"} display={["none","none","block"]} w={"250px"}></Box>
//           <Box h={"250px"} w={"250px"} className='item8' onClick={()=>{
//             clickonasingleitem(data[7].id)
//           }}>
//           <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image h={"100%"} src={data[7].image} w={"80%"}  ></Image>
//             <br></br>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text>Sweet honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[7].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>

//           </Box>
//           <Box h={"250px"} className='item9'  w={"250px"} onClick={()=>{
//             clickonasingleitem(data[8].id)
//           }}>
//           <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
//             <Image h={"100%"} src={data[8].image} w={"80%"} ></Image>
//             <br></br>

//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//             <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
//             <Text>Milk with honey</Text>
//             <Text>Rs. <span style={{fontWeight:"bold"}}>{data[8].price}</span> </Text>
//             </Flex>
//             <hr style={{width:"90%",border:"1px solid black",}}></hr>
//           </Flex>
//           </Box>
//           <Box h={"250px"}  bg={"white"} display={["none","none","block"]} w={"250px"}><Center fontWeight={"bold"} fontSize={"32px"} fontFamily={"Brush script MT"} h={"100%"}>100% Natural and Organic</Center></Box>
//         </SimpleGrid>
//         </Box>
//         </Flex>
//       </Flex>
//       <Box>
//       <br></br>
//       <br></br>

// <Pagination/>
// <br></br>
//       </Box>
//     </Box>:<Box>
//     <br></br>
//     <SimpleGrid columns={"3"} gap={"40px"}>
//   <Skeleton height='250px' />
//   <Skeleton height='250px' />
//   <Skeleton height='250px' />
// </SimpleGrid>
//     <Center>
//       <Heading fontFamily={"Brush script MT"}> Loading data ...</Heading>
//     </Center>
 
//     </Box>}
//     </Box> 

    

    
//   </>
    
//   )
// }

// export default AllProductsPage













import React, { useContext, useEffect, useState,useRef } from 'react'
import {Box,Center,Flex, SimpleGrid,Image,Text,Input,Checkbox, Heading, Skeleton, HStack, Stack, Select,Modal,useDisclosure, ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter,Button} from '@chakra-ui/react'
import Pagination from '../Components/Pagination';
import { Appcontext } from '../ContextProvider/AppcontextProvider';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
const AllProductsPage = () => {


let navigate=useNavigate();
let [data,setdata]=useState([]);
let [filter,setFilter]=useState("");
let{page}=useContext(Appcontext);
const { isOpen, onOpen, onClose } = useDisclosure()
let getdata=async()=>{
 if(filter!=""){
  let res=await fetch(`https://honey-store-json.onrender.com/products?_limit=9&_page=${page}&_sort=price&_order=${filter}`);
  let jdata=await res.json();
  console.log(jdata);
  setdata(jdata);
 }else{
  let res=await fetch(`https://honey-store-json.onrender.com/products?_limit=9&_page=${page}`);
  let jdata=await res.json();
  console.log(jdata);
  setdata(jdata);
 }
}
let d=useContext(Appcontext);


  useEffect(()=>{
getdata();
console.log(d);
  },[page,filter]);

  let clickonasingleitem=(id)=>{
    // go to single product page
    navigate(`/products/${id}`);
  }


  const words = ["HONEY", "HONEY", "HONEY"];

  const [currentIndex, setCurrentIndex] = useState(0);

  

  const aboutUsRef = useRef(null);
  const scrollToAboutUs = () => {
    navigate("/about-us");
  };
  const blogRef = useRef(null);
  const scrollToBlog = () => {
    // blogRef.current.scrollIntoView({ behavior: "smooth" });
    navigate("/blog");
  };

  const gotoproducts=()=>{
    navigate("/products");
  }
  const gotocontacts=()=>{
    navigate("/contact");
  }

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
          // scrollSnapType: "y mandatory",
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
                        color="rgb(49,49,49)"
                        backgroundColor={
                          ["white", "#F9AE05", "#185E49"][index]
                        }
                      >
               <Text fontFamily={"Brush script MT"} position={"absolute"} top={"60px"}>all our natural </Text>
                       
                        <Box
                          fontSize={["2rem","4rem","10rem"]}
                          mt={"-100px"}
                          fontFamily={"sans-serif"}
                        >
                          PRODUCTS
                         
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

     
        <Box style={{ scrollSnapAlign: "start" }} className="main_body1" p={"30px 50px"}>
    
    

        <Box >
    {data.length>0?
    <Box  w={"100%"} p={"20px"}>
    <Box margin={"left"}>
   <Flex alignItems={"center"}  gap={"5px"}><AddIcon onClick={onOpen}>Open Modal</AddIcon><Text>Sort</Text> </Flex> 

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Sort by Price</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Select onChange={(e)=>{
        setFilter(e.target.value)
      }}>
        <option value={""}>Sort By Price</option>
        <option value={"asc"}>Price Low to High</option>
        <option value={"desc"}>Price High to Low</option>
        <option value={""}>Default</option>
      </Select>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </Box>
      <Flex  direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} >
        <Flex m={"auto"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
        <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
        <SimpleGrid columns={[1,1,2]}  gap={"20px"} justifyContent={"center"} alignItems={"center"}>
          <Flex className='item1' onClick={()=>{
            clickonasingleitem(data[0].id)
          }}  direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[0].image} w={"80%"} h={"100%"}></Image>
            <br></br>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text>chocolate honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[0].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>
          <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}>
            <Center h={"100%"} w={"100%"} fontSize={"30px"} fontWeight={"bold"}>All Products</Center>
          </Box>
          <Flex  display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}>
            <Flex justifyContent={"center"} alignItems={"center"} fontFamily={"Brush Script MT"}  w={"100%"} h={"100%"} fontSize={"40px"} fontWeight={"bold"}>
              New Flavour!
            </Flex>
          </Flex>
          <Flex className='item2'  onClick={()=>{
            clickonasingleitem(data[1].id)
          }} direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[1].image} w={"80%"} h={"100%"}></Image>
            <br></br>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text>chocolate with honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[1].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>
        </SimpleGrid>
        <Box className='item3'  onClick={()=>{
            clickonasingleitem(data[2].id)
          }} w={["250px","250px","570px"]} h={["250px","250px","570px"]}  >

        <Image src={data[2].image} w={"80%"}  m={"auto"} h={"80%"}></Image>
        <br></br>

            <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
            <Text>chocolate honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[2].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>

        </Box>
        </Flex>
 
        </Flex>
<br></br>
<br></br>

        <Flex gap={"20px"} direction={["column","row","row"]}>
        <Box h={"250px"} w={"250px"}  onClick={()=>{
            clickonasingleitem(data[3].id)
          }} className='item4'>
        <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[3].image} w={"80%"} h={"100%"}></Image>
            <br></br>

            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text> chocolate honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[3].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>
        </Box>
        <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}></Box>
        <Box h={"250px"}  w={"250px"} className='item5'  onClick={()=>{
            clickonasingleitem(data[4].id)
          }}>
        <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[4].image} h={"100%"} w={"80%"} ></Image>
            <br></br>

            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text>Real honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[4].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>
        </Box>
        <Box h={"250px"}  w={"250px"} className='item6' onClick={()=>{
            clickonasingleitem(data[5].id)
          }}>
        <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image h={"100%"} src={data[5].image} w={"80%"} ></Image>
            <br></br>

            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text> mango with honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[5].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>
        </Box>
        </Flex>
        <br></br>
        <br></br>
        
        <Flex gap={"20px"}  direction={["column","row","row"]}>
        <Box w={["250px","250px","570px"]} h={["250px","250px","570px"]}  onClick={()=>{
            clickonasingleitem(data[6].id)
          }} className='item7'>
            <Image h={"80%"} src={data[6].image} w={"80%"} m={"auto"} ></Image>
            <br></br>

            <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>

            <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
            <Text>Name: strawberry with honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[6].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",margin:"auto"}}></hr>

        </Box>
        <Box>
        <SimpleGrid columns={[1,1,2]} gap={"20px"}>
          <Box h={"250px"} bg={"white"} display={["none","none","block"]} w={"250px"}></Box>
          <Box h={"250px"} w={"250px"} className='item8' onClick={()=>{
            clickonasingleitem(data[7].id)
          }}>
          <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image h={"100%"} src={data[7].image} w={"80%"}  ></Image>
            <br></br>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text>Sweet honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[7].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>

          </Box>
          <Box h={"250px"} className='item9'  w={"250px"} onClick={()=>{
            clickonasingleitem(data[8].id)
          }}>
          <Flex className='item1' direction="column" h={"250px"}  w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image h={"100%"} src={data[8].image} w={"80%"} ></Image>
            <br></br>

            <hr style={{width:"90%",border:"1px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} w={"90%"}> 
            <Text>Milk with honey</Text>
            <Text>Rs. <span style={{fontWeight:"bold"}}>{data[8].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"1px solid black",}}></hr>
          </Flex>
          </Box>
          <Box h={"250px"}  bg={"white"} display={["none","none","block"]} w={"250px"}><Center fontWeight={"bold"} fontSize={"32px"} fontFamily={"Brush script MT"} h={"100%"}>100% Natural and Organic</Center></Box>
        </SimpleGrid>
        </Box>
        </Flex>
      </Flex>
      <Box>
      <br></br>
      <br></br>

<Pagination/>

<br></br>
      <br></br>
      <br></br>

      </Box>
    </Box>:<Box>
    <br></br>
    <SimpleGrid columns={"3"} gap={"40px"}>
  <Skeleton height='250px' />
  <Skeleton height='250px' />
  <Skeleton height='250px' />
</SimpleGrid>
    <Center>
      <Heading fontFamily={"Brush script MT"}> Loading data ...</Heading>
    </Center>
 
    </Box>}
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

export default AllProductsPage

