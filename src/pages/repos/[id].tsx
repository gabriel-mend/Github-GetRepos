import { GetServerSideProps } from 'next';

import { useRouter } from 'next/router';

import * as Styles from 'styles/pages/Repos';

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
    <Styles.Container>
      <Styles.CardUser>
        
      </Styles.CardUser>
      <Styles.Main>
        {data.map((e: RepoProps) => (
          <Styles.RepoCard>
            <div>
              {e.stars} 
              <img src="/img/star.svg" />
            </div>
            <h1>{e.repo}</h1>
            <p>{e.description}</p>
            <span>languange: {e.language}</span>
          </Styles.RepoCard>
        ))}
      </Styles.Main>
    </Styles.Container>
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
  