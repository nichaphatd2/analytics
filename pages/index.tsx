import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, ButtonGroup, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {

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
            <Link href="/button" passHref>
              <Button colorScheme='blackAlpha'>ButtonPage</Button>
            </Link>
            <Button colorScheme='whiteAlpha'>White</Button>
          </ButtonGroup>
        </Box>
      </Stack>

    </div>
  )
}

export default Home;
