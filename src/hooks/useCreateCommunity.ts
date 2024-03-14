import { createCommunity } from '@api/Community';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
