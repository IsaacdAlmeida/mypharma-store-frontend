import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

type QuantityPickerProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export const QuantityPicker = ({
  value,
  onChange,
  min = 1,
  max = 999,
}: QuantityPickerProps) => {
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

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <HStack maxW='160px'>
      <Button {...dec} onClick={handleDecrement}>
        <MinusIcon />
      </Button>
      <Input {...input} />
      <Button {...inc} onClick={handleIncrement}>
        <AddIcon />
      </Button>
    </HStack>
  );
};
