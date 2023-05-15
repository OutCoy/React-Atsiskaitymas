import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import UsersContext from "../../contexts/UsersContext";
import { useNavigate } from "react-router-dom";

const StyledLogin = styled.main`
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      width: 200px;
      text-align: center;
      position: absolute;
      left: calc(50% - 100px);
      bottom: -40px;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const { users, setCurrentUser } = useContext(UsersContext);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email adress.")
      .required("This field is required."),
    password: Yup.string().required("This field is required."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const loggedInUser = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (loggedInUser) {
        setCurrentUser(loggedInUser);
        navigate("/");
      } else {
        setIsInvalidLogin(true);
        setTimeout(() => {
          setIsInvalidLogin(false);
        }, 3000);
      }
    },
  });

  return (
    <StyledLogin>
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
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
          <label htmlFor="password">Password: </label>
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
        <input type="submit" value="Log In" />
        {isInvalidLogin && <p>Incorrect email or password</p>}
      </form>
    </StyledLogin>
  );
};

export default Login;
