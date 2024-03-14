import styles from './Register.module.scss';
import RegisterForm from '@components/RegisterForm';
import { register } from '@store/slices/authSlice';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@components/ui/Alert';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (values: { username: string; email: string; password: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await dispatch(register(values));
  };

  return (
    <div className={styles.container}>
      {user && <Navigate to="/" replace />}
      {error && <Alert type="error" message={error.message} />}
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
