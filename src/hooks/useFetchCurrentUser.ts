import { useQuery } from '@tanstack/react-query';
import { getCurrentUserProfile } from '@api/User';

export const useFetchCurrentUser = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getCurrentUserProfile,
  });
};
