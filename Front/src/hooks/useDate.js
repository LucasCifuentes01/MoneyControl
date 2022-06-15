export const useDate = () => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

export const useDay = (date = "") => {
  const day = date.split("/");
  return Number(day[0]);
};
