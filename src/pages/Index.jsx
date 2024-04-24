import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          Save Our Planet
        </Heading>
        <Flex>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZXxlbnwwfHx8fDE3MTM5NzMwNjF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
        <VStack flex="2" spacing={4} alignItems="flex-start">
          <Heading as="h2" size="lg">
            Why Act Now?
          </Heading>
          <Text fontSize="lg">The health of our planet is deteriorating at an alarming rate. We are at a critical juncture and every small action counts. Join us in our campaign to make a difference.</Text>
          <Button colorScheme="green" rightIcon={<FaEnvelope />}>
            Join Our Newsletter
          </Button>
        </VStack>
      </Flex>

      <Box mt={10}>
        <Heading as="h3" size="md" mb={4}>
          How You Can Help
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Educate Yourself</Heading>
            <Text mt={4}>Learn about the environmental issues we are facing and understand the impact of your actions.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Spread the Word</Heading>
            <Text mt={4}>Share information with your friends and family. Awareness is the first step towards change.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Get Involved</Heading>
            <Text mt={4}>Participate in local clean-ups or other environmental events. Every bit helps.</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
