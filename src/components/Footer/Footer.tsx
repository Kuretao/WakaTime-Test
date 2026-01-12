import styled from "styled-components";

const FooterContainer = styled.footer`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

const AdressList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 16px;
    width: 100%;
`

const Adress = styled.li`
    flex: 0.2;
    width: 100%;
    min-width: max-content;

    a {
        text-wrap: nowrap;
        font-size: 16px;
        color: #ffffff40;
        transition: .2s ease;
        text-decoration: none;

        &:hover {
            color: #fff;
        }
    }
`

const Copyright = styled.span`
    font-size: 16px;
    color: #ffffff20;
    padding: 0 11.5px;
`

const adresses = [
    {
        label: 'Информация',
        href: 'https://www.google.com/',
    },
    {
        label: 'Пользователи',
        href: 'https://www.google.com/',
    },
    {
        label: 'Реклама',
        href: 'https://www.google.com/',
    },
    {
        label: 'Условия',
        href: 'https://www.google.com/',
    },
    {
        label: 'Политика Конфиденциальности',
        href: 'https://www.google.com/',
    },
    {
        label: 'Поддержка',
        href: 'https://www.google.com/',
    },
    {
        label: 'Клиенты',
        href: 'https://www.google.com/',
    },
    {
        label: 'Настройки Куки',
        href: 'https://www.google.com/',
    },
    {
        label: 'Главная',
        href: 'https://www.google.com/',
    },
]

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <AdressList>
                {adresses.map((adress, id) => (
                    <Adress key={id}><a href={adress.href}>{adress.label}</a></Adress>
                ))}
            </AdressList>

            <Copyright>@test</Copyright>
        </FooterContainer>
    );
};