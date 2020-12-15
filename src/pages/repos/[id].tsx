import { GetServerSideProps } from 'next';
import Link from 'next/link'

import { useRouter } from 'next/router';

import * as Styles from 'styles/pages/Repos';

interface Props {
  repos: [
    RepoProps
  ];
  user: UserProps;
}

interface RepoProps {
  owner: string,
  repo: string,
  description: string,
  language: string,
  stars: string,
  forks: string
}

interface UserProps {
  login: string;
  name: string;
  avatar_url: string;
}


function ReposPage (props: Props) {
  const router = useRouter()
  const { id } = router.query;

  const { user } = props;
  const { repos } = props;

  return (
    <Styles.Container>
      <Styles.CardUser>
        <div>
          <img src={user.avatar_url} alt=""/>
          <h1>{user.name}</h1>
        </div>
      </Styles.CardUser>
      <Styles.Main>
        {repos.map((e: RepoProps) => {
          return (
            <Styles.RepoCard>
              <Link href={`https://github.com/${id}/${e.repo}`}>
                <a>
                  <div>
                    {e.stars}
                    <img src="/img/star.svg" />
                  </div>
                  <h1>{e.repo}</h1>
                  <p>{e.description}</p>
                  <span><b>languange:</b> {e.language}</span>
                </a>
              </Link>
            </Styles.RepoCard>
          );
        })}
      </Styles.Main>
    </Styles.Container>
  )
}

export default ReposPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const reposRes = await fetch(`https://gh-pinned-repos.now.sh/?username=${query.id}`)

  const userRes = await fetch(`https://api.github.com/users/${query.id}`)

  const repos = await reposRes.json()

  const user = await userRes.json()

  if (!repos && !userRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { repos, user },
  }
}
  