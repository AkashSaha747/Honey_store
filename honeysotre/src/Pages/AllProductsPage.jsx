import React from 'react'
import {Box,Center,Flex, SimpleGrid,Image,Text, Heading} from '@chakra-ui/react'
const AllProductsPage = () => {
  return (
    <>
    <Box h={"88vh"} w={"100%"} p={"20px"}>
      <Flex  direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} >
        <Flex m={"auto"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
        <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} gap={"20px"} direction={["column","row","row"]}>
        <SimpleGrid columns={[1,1,2]}  gap={"20px"} justifyContent={"center"} alignItems={"center"}>
          <Flex direction="column" h={"250px"} bg={"red"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src="https://onlinegiftools.com/images/examples-onlinegiftools/sub-zero-mk-without-background.gif" w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>Name: chocolate with honey</Text>
            <Text>Rs. <span>{100}</span> </Text>
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
          <Flex direction="column" h={"250px"} bg={"yellow"} w={"250px"} alignItems={"center"} justifyContent={"center"}>
            <Image src="https://onlinegiftools.com/images/examples-onlinegiftools/sub-zero-mk-without-background.gif" w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"}> 
            <Text>chocolate with honey</Text>
            <Text>Rs. <span>{100}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",}}></hr>
          </Flex>
        </SimpleGrid>
        <Box w={["250px","250px","570px"]} h={["250px","250px","570px"]} bg={"pink"}>

        <Image src="https://onlinegiftools.com/images/examples-onlinegiftools/sub-zero-mk-without-background.gif" w={"80%"} ></Image>
            <hr style={{width:"90%",border:"2px solid black",margin:"auto"}}></hr>
            <Flex className='priceFullsection' justifyContent={"space-between"} p={"0px 30px"}> 
            <Text>chocolate with honey</Text>
            <Text>Rs. <span>{100}</span> </Text>
            </Flex>
            <hr style={{width:"90%",border:"2px solid black",margin:"auto"}}></hr>

        </Box>
        </Flex>
 
        </Flex>
<br></br>

        <Flex gap={"20px"} direction={["column","row","row"]}>
        <Box h={"250px"} bg={"blue"} w={"250px"}></Box>
        <Box display={["none","none","block"]} h={"250px"} bg={"white"} w={"250px"}></Box>
        <Box h={"250px"} bg={"red"} w={"250px"}></Box>
        <Box h={"250px"} bg={"yellow"} w={"250px"}></Box>
        </Flex>
        <br></br>
        
        <Flex gap={"20px"}  direction={["column","row","row"]}>
        <Box w={["250px","250px","570px"]} h={["250px","250px","570px"]} bg={"pink"}></Box>
        <Box>
        <SimpleGrid columns={[1,1,2]} gap={"20px"}>
          <Box h={"250px"} bg={"white"} display={["none","none","block"]} w={"250px"}></Box>
          <Box h={"250px"} bg={"red"} w={"250px"}></Box>
          <Box h={"250px"} bg={"yellow"} w={"250px"}></Box>
          <Box h={"250px"} bg={"white"} display={["none","none","block"]} w={"250px"}></Box>
        </SimpleGrid>
        </Box>
        </Flex>
      </Flex>
      <Box>
        Pagination component
      </Box>
    </Box>
    </>
  )
}

export default AllProductsPage
