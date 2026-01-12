import type {ReactNode} from 'react';
import {Cell, CellDots} from './styles';

export const TableCell = ({ children }: { children: ReactNode }) => {
    return <Cell>{children}</Cell>;
};

export const TableCellDots = ({ children }: { children: ReactNode }) => {
    return <CellDots>{children}</CellDots>;
};
