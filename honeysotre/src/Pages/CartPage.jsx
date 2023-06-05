import { Box, Button, Flex, Heading,HStack,Input,Text, VStack,Checkbox,Image, Center } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Appcontext } from '../ContextProvider/AppcontextProvider';

const CartPage = () => {

  let navigate=useNavigate();

  let [state,setstate]=useState("first");
  let [name,setname]=useState("");
  let [phone,setphone]=useState("");
  let [email,setemail]=useState("");
  let [address,setaddress]=useState("");
  let [allitems,setallitems]=useState([]);
  let[total,setTotal]=useState(0);
  let {cart,setCart,page,setPage,itemwithquant,setitemwithquant,totalPrice,settotalPrice}=useContext(Appcontext);

  let getdata=async()=>{
    let res=await fetch('http://localhost:8080/products');
    let jdata=await res.json();
    let arr=[];
    for(let i=0;i<cart.length;i++){
       let x=jdata.filter((e,ind)=>{
        return cart[i]==e.id
       });

      let id=cart[i];
      let q=itemwithquant.filter((ele,ind)=>{
        return ele.id===id
      })
       arr.push({...x[0],quantity:q[0].quantity});
    }


    for(let i=0;i<itemwithquant;i++){
      let x=itemwithquant[i].id;
      if(arr.includes(x)){

      }
    }
    setallitems(arr);
   
  }
  console.log(allitems)


  useEffect(()=>{
getdata()

  },[])


  return (
    <>
  {
    cart.length>0?   <Flex w={"100%"} >
<Box className='left' w={"50%"}>
<Heading fontSize={"20px"}>LET IT BEE.CO</Heading>

 <HStack w={"100%"} mt="20px" p={"50px"}>
              <Link to=""><Text>DELIVERY /</Text></Link>
              <Link to=""><Text>DETAILS</Text></Link>
              <Link to=""><Text color="green">CONFIRMATION AND PAYMENT</Text></Link>
            </HStack>
<br></br>
     {state=="first"&&   <Box >    <VStack>
              <Input w={"50%"}placeholder='DELIVER CITY' border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
              <Input w={"50%"}placeholder='POSTAL CODE' border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
              <Input w={"50%"}placeholder='ADDRESS' border={"none"} onChange={(e)=>{
                setaddress(e.target.value)
              }} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
            </VStack>
            <br></br>
            <Flex  justifyContent={"center"} gap={"50px"}>
              <Button  variant={"outline"} borderRadius={"30px"} colorScheme='green' onClick={()=>{
                navigate("/products")
              }}>Back</Button>
              <Button  color={"white"} borderRadius={"30px"} background={"rgb(23,83,66)"} onClick={()=>{
               setstate("second")
              }} 
              _hover={{bg:"rgb(241,80,29)",color:"white"}}>Proceed</Button>
            </Flex>
            </Box>
            }
            {state==="second" && 
            <Box>
            <VStack>
              <Input w={"50%"}placeholder='Name'  onChange={(e)=>{
                setname(e.target.value)
              }} border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
              <Input w={"50%"} onChange={(e)=>{
                setemail(e.target.value)
              }} placeholder='email' type='email' border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
              <Input w={"50%"} onChange={(e)=>{
                setphone(e.target.value)
              }} placeholder='phone' type='number' border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
            </VStack>
            <br></br>
            <Flex  justifyContent={"center"} gap={"50px"}>
              <Button variant={"outline"} borderRadius={"30px"} colorScheme='green' onClick={()=>{
               setstate("first")
              }}>Back</Button>
              <Button color={"white"} borderRadius={"30px"} background={"rgb(23,83,66)"} onClick={()=>{
                setstate("third")
              }}
              _hover={{bg:"rgb(241,80,29)",color:"white"}}
              >Proceed</Button>
            </Flex>
            </Box>
            }


  

{state==="third" && <Box padding={"50px"}>
            <Flex>Name : <Text>{name}</Text> </Flex>
<Flex>Phone Number : <Text>{phone}</Text> </Flex>
<Flex>Email : <Text>{email}</Text> </Flex>
<Flex>Address : <Text>{address}</Text> </Flex>
<br></br>
<hr style={{border:"2px solid green",width:"100%",margin:"auto"}}  ></hr>
<br></br>
<HStack>
  <Text>Payment method : </Text>
  <Text>Credit Card</Text><Checkbox/>
  <Text>Debit Card</Text><Checkbox/>
</HStack>

<br></br>
<Flex  justifyContent={"center"} gap={"50px"}>
              <Button variant={"outline"} borderRadius={"30px"} colorScheme='green' onClick={()=>{
                setstate("second")
              }}>Back</Button>
              <Button color={"white"} borderRadius={"30px"} background={"rgb(23,83,66)"} onClick={()=>{
setstate("final")
              }}
              _hover={{bg:"rgb(241,80,29)",color:"white"}}>Proceed</Button>
            </Flex>

</Box>
}


{
  state==="final" &&  <Box >

  <VStack>
              <Input w={"50%"}placeholder='Card Number'type='number'  border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
              <Input w={"50%"}  placeholder='MM/YYYY'   border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
              <Input w={"50%"} placeholder='CVV' type='password' border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
                <Input w={"50%"} placeholder='CardHolder Name'  border={"none"} borderBottom={"1px solid green"} borderRadius={"0"} required></Input>
            </VStack>
            <br></br>
            <Flex  justifyContent={"center"} gap={"50px"}>
              <Button variant={"outline"} borderRadius={"30px"} colorScheme='green' onClick={()=>{
               setstate("third")
              }}>Back</Button>
              <Button color={"white"} borderRadius={"30px"} background={"rgb(23,83,66)"} onClick={()=>{
                setCart([]);
                setitemwithquant([]);
               navigate("/payment")
              }}
              _hover={{bg:"rgb(241,80,29)",color:"white"}}
              >Proceed</Button>
            </Flex>
  </Box>
}

         


</Box>
<Box className='right' w={"50%"} background={"rgb(23,83,66)"} h={"100vh"} color={"white"} overflowY={"scroll"} p={"30px "}>

<Flex>Your Order:&nbsp; <Text>{cart.length}</Text></Flex>
<br></br>
 {
  allitems.map((e,i)=>{
   return <Box key={i}>
   <hr style={{border:"1px solid white"}}></hr>
  <br></br>
  <Flex gap={"20px"}>
    <Image w={"20%"} h={"20%"} src={e.image} ></Image>
    <Flex justifyContent={"space-between"} w={"100%"} >
      <Flex direction={"column"} justifyContent={"space-between"} >
        <Box>{e.productName}</Box>
        <Box>Quantity : {e.quantity}</Box>
      </Flex>
      <Flex>Rs. {e.price}</Flex>
    </Flex>
  </Flex>
  <br></br>
 </Box>
  })
 }
 <Box w={"100%"}   background={"rgb(23,83,66)"}>
  <hr></hr>
  <Flex justifyContent={"space-between"} w={"100%"}>
    <Text>Total : </Text>
    <Text>Rs. {totalPrice}</Text>
  </Flex>
  <hr></hr>
  <br></br>
  <Flex justifyContent={"space-between"} w={"100%"}>
  <Text>Delivery charge : </Text>
    <Text>{totalPrice>500?"FREE":200}</Text>
  </Flex>
  <hr></hr>
  <br></br>
  <Flex fontSize={"25px"} fontWeight={"bold"} justifyContent={"space-between"} w={"100%"}>
  <Text>Subtotal : </Text>
    <Text>Rs. {totalPrice>500?totalPrice:totalPrice+200}</Text>
  </Flex>
 </Box>

</Box>
       
        

 </Flex>:<>

  <Center>
    <Heading color={"purple"} >Cart is Empty !!! <Link style={{color:"blue"}} to={"/products"}>SHOP</Link></Heading>
    <Image src='https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg' w={"40%"}></Image>
  </Center>
 </>
  }
    </>
  )
}

export default CartPage
