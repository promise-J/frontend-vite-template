import { useGetMeQuery } from '../services/user.api';

export default function ProfilePage() {
  const { data, isLoading } = useGetMeQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  );
}
