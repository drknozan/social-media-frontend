import styles from './SettingsForm.module.scss';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '@ui/Input';
import Button from '@ui/Button';
import { SaveOutlined } from '@ant-design/icons';
import Switch from '@ui/Switch';

const SettingsForm = ({
  profileVisibility,
  onSubmit,
}: {
  profileVisibility: boolean;
  onSubmit: ({
    email,
    password,
    bio,
    profileVisibility,
  }: {
    email: string;
    password: string;
    bio: string;
    profileVisibility: boolean;
  }) => void;
}) => {
  const initialValues = {
    email: '',
    password: '',
    profileVisibility,
    bio: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be 8 characters minimum')
      .max(30, 'Password can be 30 characters maximum')
      .optional(),
    email: Yup.string().email('No a valid email').optional(),
    profileVisiblity: Yup.boolean().optional(),
    bio: Yup.string().max(50, 'Bio can be 50 characters maximum').optional(),
  });

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Update User Information</h1>
            <div className={styles.line}></div>
            <div className={styles.formElement}>
              <Input
                type="text"
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
            <div className={styles.formElement}>
              <Input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bio}
                name="bio"
                placeholder="Bio"
                s="sm"
              />
              <ErrorMessage name="bio" component="div" className={styles.error} />
            </div>
            <div className={styles.formSwitchContainer}>
              <Switch
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.profileVisibility}
                name="profileVisibility"
              />
              Profile Visibility
            </div>
            <Button type="submit" loading={isSubmitting}>
              Save <SaveOutlined />
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SettingsForm;
