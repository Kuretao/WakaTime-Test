import React, { useMemo } from 'react';
import styled from 'styled-components';
import {ArrowUpIcon} from "../../ui/icons";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    onPageChange: (page: number) => void;
    pageSize: number;
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: start;
    flex-direction: column;
  gap: 16px;
    margin-top: 32px;
`;

const PageButton = styled.button<{ active?: boolean; disabled?: boolean }>`
  min-width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.active ? '#FF4D00' : '#18191A'};
  color: #fff;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-weight: 400;
  font-size: 16px;
  transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PageInfo = styled.span`
  color: #FFFFFF50;
  font-size: 16px;
`;

export const TableNavigation: React.FC<PaginationProps> = ({
                                                               currentPage,
                                                               totalPages,
                                                               totalCount,
                                                               onPageChange,
                                                               pageSize,
                                                           }) => {
    const startCount = useMemo(() => {
        return currentPage * pageSize + 1;
    }, [currentPage, pageSize]);

    const endCount = useMemo(() => {
        return Math.min((currentPage + 1) * pageSize, totalCount);
    }, [currentPage, pageSize, totalCount]);
    type PageNumber = number | '...';
    const pageNumbers = useMemo((): PageNumber[] => {
        const pages: PageNumber[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 0; i < totalPages; i++) pages.push(i);
        } else {
            pages.push(0);
            if (currentPage <= 2) {
                pages.push(1, 2, 3, '...' as PageNumber, totalPages - 1);
            } else if (currentPage >= totalPages - 3) {
                pages.push('...' as PageNumber, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1);
            } else {
                pages.push('...' as PageNumber, currentPage - 1, currentPage, currentPage + 1, '...' as PageNumber, totalPages - 1);
            }
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <PaginationContainer>


            <div style={{ display: 'flex', gap: 16 }}>
                <PageButton
                    disabled={currentPage === 0}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    <ArrowUpIcon style={{transform: `rotate(-90deg)`}}/>
                </PageButton>

                {pageNumbers.map((page, index) =>
                    page === '...' ? (
                        <PageButton
                            disabled={true}
                            key={`dots-${index}`}
                        >
                            <span style={{transform: 'translateY(-25%)'}}>...</span>
                        </PageButton>
                    ) : (
                        <PageButton
                            key={page}
                            active={page === currentPage}
                            onClick={() => onPageChange(page)}
                        >
                            {page + 1}
                        </PageButton>
                    )
                )}

                <PageButton
                    disabled={currentPage === totalPages - 1}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    <ArrowUpIcon style={{transform: `rotate(90deg)`}}/>
                </PageButton>
            </div>

            <PageInfo>
                Показано {startCount}–{endCount} из {totalCount} пользователей
            </PageInfo>
        </PaginationContainer>
    );
};
