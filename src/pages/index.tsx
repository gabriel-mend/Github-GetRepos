import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react';

import * as Styles from 'styles/home.styles';

const Home = () => {
    const [user, setUser] = useState('');
    const router = useRouter()

    function handleSearchRepos() {
        if(user) {
            router.push(`/repos/${user}`)
        }
    }
    return (
        <Styles.Main>
            <Styles.Logo src="GitHub-logo.png" />
            <input 
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <Styles.Button onClick={handleSearchRepos}>Pesquisar</Styles.Button>
        </Styles.Main>
    )
}

export default Home;