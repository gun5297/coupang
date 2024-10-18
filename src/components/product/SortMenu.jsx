import { SortMenuWrap } from './styled';

const SortMenu = ({ sort, selSort, setSelSort }) => {
    return (
        <SortMenuWrap>
            {sort.map((sort) => (
                <p
                    key={sort.id}
                    onClick={() => setSelSort(sort.value)}
                    className={selSort === sort.value ? 'active' : ''}
                >
                    {sort.name}
                </p>
            ))}
        </SortMenuWrap>
    );
};

export default SortMenu;
