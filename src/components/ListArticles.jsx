import {useState, useEffect} from 'react'
import SearchResult from './SearchResult'
import ListArticle from './css/ListArticle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons'


export default function ListArticles({data}) {

    const bestIcon = <FontAwesomeIcon icon={faStar} />
    const newIcon = <FontAwesomeIcon icon={faArrowUp} />
    const abcIcon = <FontAwesomeIcon icon={faArrowDownAZ} />

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let posts = data.hits.map(p => p)
        setPosts(posts)
    }, []);

    const [aisActive, asetActive] = useState("false");
    const [bisActive, bsetActive] = useState("false");
    const [cisActive, csetActive] = useState("false");

    const handleToggle = (btn) => {
        if(btn === 'a'){
            asetActive(true);
            bsetActive(false);
            csetActive(false);
        }else if(btn === 'b'){
            asetActive(false);
            bsetActive(true);
            csetActive(false);
        }else{
            asetActive(false);
            bsetActive(false);
            csetActive(true);
        }
      
    };

    const sortBest = () => {
        const sortBestPosts = [...posts]
        sortBestPosts.sort((a, b) => a.points < b.points ? 1 : -1)
        setPosts( sortBestPosts )
        handleToggle('a')
    }

    const sortNew = () => {
        const sortNewPosts = [...posts]
        sortNewPosts.sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        setPosts( sortNewPosts )
        handleToggle('b')
    }

    const sortAbc = () => {
        const sortAbcPosts = [...posts]
        sortAbcPosts.sort((a, b) => a.title > b.title ? 1 : -1)
        setPosts( sortAbcPosts )
        handleToggle('c')
    }
    
    return(
        <main className='list-article'>
            <section className='top-filter'>
                <div className='drop-filter'>
                    <button onClick={sortBest} className={`buttonF button-${aisActive ? "danger" : "success"}`}>{bestIcon} Best</button>
                    <button onClick={sortNew} className={`buttonF button-${bisActive ? "danger" : "success"}`}>{newIcon} New</button>
                    <button onClick={sortAbc} className={`buttonF button-${cisActive ? "danger" : "success"}`}>{abcIcon} Abc</button>
                </div>
                <div className='responce-data'>
                    <p>{data.nbHits} results ({data.serverTimeMS / 1000} seconds)</p>
                </div>
            </section>
            
            {posts.map((post, index) => {
                    return(
                        <div key={index}>
                        <SearchResult createdAt={post.created_at} author={post.author} title={post.title} url={post.url} points={post.points} numComments={post.num_comments} />
                        </div>
                    )
            })}
        </main>
    )
}