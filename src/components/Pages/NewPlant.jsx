import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PlantsContext from "../../contexts/PlantsContext";

const StyledNewPlant = styled.main`
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    width: 20%;
    min-width: 300px;
    flex-direction: column;
    gap: 25px;
    textarea {
      resize: none;
    }
    > div {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    > p,
    > div > p {
      color: red;
      width: 400px;
      text-align: center;
      position: absolute;
      left: calc(50% - 200px);
      bottom: -40px;
    }
  }
`;

const NewPlant = () => {
  const { setPlants, PlantsActionTypes } = useContext(PlantsContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required."),
    short_description: Yup.string()
      .max(100, "Description can not be longer than 100 symbols.")
      .required("This field is required."),
    image: Yup.string()
      .url("Has to be valid URL.")
      .required("This field is required."),
    family: Yup.string().required("This field is required."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      short_description: "",
      image: "",
      family: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const plant = {
        ...values,
        id: uuid(),
      };
      setPlants({
        type: PlantsActionTypes.add,
        data: plant,
      });
      navigate("/");
    },
  });

  return (
    <StyledNewPlant>
      <h1>Add New Plant</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Name..."
          />
          {formik.touched.name && formik.errors.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="url"
            id="image"
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            placeholder="Image URL..."
          />
          {formik.touched.image && formik.errors.image && (
            <p>{formik.errors.image}</p>
          )}
        </div>
        <div>
          <label htmlFor="family">Family:</label>
          <input
            type="text"
            id="family"
            name="family"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.family}
            placeholder="Family..."
          />
          {formik.touched.family && formik.errors.family && (
            <p>{formik.errors.family}</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Short description:</label>
          <textarea
            id="description"
            name="short_description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.short_description}
            placeholder="Short description..."
          />
          {formik.touched.short_description &&
            formik.errors.short_description && (
              <p>{formik.errors.short_description}</p>
            )}
        </div>
        <input type="submit" value="Add" />
      </form>
    </StyledNewPlant>
  );
};

export default NewPlant;
