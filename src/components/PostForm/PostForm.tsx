import styles from './PostForm.module.scss';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '@ui/Input';
import Button from '@ui/Button';
import Select from '@ui/Select';
import Textarea from '@ui/Textarea';
import { SendOutlined } from '@ant-design/icons';

const PostForm = ({
  communities,
  onSubmit,
}: {
  communities: string[];
  onSubmit: ({ title, content, communityName }: { title: string; content: string; communityName: string }) => void;
}) => {
  const initialValues = {
    title: '',
    content: '',
    communityName: communities[0],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().max(180, 'Post title can be 180 characters maximum').required('Title is required'),
    content: Yup.string().max(1000, 'Content can be 1000 characters maximum').notRequired(),
  });

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Create new post</h1>
            <div className={styles.line}></div>
            <div className={styles.formElement}>
              <Input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                name="title"
                placeholder="Title"
                s="sm"
              />
              <ErrorMessage name="title" component="div" className={styles.error} />
            </div>
            <div className={styles.formElement}>
              <Textarea
                value={values.content}
                onChange={handleChange}
                placeholder="Content..."
                name="content"
                onBlur={handleBlur}
              />
              <ErrorMessage name="content" component="div" className={styles.error} />
            </div>
            <div className={styles.formElement}>
              <Select
                onChange={handleChange}
                onBlur={handleBlur}
                options={communities}
                name="communityName"
                value={values.communityName}
              />
            </div>
            <Button type="submit" loading={isSubmitting}>
              Share <SendOutlined />
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;
