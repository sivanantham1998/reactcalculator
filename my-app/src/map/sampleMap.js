export default function SampleMap()
{
    const a=['aaa','werty']
    // let b=a.push(true);
    // console.log(a);
    return(
        <>
        
        {a.map((dt)=>
            <ul>
                <li>
                    {dt}
                </li>
                <li></li>
            </ul>
            
        )}
        
        </>
    )
}