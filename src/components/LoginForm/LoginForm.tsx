import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.scss';
import Input from '@components/ui/Input';
import Button from '@components/ui/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().min(5, 'Not a valid email').email('Not a valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters minimum')
      .max(30, 'Password can be 30 characters maximum')
      .required('Password is required'),
  });

  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className={styles.formElement}>
              <Input
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                placeholder="Email"
                s="sm"
              />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.formElement}>
              <Input
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                placeholder="Password"
                s="sm"
              />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
            <Link to="/register" className={styles.link}>
              Don't have an account? Register.
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
