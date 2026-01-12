import styled from 'styled-components';
import {useState} from "react";
import {AcceptIcon, ArrowUpIcon} from "../icons";

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectButton = styled.button`
    background: transparent;
    color: #fff;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #fff;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background: #18191A;
  border-radius: 8px;
  padding: 8px;
  min-width: 320px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  z-index: 10;
    border: 1px solid #303133;
`;

export const Option = styled.div<{ active?: boolean }>`
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
    font-size: 12px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    height: 28px;
    padding-left: ${({ active }) => (active ? '8px' : '26px')};
  background: ${({ active }) => (active ? '#303133' : 'transparent')};
`;

type Props = {
    value: string;
    options: string[];
    onChange: (value: string) => void;
};

export const Select = ({ value, options, onChange }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <SelectWrapper>
            <SelectButton onClick={() => setOpen(!open)}>
                {value}
                <ArrowUpIcon style={{transform: open ? 'rotate(0deg)' : 'rotate(180deg)'}}/>
            </SelectButton>

            {open && (
                <Dropdown>
                    {options.map(opt => (
                        <Option
                            key={opt}
                            active={opt === value}
                            onClick={() => {
                                onChange(opt);
                                setOpen(false);
                            }}
                        >
                            {opt === value && <AcceptIcon />}
                            {opt}
                        </Option>
                    ))}
                </Dropdown>
            )}
        </SelectWrapper>
    );
};