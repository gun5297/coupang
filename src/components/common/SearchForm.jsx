import { useDispatch, useSelector } from 'react-redux';
import { SearchFormWrap } from './styled';
import { useState } from 'react';
import { isSelCategory } from '../../store/modules/CategorySlice';

const SearchForm = () => {
    const [isView, setIsView] = useState(false);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const { Category, selCategory } = useSelector((state) => state.Category);
    const onSubmit = (e) => {
        e.preventDefault();
        setSearch('');
    };
    return (
        <SearchFormWrap onSubmit={onSubmit}>
            <div className='inp-wrap'>
                <p
                    value={selCategory.value}
                    onClick={() => {
                        setIsView(!isView);
                    }}
                >
                    {selCategory.name}
                    <i className={isView ? 'xi-caret-up-min' : 'xi-caret-down-min'}></i>
                </p>
                <ul className={isView ? 'active' : ''}>
                    {Category.map((item) => (
                        <li key={item.id} value={item.value}>
                            <a
                                href='#'
                                onClick={() => {
                                    setIsView(!isView);
                                    dispatch(isSelCategory(item.id));
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <input
                    type='text'
                    name='search'
                    id='search'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    placeholder='찾고싶은 상품을 검색해보세요!'
                />
                <div className='icon-wrap'>
                    <i className='xi-microphone-o' />
                    <button>
                        <i className='xi-search' type='submit' />
                    </button>
                </div>
            </div>
        </SearchFormWrap>
    );
};

export default SearchForm;
