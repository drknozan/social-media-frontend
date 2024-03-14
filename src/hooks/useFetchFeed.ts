import { useQuery } from '@tanstack/react-query';
import { getUserFeed } from '@api/User';

export const useFetchFeed = () => {
  return useQuery({
    queryKey: ['feed'],
    queryFn: getUserFeed,
  });
};
