import CommunityForm from '@components/CommunityForm';
import styles from './CreateCommunity.module.scss';
import { useCreateCommunity } from '@hooks/useCreateCommunity';
import { isAxiosError } from 'axios';
import Alert from '@components/ui/Alert';

const CreateCommunity = () => {
  const { mutateAsync: createCommunityMutation, error, isSuccess } = useCreateCommunity();

  const handleSubmit = async (values: { communityName: string; description: string }) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await createCommunityMutation(values);
  };

  return (
    <div className={styles.container}>
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
      {isSuccess && <Alert type="success" message="Community successfully created" />}
      <CommunityForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateCommunity;
