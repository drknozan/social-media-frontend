import { joinCommunity } from '@api/Community';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useJoinCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: joinCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
