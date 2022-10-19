import { useEffect, useState, useMemo } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState(
    {}
  ); /* ver los errores del formulario */

  useEffect(() => {
    createValitadors();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if(formValidation[formValue] !== null) return false
    }
    return true
  }, [formValidation])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValitadors = () => {
    const formCheckValue = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = "Este campo de requerido."] = formValidations[formField];
      formCheckValue[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    };

    setFormValidation( formCheckValue );
    // console.log(formCheckValue)
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid
  };
};
