import SettingsForm from '@components/SettingsForm';
import styles from './Settings.module.scss';
import { useUpdateUser } from '@hooks/useUpdateUser';
import { isAxiosError } from 'axios';
import Alert from '@ui/Alert';
import { useFetchCurrentUser } from '@hooks/useFetchCurrentUser';
import Loading from '@components/Loading';

const Settings = () => {
  const { mutateAsync: updateUserMutation, error, isSuccess } = useUpdateUser();
  const { data, isLoading } = useFetchCurrentUser();

  const handleSubmit = async (values: { email: string; password: string; bio: string; profileVisibility: boolean }) => {
    const formData: { [key: string]: string | boolean } = {};

    Object.entries(values).forEach(([key, value]) => {
      if (value !== '' && value !== undefined) {
        formData[key] = value;
      }
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    await updateUserMutation(formData);
  };

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      {isSuccess && <Alert type="success" message="Successfully updated" />}
      {data && <SettingsForm profileVisibility={data.profileVisibility} onSubmit={handleSubmit} />}
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
    </div>
  );
};

export default Settings;
