export default {
  history: {
    // key = año, value = meses
    2022: {
      january: [
        {
          day: 2,
          transactions: [
            {
              type: "ingreso", // ingreso | gasto | ahorro | inversion
              description: "sueldo",
            },
          ],
        },
      ],
    },
  },
  money: {
    // las keys son las monedas, value la cantidad
    ARS: 10000,
    USD: 50,
  },
};
