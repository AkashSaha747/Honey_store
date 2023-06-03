import { Box ,HStack,Text,Center, VStack} from '@chakra-ui/react'
import React from 'react'

function AboutUsPage() {
  return (
    <Box>
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
      
    
  )
}

export default AboutUsPage

