import { Spinner, Box, Highlight } from '@chakra-ui/react';

export function PageLoading() {
  return (
    <Box
      h="calc(100vh)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        mb="6px"
      />
      <Highlight
        query="Carregando"
        styles={{
          px: '2', py: '1', rounded: 'full', bg: 'blue.200',
        }}
      >
        Carregando
      </Highlight>
    </Box>
  );
}