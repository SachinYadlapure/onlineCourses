import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import intro from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding="8">
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/90382428?v=4"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={'0.7'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Sachin Yadlapure" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children="Hi, I am a Full-stack Developer.
      Our Mission is to provide quality content at reasonable price"
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      loop
      muted
      autoPlay
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={intro}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Conditions"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h={'sm'} p="4" overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a online video streaming platform with some premium courses
          available only for premium members.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
