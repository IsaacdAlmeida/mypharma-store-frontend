import { useState } from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

type QuantityPickerProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  id: string;
};

export const QuantityPicker = ({
  value,
  onChange,
  min = 1,
  max = 999,
}: QuantityPickerProps) => {
  const [currentValue, setCurrentValue] = useState(value);
      
  const handleDecrement = () => {
    if (currentValue > min) {
      const newValue = currentValue - 1;
      setCurrentValue(newValue);
      onChange(newValue);
    }
  };

  const handleIncrement = () => {
    if (currentValue < max) {
      const newValue = currentValue + 1;
      setCurrentValue(newValue);
      onChange(newValue);
    }
  };
  
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      precision: 0,
      defaultValue: value,
      min,
      max,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW='160px'>
      <Button {...dec} onClick={handleDecrement}>
        <MinusIcon />
      </Button>
      <Input {...input} readOnly />
      <Button {...inc} onClick={handleIncrement}>
        <AddIcon />
      </Button>
    </HStack>
  );
};
