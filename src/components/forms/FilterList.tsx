import { Select } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

interface FilterListProps {
  onFilterChange: (filterValue: string) => void;
}

export function FilterList({ onFilterChange }: FilterListProps) {
  const handleFilterChange =
    ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
      onFilterChange(target.value);
    };

  return (
    <Select
      icon={<BsFilter />}
      placeholder='Ordernar Por'
      onChange={handleFilterChange}
      focusBorderColor={'teal.200'}
    >
      <option value='asc'>Nome: de A a Z</option>
      <option value='desc'>Nome: de Z a A</option>
      <option value='price-asc'>Preço: Do menor para o maior</option>
      <option value='price-desc'>Preço: Do maior para o menor</option>
    </Select>
  );
}
