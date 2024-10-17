export const useDate = () => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    return { currentDate, month, date };
};
