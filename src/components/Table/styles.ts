import styled from 'styled-components';

export const COLUMNS =
    '40px 40px 120px 160px 160px 200px 200px 160px 160px';

export const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 32px;
`;

export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: ${COLUMNS};
    padding: 0 16px;
    font-size: 13px;
    color: #8b8b8b;
    height: 58px;
`;

export const TableRowStyled = styled.div`
    display: grid;
    grid-template-columns: ${COLUMNS};
    padding: 0 16px;
    align-items: center;
    max-height: 60px;
    height: 60px;

    border-radius: 10px;

    background: #101112;
`;

export const Cell = styled.div`
    font-size: 12px;
    color: #fff;
    padding: 4px 20px 4px 8px;
    border-radius: 8px;
    white-space: nowrap;
    width: max-content;
    cursor: pointer;
    
    &:hover {
        background: #232426;
    }
`;


export const CellDots = styled.div`
    font-size: 12px;
    color: #fff;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #18191A;
    
`;