import { upvotePost } from '@api/Post';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpvotePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: upvotePost,
    onSuccess: post => {
      queryClient.invalidateQueries({ queryKey: ['post', post.slug] });
    },
  });
};
