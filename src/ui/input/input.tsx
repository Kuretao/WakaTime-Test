import React, { useState, type ChangeEvent } from 'react';
import styled from 'styled-components';
import {EyeIcon} from "../icons";

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 380px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  background: #18191A;
  color: #fff;
  font-size: 16px;
  outline: none;
    border: none;
    height: 48px;
  
  &::placeholder {
    color: #909399;
  }
`;

const SearchIcon = styled(EyeIcon)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SearchInput: React.FC<SearchInputProps> = ({
                                                     placeholder = 'Найти пользователя...',
                                                     value = '',
                                                     onChange
                                                 }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange?.(newValue);
    };

    return (
        <InputContainer>
            <Input
                type="search"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />
            <SearchIcon />
        </InputContainer>
    );
};

export default SearchInput;
