import { Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Appcontext } from '../ContextProvider/AppcontextProvider'

const Pagination = () => {
    let {setPage,page}=useContext(Appcontext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
      <Button onClick={()=>{
        setPage(1)
      }}>1</Button>
      <Button onClick={()=>{
        setPage(2)
      }}>2</Button>
      <Button onClick={()=>{
        setPage(3)
      }}>3</Button>
      <Button onClick={()=>{
        setPage(4)
      }}>4</Button>
    </Flex>
  )
}

export default Pagination
