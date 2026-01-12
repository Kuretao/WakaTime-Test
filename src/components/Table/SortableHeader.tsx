import {SortArrowIcon} from "../../ui/icons";

type Props = {
    label: string;
    active?: boolean;
    order?: 'asc' | 'desc';
    onClick?: () => void;
};

export const SortableHeader = ({
                                   label,
                                   active,
                                   order,
                                   onClick,
                               }: Props) => {
    const rotation = order === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)';
    const iconColor = active ? '#FF4D00' : '#5F6166';
    return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                display: 'flex',
                gap: 6,
                alignItems: 'center',
                userSelect: 'none',
            }}
        >
            {label !== '' && (
                <SortArrowIcon
                    style={{
                        transform: rotation,
                    }}
                    iconColor={iconColor}
                />
            )}
            {label}
        </div>
    );
};
