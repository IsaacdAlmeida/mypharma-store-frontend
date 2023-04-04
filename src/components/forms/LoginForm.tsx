import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PasswordInput } from './PasswordInput';

export const LoginForm = () => (
  <Container 
    maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading 
            size={{ base: 'xs', md: 'sm' }}>Faça Login
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Novo no MyPharma?</Text>
            <Button variant="link" colorScheme="blue">
              Criar Conta
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordInput />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Lembrar</Checkbox>
            <Button variant="link" colorScheme="teal" size="sm">
              Esqueceu a Senha?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button variant="outline" colorScheme="teal">Entrar</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
