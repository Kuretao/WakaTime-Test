import styled from "styled-components";
import {useState} from "react";

interface Crumb {
    label: string;
    href?: string;
}

const BreadcrumbsList  = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
`

const CrumbLink = styled.a<{isCurrent: boolean}>`
    color: ${({ isCurrent }) => isCurrent ? '#A8ACB3' : '#5F6166'};
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    padding: 2px 4px;
`

const Separator = styled.span`
  color: #5F6166;
  font-size: 14px;
  margin: 2px 4px;
`;

const Breadcrumbs: React.FC = () => {
    const [path] = useState<Crumb[]>([
        { label: 'Данные', href: '/' },
        { label: 'Пользователи', href: '/' }
    ]);

    return (
            <BreadcrumbsList>
                {path.map((crumb, index) => (
                    <>
                        {index > 0 && <Separator>/</Separator>}
                        <li key={crumb.label}>
                            <CrumbLink
                                href={crumb.href}
                                isCurrent={index === path.length - 1}
                            >
                                {crumb.label}
                            </CrumbLink>
                        </li>
                    </>
                ))}
            </BreadcrumbsList>
    );
};

export default Breadcrumbs;