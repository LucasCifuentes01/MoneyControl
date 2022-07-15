export const useDollarPrice = () => {
  fetch(`${procces.env.BASE_URL}/api/dollar-price`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
