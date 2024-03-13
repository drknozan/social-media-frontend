import styles from './RegisterForm.module.scss';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '@ui/Input';
import Button from '@ui/Button';
import { Link } from 'react-router-dom';

const RegisterForm = ({
  onSubmit,
}: {
  onSubmit: ({ username, email, password }: { username: string; email: string; password: string }) => void;
}) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().max(18, 'Username can be 18 characters maximum').required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters minimum')
      .max(30, 'Password can be 30 characters maximum')
      .required('Password is required'),
    email: Yup.string().min(5).email('Not a valid email').required('Email is required'),
  });

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className={styles.formElement}>
              <Input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                name="username"
                placeholder="Username"
                s="sm"
              />
              <ErrorMessage name="username" component="div" className={styles.error} />
            </div>
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
            <Button type="submit" loading={isSubmitting}>
              Register
            </Button>
            <Link to="/login" className={styles.link}>
              Already have an account? Login.
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
