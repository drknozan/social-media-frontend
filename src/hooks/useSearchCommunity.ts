import { useQuery } from '@tanstack/react-query';
import { getCommunities } from '@api/Community';

export const useSearchCommunity = ({ query, offset, limit }: { query: string; offset: string; limit: string }) => {
  return useQuery({
    queryKey: ['search', query, offset],
    queryFn: () => getCommunities({ query, offset, limit }),
  });
};
