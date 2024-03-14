import { downvotePost } from '@api/Post';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDownvotePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: downvotePost,
    onSuccess: post => {
      queryClient.invalidateQueries({ queryKey: ['post', post.slug] });
    },
  });
};
