import { Box, Center, Flex, Heading,Badge, Spacer,Text,InputGroup,Input,InputRightElement,Button } from '@chakra-ui/react'
import React, { useState }  from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleButtonClick = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  let navigate=useNavigate();

  const handleSearch = () => {
    // console.log('Search query:', searchQuery);
  };


  const cartItemCount = 5;

  return (
    <Box border={"2px solid rgb(42,40,42)"} style={{width:"100%"}} h={"12vh"}>
      <Text style={{background:"rgb(47,47,47)",color:"white",width:"100%",textAlign:"center",}}> Free shipping on orders over 500 rupees </Text>
   
   
   
    <Flex style={{width:"80%",margin:"0px auto",padding:"0px",justifyContent:"space-between",alignItems:"center",}}>

      <Box onClick={()=>{
        navigate("/");
      }} borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"}  paddingRight={"10"}  h={"50px"}>
        <Heading>LET IT BEE.CO</Heading>
      </Box>

      <Box>

      {showSearchBar ? (
        <InputGroup >
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <InputRightElement width="4.5rem">
            <Button  size="sm" onClick={handleSearch}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      ):<Spacer/>}
      </Box>


      <Flex alignItems={"center"} justifyContent={"center"} gap={"40px"}>

        <Box onClick={handleButtonClick} pt={"10px"} pr={"30px"} pl={" 30px "} borderLeft={"2px solid black"} borderRight={"2px solid black"} h={"50px"} ><AiOutlineSearch  style={{fontSize:"30px"}}/></Box>

        <Box  h={"50px"} pt={"10px"}><MdOutlineAccountCircle  style={{fontSize:"30px",display:"flex",margin:"auto"}}/></Box>

        <Box borderLeft={"2px solid black"}  h={"50px"} borderRight={"2px solid black"} p={"0 30px "}>
      <Box position="relative" display="inline-block" >
        <Box
          color="white"
          borderRadius="full"
          boxSize="30px"
          textAlign="center"
          fontSize="sm"
          fontWeight="bold"
          position="absolute"
          top="8px"
          right="-7px"
          zIndex="docked"
        >
          <Badge borderRadius={"full"} background={"#F05A1F"}>{cartItemCount}</Badge>
        </Box>
        <Box
          w="50px"
          h="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          {/* Your cart icon here */
          <BsCart2 style={{fontSize:"30px"}}/>
          }
        </Box>
      </Box>
    </Box>

      </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar
