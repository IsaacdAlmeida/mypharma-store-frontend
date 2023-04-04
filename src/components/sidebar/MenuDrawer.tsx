import { useRef } from 'react';
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
} from '@chakra-ui/react';
import { BiCategory } from 'react-icons/bi';

interface MenuDrawerProps {
  buttonName: string;
  headerText: string;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;  
}

export function MenuDrawer({
  buttonName,
  headerText,
  categories,
  selectedCategory,
  setSelectedCategory,
}: MenuDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleCategoryClick = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <Button
        ref={btnRef} 
        colorScheme='teal' 
        onClick={onOpen}
        variant="solid"
        leftIcon={<BiCategory />}
        fontWeight='bold'
        fontSize='md'
        textTransform='uppercase'
      >
        { buttonName }
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{headerText}</DrawerHeader>

          <DrawerBody
            display="flex"
            flexDirection="column"
          >
          {categories
            .filter((category, index) => categories.indexOf(category) === index)
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => handleCategoryClick(category)}
                isActive={selectedCategory === category}
                justifyContent="flex-start"
              >
                {category}
              </Button>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}