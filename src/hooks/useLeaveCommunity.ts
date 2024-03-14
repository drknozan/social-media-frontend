import { leaveCommunity } from '@api/Community';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLeaveCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: leaveCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
