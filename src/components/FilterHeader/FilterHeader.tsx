import styled from "styled-components";
import Input from "../../ui/input/input.tsx";
import Button from "../../ui/button/button.tsx";
import {FilterIcon, PlusIcon, SettingsIcon} from "../../ui/icons";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
`

const Hr = styled.hr`
    display: block;
    height: 48px;
    width: 2px;
    background: #18191A;
    border: none;
    margin-left: 4px;
`

export const FilterHeader = () => {
    return (
        <HeaderContainer>
            <FilterContainer>
                <Input/>
                <Hr/>
                <Button icon={<SettingsIcon/>}/>
                <Button icon={<FilterIcon/>}/>
            </FilterContainer>

            <Button icon={<PlusIcon/>} variant={'secondary'} children={'Добавить пользователя'}/>
        </HeaderContainer>
    );
}