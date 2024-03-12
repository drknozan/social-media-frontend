import styles from './CommentForm.module.scss';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@ui/Button';
import { SendOutlined } from '@ant-design/icons';
import Textarea from '@ui/Textarea';

const CommentForm = ({ onSubmit }: { onSubmit: ({ content }: { content: string }) => void }) => {
  const initialValues = {
    content: '',
  };

  const validationSchema = Yup.object().shape({
    content: Yup.string().max(750, 'Comment can be 750 characters maximum').required('Content is required'),
  });

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Textarea value={values.content} onChange={handleChange} name="content" placeholder="Write a comment..." />
            <ErrorMessage name="content" component="div" className={styles.error} />
            <Button size="md" variant="primary" type="submit" loading={isSubmitting}>
              Submit
              <SendOutlined />
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CommentForm;
