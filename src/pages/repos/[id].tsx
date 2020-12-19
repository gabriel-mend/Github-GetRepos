import CardUser, { UserProps } from 'components/CardUser';
import { GetServerSideProps } from 'next';
import RepoCard, { RepoProps } from 'components/RepoCard';

import * as Styles from 'styles/pages/Repos';

interface Props {
  repos: [
    RepoProps["repo"]
  ];
  user: UserProps["user"];
}


function ReposPage (props: Props) {
  const { user } = props;
  const { repos } = props;

  return (
    <Styles.Container>
      <CardUser user={user} />
      <Styles.Main>
        {repos.map((e: RepoProps["repo"]) => {
          return (
            <RepoCard repo={e} key={e.repo} />
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
  