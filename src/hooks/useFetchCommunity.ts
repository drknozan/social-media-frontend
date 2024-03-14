import { useQuery } from '@tanstack/react-query';
import { getCommunity } from '@api/Community';

export const useFetchCommunity = (communityName: string) => {
  return useQuery({
    queryKey: ['community', communityName],
    queryFn: () => getCommunity(communityName),
  });
};
