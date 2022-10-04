import * as yup from "yup";

export const planetSchema = yup.object().shape({
  name: yup.string().required().lowercase(),
  climate: yup.string().required().lowercase(),
  terrain: yup.string().required().lowercase(),
});
