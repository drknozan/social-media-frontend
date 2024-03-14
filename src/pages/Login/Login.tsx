import styles from './Login.module.scss';
import LoginForm from '@components/LoginForm';
import { login } from '@store/slices/authSlice';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@ui/Alert';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (values: { email: string; password: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await dispatch(login(values));
  };

  return (
    <div className={styles.container}>
      {user && <Navigate to="/" replace />}
      {error && <Alert type="error" message={error.message} />}
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
