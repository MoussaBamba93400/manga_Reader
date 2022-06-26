import '../styles/anime.css'



function Anime({cover, name}) {
    return (
        <li>
            <img className="anime" src={cover}></img>
            <h4 className="anime-name">{name}</h4>
        </li>
    )
}



export default Anime;