import styles from './CommunityForm.module.scss';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '@ui/Input';
import Button from '@ui/Button';
import { PlusOutlined } from '@ant-design/icons';
import Textarea from '@ui/Textarea';

const CommunityForm = ({
  onSubmit,
}: {
  onSubmit: ({ communityName, description }: { communityName: string; description: string }) => void;
}) => {
  const initialValues = {
    communityName: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    communityName: Yup.string()
      .max(40, 'Community name can be 40 characters maximum')
      .required('Community name is required'),
    description: Yup.string()
      .max(360, 'Community description can be 360 characters maximum')
      .required('Community decription is required'),
  });

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Create new community</h1>
            <div className={styles.line}></div>
            <div className={styles.formElement}>
              <Input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.communityName}
                name="communityName"
                placeholder="Community name"
                s="sm"
              />
              <ErrorMessage name="communityName" component="div" className={styles.error} />
            </div>
            <div className={styles.formElement}>
              <Textarea
                value={values.description}
                onChange={handleChange}
                placeholder="Description..."
                name="description"
                onBlur={handleBlur}
              />
              <ErrorMessage name="description" component="div" className={styles.error} />
            </div>
            <Button type="submit" loading={isSubmitting}>
              Create <PlusOutlined />
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CommunityForm;
