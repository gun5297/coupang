const TodaySalePaging = ({ pageChange }) => {
    const onClick = (x) => {
        pageChange(x);
    };
    return (
        <>
            <div className='prev' onClick={() => onClick('prev')}>
                <i className='xi-angle-left-min' />
            </div>
            <div className='next' onClick={() => onClick('next')}>
                <i className='xi-angle-right-min' />
            </div>
        </>
    );
};

export default TodaySalePaging;
