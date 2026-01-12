import styled from "styled-components";
import Breadcrumbs from "../../ui/breadcrumbs/breadcrumbs.tsx";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const AppTitle = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    color: #fff;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <Breadcrumbs/>
            <AppTitle>Пользователи</AppTitle>
        </HeaderContainer>
    );
}