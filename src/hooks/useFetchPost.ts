import { useQuery } from '@tanstack/react-query';
import { getPost } from '@api/Post';

export const useFetchPost = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPost(slug),
  });
};
