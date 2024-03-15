import { deleteComment } from '@api/Post';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteComment = (slug: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', slug] });
    },
  });
};
