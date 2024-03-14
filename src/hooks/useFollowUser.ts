import { followUser } from '@api/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useFollowUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: followUser,
    onSuccess: follow => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['user', follow.followed?.username] });
    },
  });
};
