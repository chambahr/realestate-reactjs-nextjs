import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button} from '@chakra-ui/react'

const Login = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.200">
        
        <Text justifyContent="center" aligItems="center" p="6" m="auto" marginRight="20%" marginLeft="20%">
            <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.200">
                Login Form
            </Box>
            <form action="/send-data-here" method="post">
          
                <Text 
                    justifyContent="center" 
                    alignItems="center" 
                    borderColor="gray.200" 
                    p="2" 
                    m="3"
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="l"
                    p="2"
                    bg="gray.200"
                    m="1"
                    borderRadius="5"
                                    >
                    <label for="first">Username :</label>
                    <input borderColor="gray.300" type="text" id="first" name="first" /> <br /> 
                </Text>
                <Text 
                    justifyContent="center" 
                    alignItems="center" 
                    borderColor="gray.200" 
                    p="2" 
                    m="3"
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="l"
                    p="2"
                    bg="gray.200"
                    m="1"
                    borderRadius="5"
                                    >
                    <label for="first">Password :</label>
                    <input  type="Password" id="first" name="first" /> <br /> 
                </Text>
                <Text 
                    justifyContent="center" 
                    alignItems="center" 
                    borderColor="gray.200" 
                    p="2" 
                    m="3"
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="l"
                    p="2"
                    bg="gray.200"
                    m="1"
                    borderRadius="5"
                                    >
                    <button type="submit">Submit</button>
                </Text>
              
                
            </form>
            
        </Text>
    </Box>
)

export default Login;