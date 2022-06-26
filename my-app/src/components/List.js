import '../styles/list.css';
import {animes} from '../datas/data.js';
import Anime from './Anime.js'



function List() {

    return (
        <div className='main-content'>
            <div className='scan-title'>
            <canvas className='strow'></canvas>
            <h1 id='scan-title'>Derniers scan vf ajoutés</h1>
            </div>

            <ul className='anime-list'>{animes.map(anime => 
             (
                 <div className='anime-item'>
                     <Anime  name={anime.name} cover={anime.cover}/>
                 </div>
             )
                )}</ul>



        </div>
    )
}


export default List;
