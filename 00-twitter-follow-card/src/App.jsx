import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'carloszuniga',
        name: 'Carlos Zuniga',
        isFollowing: false
    },
    {
        userName: 'JorgeTrochez',  
        name: 'Jorge Trochez',      
        isFollowing: true
    },
    {
        userName: 'carlostonto',  
        name: 'Carlos Trochez',      
        isFollowing: true
    }
]


export function App() {
    return(
        <section className='App'>
            {
               users.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            inicialIsFollowing={isFollowing}
                        >
                            {name}     
                        </TwitterFollowCard>
                    )          
                )  
            }
        </section>    
    )
}




/*Ejemplo 1 
export function App () {
  
    return(
        <section className='App'>
             <TwitterFollowCard 
                    userName='midudev'
                    inicialIsFollowing={true} 
                    name='Miguel Angel Duran'
              />

             <TwitterFollowCard 
                   userName='carloszuniga' 
                   inicialIsFollowing={false}
                   name='Carlos Zuniga'
              />

             <TwitterFollowCard 
                    userName='JorgeTrochez' 
                    inicialIsFollowing={true} 
                    name='Jorge Trochez'
               />
             
             <TwitterFollowCard 
                    userName='AnaZuniga' 
                    inicialIsFollowing={false}
                    name='Ana Zuniga'
              />


            <TwitterFollowCard inicialIsFollowing={false}>
                Janeth Zuniga
            </TwitterFollowCard>


        </section>
      
    )
} 

*/