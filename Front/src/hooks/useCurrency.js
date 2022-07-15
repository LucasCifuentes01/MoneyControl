import "intl";
import "intl/locale-data/jsonp/es-ES";
import { ARS_TYPE } from "../constants/currency";

export const useCurrency = ({
  amount = 0,
  currencyType = ARS_TYPE,
  currencyFormat = "es-ES",
}) => {
  return Intl.NumberFormat(currencyFormat, {
    style: "currency",
    currency: currencyType,
  }).format(amount);
};
