import { useQuery } from '@tanstack/react-query';
import { getFollowRecommendations } from '@api/User';

export const useFetchRecommendations = () => {
  return useQuery({
    queryKey: ['follow-recommendations'],
    queryFn: getFollowRecommendations,
  });
};
