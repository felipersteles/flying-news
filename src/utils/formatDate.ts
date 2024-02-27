export const fromDate = (strDate: string) => {
  const date = new Date(strDate);

  const mouth =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const year = date.getFullYear();

  return `${mouth}/${day}/${year}`;
};
