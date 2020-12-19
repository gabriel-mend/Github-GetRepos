import { useRouter } from 'next/router'
import { useState } from 'react';

import * as Styles from 'styles/pages/Home';

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
            <Styles.Logo src="/img/GitHub-logo.png" />
            <Styles.Input 
                type="text"
                placeholder="Nome do usuário no Github"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <Styles.Button onClick={handleSearchRepos}>Pesquisar</Styles.Button>
        </Styles.Main>
    )
}

export default Home;