import type {ReactNode} from 'react';
import { TableWrapper } from './styles';

type Props = {
    children: ReactNode;
};

export const Table = ({ children }: Props) => {
    return <TableWrapper>{children}</TableWrapper>;
};
