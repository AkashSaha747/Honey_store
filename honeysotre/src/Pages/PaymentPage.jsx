// import { Box, Button, Checkbox, Flex, Heading,HStack,Input,Spacer,Text, VStack,Image } from '@chakra-ui/react'
// import React, { useContext } from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { Appcontext } from '../ContextProvider/AppcontextProvider';

// const PaymentPage = () => {
// // NOTE THIS IS PAYMENT SUCCESSFUL PAGE
//   let navigate=useNavigate();

//   let {cart}=useContext(Appcontext);
//   return (
//     <>
//   <Flex w={"100%"} >
//     <Box w={"60%"} p={"50px"}>
//       <Flex direction={"column"}>
//         <Heading size={"md"}>LET IT BEE.CO</Heading>
//         <br></br>
//         <br></br>
//         <Heading>Thank You FOr Your Order :) </Heading>
//         <br></br>
//         <Text> Please visit again ... </Text>

//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <Button borderRadius={"30px"} m={"auto"} w={"40%"} background={"rgb(23,83,66)"} color='white'>BACK TO MAIN PAGE</Button>
//       </Flex>
//     </Box>
//     <Box w={"40%"} >
//       <Image w={"100%"} h={"88vh"}  src="https://cdn.discordapp.com/attachments/1100180350879154326/1114962765027741766/image.png"></Image>
//     </Box>
//   </Flex>
//     </>
//   )
// }

// export default PaymentPage









import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, HStack, Input, Spacer, Text, VStack, Image } from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Appcontext } from '../ContextProvider/AppcontextProvider';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(Appcontext);
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
   setTimeout(() => {
     setAnimationStarted(true);
   }, 1000);
  }, []);

  return (
    <>
      <Flex w={'100%'}>
        <Box w={'60%'} p={'50px'}>
          <Flex direction={'column'}>
            <Heading size={'md'}>LET IT BEE.CO</Heading>
            <br />
            <br />
            <Heading>Thank You For Your Order :)</Heading>
            <br />
            <Text>Please visit again...</Text>

            <br />
            <br />
            <br />
            <br />
            <Button onClick={()=>{
navigate("/")
            }} borderRadius={'30px'} m={'auto'} w={'40%'} background={'rgb(23,83,66)'} color="white">
              BACK TO MAIN PAGE
            </Button>
          </Flex>
        </Box>
        <Box w={'40%'}>
          <Image
            w={'100%'}
            h={'88vh'}
            src="https://cdn.discordapp.com/attachments/1100180350879154326/1114962765027741766/image.png"
          />
        </Box>
      </Flex>
      <Box overflow="hidden">
        <Text
          fontSize="30px"
          fontWeight="bold"
          color="red"
          position="absolute"
          fontFamily={"Brush script MT"}
          top="90%"
          left={animationStarted ? '80%' : '20%'}
          transform="translate(-40%, -50%)"
          transition="left 10s linear"
        >
         Thanks For Ordering
        </Text>
      </Box>
    </>
  );
};

export default PaymentPage;






