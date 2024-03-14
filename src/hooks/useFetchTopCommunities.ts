import { useQuery } from '@tanstack/react-query';
import { getTopCommunities } from '@api/Community';

export const useFetchTopCommunities = () => {
  return useQuery({
    queryKey: ['top-communities'],
    queryFn: getTopCommunities,
  });
};
