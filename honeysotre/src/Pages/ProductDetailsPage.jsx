
import React from 'react'
import {Box,VStack,Text,Image,HStack, Center, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
const ProductDetailsPage = () => {
  return (
    <HStack w="100%" border="1px solid black" >
    {/* first box */}
   <Center  width="50%" h="100vh" backgroundColor=" #BEE3F8"  >
    <Image w="50%"  mt="40px" src="https://www.bing.com/th?id=OIP.sLc2BHOvnXbICJUiNVzkIgHaKQ&w=150&h=208&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></Image>
   </Center>
   {/* secomd box */}
   <Box    m="0px" p="0px" w="50%"   h="100vh">
    <Box width="85%"    m="auto">  
    <HStack  mt="20px"  >
       <Link to="/"><Text>MAIN PAGE /</Text></Link> 
       <Link to="/products"> <Text>PRODUCTS HONEY</Text></Link> 
        
       <Link to="/flower/id"> <Text color="green">FLOWER HONEY</Text></Link>
    </HStack>
        <Box>  
        <Text   fontSize='25px'  fontWeight="bold" mt="50px" >NAME BRAND/FLOWER</Text>
        <Text   mt="-10px" fontSize="25px" fontWeight="bold">HONEY FROM MASURIA</Text>
        </Box>
        <Box mt="30px" mb="30px">
        <hr />
           <HStack justifyContent="space-between" mt="5px" mb="5px">
            <p>Product weight 450 g</p>
            <p>₹450</p>
           </HStack>
        <hr  />
        </Box>
        <Box>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consectetur magnam cum eveniet  sunt iure, obcaecati in nostrum sed quam assumenda deleniti natus laboriosam totam? Suscipit laboriosam deserunt omnis fugiat, aliquid, minima pariatur voluptatibus expedita hic, distinctio id ad veniam. Fuga in quasi pariatur molestiae voluptatem non? Ipsam optio rem consequuntur, velit accusantium consectetur necessita.</p>
        </Box>
        <HStack>
           <Box>
             
           </Box>
           <Box >
           <HStack  mt="35px" >
             <Center  border="1px solid black" borderRadius="30px" mr="20px" h="35px" width="80px" >
                <button  style={{paddingRight:"10px"}} >-</button>
                <Text>1</Text>
                <button  style={{paddingLeft:"10px"}} >+</button>
             </Center>

             <Button backgroundColor='#22543D' variant='solid' pl="100px" pr="100px"   borderRadius="30px">
                    ADD TO CARD
                      </Button>
           </HStack>
           </Box>
        </HStack>
    </Box>
   </Box>
</HStack>
  )
}

export default ProductDetailsPage
