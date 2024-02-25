import { useState } from "react"


// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName = 'Unknown', name, inicialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button isfollowing' : 'tw-followCard-button'
    

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
            <article className='tw-followCard'> 
                <header className='tw-followCard-header'>
                    <img className="tw-followCard-avatar"
                        src = {`https://unavatar.io/${userName}`}
                        alt="El avatar de midudev" />
                    <div className='tw-followCard-info'>
                        <strong>{name}</strong> 
                        <strong>{children}</strong>   {/**Janeth Zuniga */}
                        <span className='tw-followCard-infoUserName'>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className="tw-followCard-text">{text}</span>
                        <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                    </button>
                </aside>
            </article>
    )
}