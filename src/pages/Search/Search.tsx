import { useSearchCommunity } from '@hooks/useSearchCommunity';
import CommunityCard from '@components/CommunityCard';
import { useSearchParams } from 'react-router-dom';
import Loading from '@components/Loading';
import Alert from '@components/ui/Alert';
import Pagination from '@components/Pagination';
import { useEffect, useState } from 'react';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const query = searchParams.get('q') || '';
  const limit = 10;
  const offset = (currentPage - 1) * limit;

  const { data, isLoading, error } = useSearchCommunity({
    query,
    offset: offset.toString(),
    limit: limit.toString(),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <Alert type="error" message={error.message} />}
      {data && (
        <>
          {data.result.map(community => (
            <CommunityCard
              key={community.name}
              name={community.name}
              description={community.description}
              createdAt={community.createdAt}
              _count={community._count}
            />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.count / limit)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Search;
