import {useState} from 'react';
import {TableHeader} from "./styles.ts";
import {TableRow} from "./TableRow.tsx";
import {SortableHeader} from "./SortableHeader.tsx";
import {Select} from "../../ui/select/select.tsx";
import {Table} from "./Table.tsx";
import {TableCell, TableCellDots} from "./TableCell.tsx";
import {TableNavigation} from "../Navigation/Navigation.tsx";
import {DotsIcon} from "../../ui/icons";


// типы и статику не раскладывал по отдельным файликам, так как это тестовое - я думаю и этого хватит

const roles = ['Дизайнер', 'Front End разработчик', 'Back End разработчик'];
type User = {
    id: number;
    role: string;
    name: string;
    login: string;
    position: string;
    email: string;
    phone: string;
    city: string;
};
const initialUsers: User[] = [
    {
        id: 1,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 2,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 3,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 4,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 5,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 6,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 7,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 8,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 9,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 10,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 11,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 12,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 13,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 14,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 15,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 16,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 17,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 18,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 19,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 20,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 21,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 22,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 23,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 24,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 25,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 26,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 27,
        role: 'Пользователь',
        name: '1Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 28,
        role: 'Пользователь',
        name: '23Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
    {
        id: 29,
        role: 'Админ',
        name: 'Александр',
        login: 'someDesigner',
        position: 'Дизайнер',
        email: 'test@test.ru',
        phone: '+7 999 999 99 99',
        city: 'Нижний Новгород',
    },
    {
        id: 30,
        role: 'Пользователь',
        name: '44Борис',
        login: 'boris42',
        position: 'Front End разработчик',
        email: 'boris@test.ru',
        phone: '+7 900 000 00 00',
        city: 'Москва',
    },
];
type SortKey = 'id' | 'dots' | 'role' | 'name' | 'login' | 'position' | 'email' | 'phone' | 'city';
type SortOrder = 'asc' | 'desc';
const columns: { key: SortKey; label: string }[] = [
    {key: 'id', label: 'ID'},
    {key: 'dots', label: ''},
    {key: 'role', label: 'Роль'},
    {key: 'name', label: 'Имя'},
    {key: 'login', label: 'Логин'},
    {key: 'position', label: 'Должность'},
    {key: 'email', label: 'Почта'},
    {key: 'phone', label: 'Телефон'},
    {key: 'city', label: 'Город'},
];

export const FinishTable = () => {
    const [sort, setSort] = useState<{
        key: SortKey;
        order: SortOrder;
    }>({
        key: 'id',
        order: 'asc',
    });
    const [users, setUsers] = useState<User[]>(initialUsers);
    const sortedUsers = [...users].sort((a, b) => {
        const {key, order} = sort;

        let aVal = a[key as keyof User];
        let bVal = b[key as keyof User];

        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return order === 'asc' ? aVal - bVal : bVal - aVal;
        }

        aVal = String(aVal).toLowerCase();
        bVal = String(bVal).toLowerCase();

        if (aVal < bVal) return order === 'asc' ? -1 : 1;
        if (aVal > bVal) return order === 'asc' ? 1 : -1;
        return 0;
    });
    const handleRoleChange = (id: number, value: string) => {
        setUsers(prev =>
            prev.map(user =>
                user.id === id ? {...user, position: value} : user
            )
        );
    };
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(5);

    const paginatedUsers = sortedUsers.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    );

    const totalPages = Math.ceil(sortedUsers.length / pageSize);
    return (
        <>
            <Table>
                <TableHeader>
                    {columns.map(col => (
                        <SortableHeader
                            key={col.key}
                            label={col.label}
                            active={sort.key === col.key}
                            order={sort.key === col.key ? sort.order : 'asc'}
                            onClick={() =>
                                setSort(prev => ({
                                    key: col.key,
                                    order:
                                        prev.key === col.key && prev.order === 'asc'
                                            ? 'desc'
                                            : 'asc',
                                }))
                            }
                        />
                    ))}
                </TableHeader>


                {paginatedUsers.map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCellDots><DotsIcon/></TableCellDots>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.login}</TableCell>

                        <Select
                            value={user.position}
                            options={roles}
                            onChange={value => handleRoleChange(user.id, value)}
                        />

                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.city}</TableCell>
                    </TableRow>
                ))}
            </Table>
            <TableNavigation
                currentPage={currentPage}
                totalPages={totalPages}
                totalCount={sortedUsers.length}
                pageSize={pageSize}
                onPageChange={setCurrentPage}
            />
        </>
    );
};
