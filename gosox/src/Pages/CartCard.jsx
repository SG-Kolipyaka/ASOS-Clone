import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    // Icon,
    chakra,
    Tooltip,
    // SimpleGrid 
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
//   import { FiShoppingCart } from 'react-icons/fi';
  
  function Rating({ rating, numReviews }) {
    return (
      <Box d="flex" alignItems="center" >
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
//   ,DeleteOpe
// ,quantity,handelquantity
  function CartCard({data,quantity,handelquantity,DeleteOpe}) {
    return (
        // <SimpleGrid  columns={[1, 2, 3, 4, 5, 6]} spacing={3}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
        //   width="100%"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
           )} 
  
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            width="100%"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="1.9xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}  >
                 
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={data.rating} numReviews={data.numReviews}/>
              <Box fontSize="2xl" color={useColorModeValue('gray.1000', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
          {/* onClick={()=>DeleteOpe(data.id)} */}

    <button  style={{backgroundColor:"brown",color:"white",width:"26%",height:"40px",borderRadius:"10px",marginBottom:"10px"}} onClick={()=>DeleteOpe(data.id)}>Remove</button> 
           <br/>
     <button  style={{backgroundColor:"teal",color:"black",width:"15%",height:"30px",borderRadius:"10px",marginBottom:"10px",marginRight:"25px"}} onClick={()=>handelquantity(data.id,-1)}>-</button>
          <button style={{backgroundColor:"orange",color:"black",width:"15%",height:"30px",borderRadius:"10px",marginBottom:"10px",marginRight:"25px"}}>{quantity}</button>
          
          <button style={{backgroundColor:"teal",color:"black",width:"15%",height:"30px",borderRadius:"10px",marginBottom:"10px"}} onClick={()=>handelquantity(data.id,1)} >+</button> 
        </Box>
        // </SimpleGrid>
    
    );
  }
  
  export default CartCard;


// import React from 'react'

// const CartCard = ({data}) => {
//   return (
//     <div>
//       <img src={data.imageURL} alt=""/>
//       <h3>{data.name}</h3>
//       <h3>{data.price}</h3>
//     </div>
//   )
// }

// export default CartCard
