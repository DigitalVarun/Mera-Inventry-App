import React from 'react'
import '../styles/HomeScreen.scss'
import { Box, Flex, HStack, VStack, Avatar, Text, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, Image, ring } from '@chakra-ui/react';
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import lo from "../assets/images/seldomL.png"
import { CiMail } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { SiAzureartifacts } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiNginxproxymanager } from "react-icons/si"; 

// ELements

const MenuBar = () => {
  return (
    <Menu closeOnSelect={false} bg={"red"}>
      <MenuButton colorScheme='red' mt={"4px"}><FaChevronDown /></MenuButton>
      <MenuList minWidth='240px' bg={"red"}>
        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
          <MenuItemOption value='asc' bg={"red"}>Ascending</MenuItemOption>
          <MenuItemOption value='desc' bg={"red"}>Descending</MenuItemOption>
          <MenuItemOption value='email' bg={"red"}>Email</MenuItemOption>
          <MenuItemOption value='phone' bg={"red"}>Phone</MenuItemOption>
          <MenuItemOption value='country' bg={"red"}>Country</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

const Seldom_Logo = () => {
  return (
    <HStack>
      <Image w={"2.4rem"} h={"1.8rem"} src={lo} alt='Dan Abramov' />
      <Text id='comp_name' fontWeight={"bold"} fontSize={"1.3rem"}>Seldom Technology</Text>
    </HStack>
  )
}

const Top_Icons = () => {
  return (
    <HStack fontSize={"1.5rem"} spacing={"1rem"}>
      <CiBellOn cursor={"pointer"} />
      <FaQuestionCircle fontSize={"1.2rem"} cursor={"pointer"} />
      <CiMail cursor={"pointer"} />
    </HStack>
  )
}

//Left

const Home_Left = () => {
  return (
    <div className="HomeLeft">
      <VStack>
        <HStack className="HomeLeft-nav">
          <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Flex className="HomeLeft-nav-name_status" direction={"column"} justify={"center"}>
            <Box className="HomeLeft-nav-name" ml={"4px"}>Kazu</Box>
            <Box className="HomeLeft-nav-status" color={"green.400"} mt={"-6px"}>• online</Box>
          </Flex>
        </HStack>
      </VStack>
      <Box py="3" borderBottom={"1px solid  rgb(255, 102, 0)"} px="2">
        <Text fontWeight={"bold"} pl={3} color="#ffffff">General</Text>
      </Box>
      <Flex direction={"row"} className='left_icons' mt={"2"} pl={"4"} py={"2"}>
        <MdDashboard fontSize={"1.8rem"} color='rgb(255, 102, 0)'/>
        <Flex justify={"center"} align={"center"} fontWeight={"bold"} fontSize={"15px"} letterSpacing={"0.8px"} ml={"20px"} color={'rgb(255, 102, 0)' }mt={"1"}>Dashboard</Flex>
      </Flex>
      <Flex direction={"row"} className='left_icons' mt={"2"} pl={"4"} py={"2"}>
        <SiAzureartifacts fontSize={"1.6rem"} color='rgb(255, 102, 0)'/>
        <Flex justify={"center"} align={"center"} fontWeight={"bold"} fontSize={"15px"} letterSpacing={"0.8px"} ml={"24px"} color={'rgb(255, 102, 0)' }mt={"1"}>Products</Flex>
      </Flex>
      <Flex direction={"row"} className='left_icons' mt={"2"} pl={"4"} py={"2"}>
        <MdOutlineProductionQuantityLimits fontSize={"1.8rem"} color='rgb(255, 102, 0)'/>
        <Flex justify={"center"} align={"center"} fontWeight={"bold"} fontSize={"15px"} letterSpacing={"0.8px"} ml={"23px"} color={'rgb(255, 102, 0)' }mt={"1"}>Stocks</Flex>
      </Flex>
      <Flex direction={"row"} className='left_icons' mt={"2"} pl={"4"} py={"2"}>
        <SiNginxproxymanager fontSize={"1.7rem"} color='rgb(255, 102, 0)'/>
        <Flex justify={"center"} align={"center"} fontWeight={"bold"} fontSize={"15px"} letterSpacing={"0.8px"} ml={"24px"} color={'rgb(255, 102, 0)' }mt={"1"}>Management</Flex>
      </Flex>
    </div>
  )
}

//Rit

const Home_Right = () => {
  return (
    <div className="HomeRight">
      <HStack className="top-nav" direction={"row"} h={"10"} color={"white"}>
        <Flex className="top-nav-left" justify={"center"} align={"center"}><IoMdMenu fontSize={"1.6rem"} /></Flex>
        <Flex className="top-nav-mid" justify={"space-between"} align={"center"} px={"0.4rem"}>
          <Seldom_Logo />
          <Top_Icons />
        </Flex>
        <Flex className="top-nav-rit" justify={"flex-start"} align={"center"}>
          <Avatar id='my_logo' size='sm' name='Dan Abrahmov' src='https://bit.ly/ryan-florence' ml={"12px"} />
          <Text id='naam' fontWeight={"bold"} fontSize={"0.9rem"} ml={"6px"} mr={"7px"}>Mr. Kazu</Text>
          <MenuBar />
        </Flex>
      </HStack>
    </div>
  )
}

//Full

const HomeScreen = () => {
  return (
    <Flex className="HomeScreen">
      <Home_Left />
      <Home_Right />
    </Flex>
  )
}

export default HomeScreen;