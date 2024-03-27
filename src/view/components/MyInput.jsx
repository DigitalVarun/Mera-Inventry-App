import React from 'react'
import email from '../assets/icons/email.png'
import { Flex } from '@chakra-ui/react'

const MyInput = (props) => {
  return (
    <Flex h={''}>
      <img src={email} />
      <input style={{outline: 'none', backgroundColor: '#fff', border: '2px solid #000', paddingBlock: '0.2rem', paddingInline: '0.1rem', fontSize: '0.8rem'}} placeholder='Email'/>    
    </Flex>
  )
}

export default MyInput