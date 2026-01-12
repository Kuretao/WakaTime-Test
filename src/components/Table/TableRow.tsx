import type {ReactNode} from 'react';
import { TableRowStyled } from './styles';

export const TableRow = ({ children }: { children: ReactNode }) => {
    return <TableRowStyled>{children}</TableRowStyled>;
};
