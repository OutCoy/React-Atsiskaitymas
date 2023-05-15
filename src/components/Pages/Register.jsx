import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const StyledRegister = styled.main`
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    position: relative;
    width: 20%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
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

const Register = () => {

  const navigate = useNavigate();
  const { users, setUsers, UsersActionTypes, setCurrentUser } = useContext(UsersContext);
  const [emailTaken, setEmailTaken] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("This field is required.")
      .email("Invalid email address."),
    password: Yup.string()
      .required("This field is required.")
      .min(3, "This field has to be at least 3 symbols long")
      .max(20, "This field has to be shorter than 20 symbols"),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match.")
      .required("Passwords must match."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userExists = users.find((user) => user.email === values.email);
      if (userExists) {
        setEmailTaken(true);
        setTimeout(() => {
          setEmailTaken(false);
        }, 3000);
      } else {
        const newUser = {
          email: values.email,
          password: values.password,
          id: uuid(),
        };
        setCurrentUser(newUser);
        setUsers({
          type: UsersActionTypes.add,
          data: newUser,
        });
        navigate('/');
      }
    },
  });

  return (
    <StyledRegister>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email..."
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password..."
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat password:</label>
          <input
            type="password"
            id="passwordRepeat"
            name="passwordRepeat"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordRepeat}
            placeholder="Repeat password..."
          />
          {formik.touched.passwordRepeat && formik.errors.passwordRepeat && (
            <p>{formik.errors.passwordRepeat}</p>
          )}
        </div>
        <input type="submit" value="Register" />
        {
          emailTaken && <p>This email is already taken.</p>
        }
      </form>
    </StyledRegister>
  );
};

export default Register;
