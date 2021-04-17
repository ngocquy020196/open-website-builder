import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Navbar from '../navbar'
import ArrowRight from '../../assets/arrow-right'
import Link from 'next/link'

const ArticleTitle = ({ url, fontSize, children }) => {
  return (
    <Link href={url} passHref>
      <a>
        <Text
          fontSize={fontSize}
          color="gray.500"
          fontWeight="800"
          _hover={{ color: 'primary.500' }}
        >
          {children}
        </Text>
      </a>
    </Link>
  )
}

const ArticleImage = ({ height, width, redirectUrl, imageUrl }) => {
  return (
    <Box
      height={height}
      w={width}
      d="flex"
      pos="relative"
      transition="opacity 0.3s"
      borderRadius="0.6rem"
      overflow="hidden"
      _hover={{ opacity: '0.85' }}
    >
      <Link href={redirectUrl} passHref>
        <a>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </a>
      </Link>
    </Box>
  )
}

const TurnThePage = ({ redirectUrl }) => {
  return (
    <Link href={redirectUrl} passHref>
      <a>
        <Box d="flex" alignItems="center">
          <Text
            fontSize="2xl"
            color="primary.500"
            mr="1rem"
            _hover={{ color: 'primary.700' }}
          >
            Turn the page
          </Text>
          <ArrowRight fill="#506bf0" />
        </Box>
      </a>
    </Link>
  )
}

const MainBlogCard = () => {
  return (
    <Box>
      <Box d="flex" mt="3rem">
        <Box
          w="50%"
          pr="3rem"
          d="flex"
          alignItems="start"
          flexDir="column"
          justifyContent="center"
        >
          <ArticleTitle fontSize="6xl" url="blog/article-1">
            Don’t just present. Pitch.
          </ArticleTitle>
          <Text color="gray.500" fontWeight="300" fontSize="2xl" py="2rem">
            Today, we’re launching Pitch to the world. Learn how we’re
            modernizing presentation software to help teams stay connected and
            do their best work.
          </Text>
          <TurnThePage redirectUrl="blog/article-1" />
        </Box>
        <ArticleImage
          height={['60vw', '35vw']}
          width="50%"
          redirectUrl="blog/article-1"
          imageUrl="https://images.unsplash.com/photo-1618159072219-620bc5c8f3f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1525&q=80"
        />
      </Box>
    </Box>
  )
}

const ArticleCard = () => {
  return (
    <Box color="gray.500">
      <ArticleImage
        height={['60vw', '250px']}
        w="100%"
        redirectUrl="blog/article-1"
        imageUrl="https://www.vectary.com/api/vctr-repo/v2/binary/7bc33b3f-1e38-45b4-a8d0-2966f9372809/e52d95ad-6c6f-4aa9-a7a2-03e51a5fb36d.jpeg"
      />
      <Box mt="1rem">
        <ArticleTitle fontSize="27px" url="blog/article-1">
          A top VC's recipe for an eye-catching pitch
        </ArticleTitle>
        <Text fontWeight="400" fontSize="lg" lineHeight="1.8" mt="1rem">
          In this Q&A, we sit down with Martin Mignot of Index Ventures to hear
          his tips for delivering a perfect remote pitch.
        </Text>
      </Box>
    </Box>
  )
}

const BlogPage = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Box px="10rem" zIndex="1">
          <Box as="section" pb="8rem">
            <MainBlogCard />
          </Box>
          <Box
            d="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gridGap="5%"
            mt="1rem"
            pb="10rem"
          >
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BlogPage