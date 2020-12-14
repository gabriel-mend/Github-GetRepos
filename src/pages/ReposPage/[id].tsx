import { GetServerSideProps } from 'next';

import { useRouter } from 'next/router';

interface RepoProps {
  owner: string,
  repo: string,
  description: string,
  language: string,
  stars: string,
  forks: string
}[]


const ReposPage:React.FC = ({ data }: any) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>{id}</h1>
            {data.map((e: RepoProps) => (
                <h1>{e.repo}</h1>
            ))}
        </div>
        
    )
}

export default ReposPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`https://gh-pinned-repos.now.sh/?username=${query.id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
  