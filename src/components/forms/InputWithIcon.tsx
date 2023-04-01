import {
  Box,
  Input,
  InputGroup,
  InputLeftElement } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/icons';
import { ReactElement } from 'react';

interface InputWithIconProps {
  icon: ReactElement<IconProps>;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithIcon({
  icon,
  placeholder,
  type,
  value,
  onChange,
}:InputWithIconProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="1200px"
      margin="0 auto"
    >
      <InputGroup
        size="md"
      >
          <InputLeftElement pointerEvents='none'>
            {icon}
          </InputLeftElement>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </Box>
  );
}