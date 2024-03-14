import { createComment } from '@api/Post';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateComment = (slug: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', slug] });
    },
  });
};
