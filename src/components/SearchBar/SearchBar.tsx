import React, { useState } from 'react';
import Input from '@ui/Input';
import Button from '@ui/Button';
import styles from './SearchBar.module.scss';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch(query);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input value={query} placeholder="Search..." onChange={handleChange} />
      <Button variant="primary" size="md" type="submit" style={{ borderRadius: '0 3px 3px 0' }}>
        Search <SearchOutlined style={{ fontSize: '1.4rem' }} />
      </Button>
    </form>
  );
};

export default SearchBar;
