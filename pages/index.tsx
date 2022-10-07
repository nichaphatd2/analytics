import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, ButtonGroup, Center, Divider, Stack, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const Home: NextPage = () => {
  const context = useContext(MainContext);

  const createUser = () => {
    fetch('/api/createuser')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  const getAllUsers = () => {
    fetch('/api/getusers')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <Head>
        <title>analytics</title>
        <meta name="description" content="analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack direction='column'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100%'
          py={12}
          bgImage="url('FQzmAVjWYAALWTD.jfif')"
          bgPosition='center'
          bgRepeat='no-repeat'
          mb={2}
        >
          <ButtonGroup gap='4'>
            <Button colorScheme='whiteAlpha'>WhiteAlpha</Button>
            <Button colorScheme='blackAlpha'>BlackAlpha</Button>
          </ButtonGroup>
        </Box>
        <VStack>
          <Wrap spacing={4} maxW='2xl'>
            <WrapItem>
              <Button colorScheme='red' onClick={() => { console.log('process.env.NEXT_PUBLIC_DATA =>', process.env.NEXT_PUBLIC_DATA) }}>Get .env</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='gray' onClick={() => { console.log(context); }}>getMainContext</Button>
            </WrapItem>
          </Wrap>
          <Divider orientation='horizontal' />

          <Wrap spacing={4} maxW='2xl'>
            <WrapItem>
              <Button colorScheme='yellow' onClick={createUser}>createUser</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='orange' onClick={getAllUsers}>getAllUsers</Button>
            </WrapItem>


          </Wrap>
          <Divider orientation='horizontal' />

          <Wrap spacing={4} maxW='2xl'>
            <WrapItem>
              <Button colorScheme='green'>Green</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='teal'>Teal</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='blue'>Blue</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='cyan'>Cyan</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='purple'>Purple</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='pink'>Pink</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='linkedin'>Linkedin</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='facebook'>Facebook</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='messenger'>Messenger</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='whatsapp'>Whatsapp</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='twitter'>Twitter</Button>
            </WrapItem>
            <WrapItem>
              <Button colorScheme='telegram'>Telegram</Button>
            </WrapItem>
          </Wrap>
        </VStack>

      </Stack>

    </div>
  )
}

export default Home
