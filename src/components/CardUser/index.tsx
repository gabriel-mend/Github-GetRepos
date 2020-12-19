import * as Styles  from '../../styles/components/CardUser';

export interface UserProps {
    user: {
        login: string;
        name: string;
        avatar_url: string;
        bio: string;
        followers: number;
        following: number;
    }
}

const CardUser: React.FC<UserProps> = ({ user }) => {
  return (
    <Styles.CardUser>
        <a href={`https://github.com/${user.login}`}>
        <img src={user.avatar_url} alt=""/>
        <h1>{user.name}</h1>
        <span>{user.login}</span>
        <p>{user.bio}</p>
        <div>
            <svg className="" height="20" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true">
            <path 
                fill-rule="evenodd" 
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z">
            </path>
            </svg> {user.followers} followers · {user.following} following
        </div>
        
        </a>
    </Styles.CardUser>
  );
}

export default CardUser;