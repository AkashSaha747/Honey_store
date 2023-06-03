import React, { useContext, useEffect, useState } from 'react'
import {Box,Center,Flex, SimpleGrid,Image,Text, Heading} from '@chakra-ui/react'
import Pagination from '../Components/Pagination';
import { Appcontext } from '../ContextProvider/AppcontextProvider';
import { useNavigate } from 'react-router-dom';
const AllProductsPage = () => {
let navigate=useNavigate();
let [data,setdata]=useState([]);
let{page}=useContext(Appcontext);
let getdata=async()=>{
  let res=await fetch(`http://localhost:8080/products?_limit=9&_page=${page}`);
  let jdata=await res.json();
  console.log(jdata);
  setdata(jdata);
}
let d=useContext(Appcontext);

  useEffect(()=>{
getdata();
console.log(d);
  },[page]);

  let clickonasingleitem=(id)=>{
    // go to single product page
    navigate(`/products/${id}`);
  }



  return (
    <>
    {data.length>0?
    <Box h={"88vh"} w={"100%"} p={"20px"}>
      <Flex  direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} >
        <Flex m={"auto"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
        <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
        <SimpleGrid columns={[1,1,2]}  gap={"20px"} justifyContent={"center"} alignItems={"center"}>
          <Flex className='item1' onClick={()=>{
            clickonasingleitem(data[0].id)
          }}  direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[0].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>Name: chocolate with honey</Text>
            <Text>Rs. <span>{data[0].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
          <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}>
            <Heading>All Products</Heading>
          </Box>
          <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}>
            <Heading fontFamily={"Brush Script MT"} height={"100%"} w={"100%"} textAlign={"center"}>
              New Flavour!
            </Heading>
          </Box>
          <Flex className='item2'  onClick={()=>{
            clickonasingleitem(data[1].id)
          }} direction="column" h={"250px"} bg={"yellow"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[1].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>chocolate with honey</Text>
            <Text>Rs. <span>{data[1].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
        </SimpleGrid>
        <Box className='item3'  onClick={()=>{
            clickonasingleitem(data[2].id)
          }} w={["250px","250px","570px"]} h={["250px","250px","570px"]} bg={"pink"}>

        <Image src={data[2].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",margin:"auto"}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
            <Text>chocolate with honey</Text>
            <Text>Rs. <span>{data[2].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",margin:"auto"}}></hr>

        </Box>
        </Flex>
 
        </Flex>
<br></br>

        <Flex gap={"20px"} direction={["column","row","row"]}>
        <Box h={"250px"} bg={"blue"} w={"250px"}  onClick={()=>{
            clickonasingleitem(data[3].id)
          }} className='item4'>
        <Flex className='item1' direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[3].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>Name: chocolate with honey</Text>
            <Text>Rs. <span>{data[3].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
        </Box>
        <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}></Box>
        <Box h={"250px"} bg={"red"} w={"250px"} className='item5'  onClick={()=>{
            clickonasingleitem(data[4].id)
          }}>
        <Flex className='item1' direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[4].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>Name: chocolate with honey</Text>
            <Text>Rs. <span>{data[4].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
        </Box>
        <Box h={"250px"} bg={"yellow"} w={"250px"} className='item6' onClick={()=>{
            clickonasingleitem(data[5].id)
          }}>
        <Flex className='item1' direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[5].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text> chocolate with honey</Text>
            <Text>Rs. <span>{data[5].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
        </Box>
        </Flex>
        <br></br>
        
        <Flex gap={"20px"}  direction={["column","row","row"]}>
        <Box w={["250px","250px","570px"]} h={["250px","250px","570px"]} bg={"pink"} onClick={()=>{
            clickonasingleitem(data[6].id)
          }} className='item7'>
            <Image src={data[6].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
            <Text>Name: chocolate with honey</Text>
            <Text>Rs. <span>{data[6].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
        </Box>
        <Box>
        <SimpleGrid columns={[1,1,2]} gap={"20px"}>
          <Box h={"250px"} bg={"white"} display={["none","none","block"]} w={"250px"}></Box>
          <Box h={"250px"} bg={"red"} w={"250px"} className='item8' onClick={()=>{
            clickonasingleitem(data[7].id)
          }}>
          <Flex className='item1' direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[7].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>chocolate with honey</Text>
            <Text>Rs. <span>{data[7].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>

          </Box>
          <Box h={"250px"} className='item9' bg={"yellow"} w={"250px"} onClick={()=>{
            clickonasingleitem(data[8].id)
          }}>
          <Flex className='item1' direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src={data[8].image} w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>Name: chocolate with honey</Text>
            <Text>Rs. <span>{data[8].price}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
          </Box>
          <Box h={"250px"}  bg={"white"} display={["none","none","block"]} w={"250px"}></Box>
        </SimpleGrid>
        </Box>
        </Flex>
      </Flex>
      <Box>
      <br></br>
<Pagination/>
<br></br>
      </Box>
    </Box>:<Heading>...loading</Heading>}
    </>
  )
}

export default AllProductsPage
