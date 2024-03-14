import { unfollowUser } from '@api/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUnfollowUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: unfollowUser,
    onSuccess: follow => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['user', follow.followed?.username] });
    },
  });
};
