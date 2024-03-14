import { getUser } from '@api/User';
import { useQuery } from '@tanstack/react-query';

export const useFetchUser = (username: string) => {
  return useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
  });
};
