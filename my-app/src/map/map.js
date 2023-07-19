export default function Map()
{
    const name=
        [
            {id:1,name:'siva'},
            {id:2,name:'erode'}
        ]
        const person=[
            {name:'siva',
            skills:[
                {
                    language:'tamil',
                    programming:'react'
                }
            ]}
        ]
    
    return(
        <>

        <ul>

            {
                name.map((e)=>(
                    <li key={e.id}>{e.id}</li>
                    
                ))
            }
            {
                name.map((e)=>(
                    <li key={e.id}>{e.name}</li>
                ))
            }



        </ul>

        <div>
           {person.map((e)=>(
            <div>
                <p key={e.id}>{e.name}</p>
                <div>
                    <p key={e.id}>{e.skills.map((sk)=>(
                        <>
                        {sk.language}-{sk.programming}
                        </>
                    ))}</p>
                </div>
            </div>
           ))}
        </div>
        
        </>
    )
}