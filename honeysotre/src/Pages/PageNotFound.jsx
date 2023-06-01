import React from 'react'
import { Box, Button, Center, Flex, Text,Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
  let navigate=useNavigate();
  return (
    <Flex  w={"40%"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} m={" 40px auto"} gap={"20px"}>
    <Image src='https://cdn.discordapp.com/attachments/1100180350879154326/1113752777345208350/image.png'></Image> 
    <Text fontWeight={"bold"}>OOPS... THE REQUESTED PAGE DOES NOT EXIST</Text>
    <Button colorScheme='teal' variant='outline' borderRadius={"20px"} w={"30%"} onClick={()=>{
navigate("/");
    }}>GO BACK</Button>
    </Flex>
  )
}

export default PageNotFound
