export default function List(){

    const company=
    [
        {name:'Sivanantham',
        skills:[
            {dt:'erode',state:'tamilnadu',homeTown:'Thanjavur'}            
        ]
        },
        {name:'Sk',
        skills:[
            {dt:'erode',state:'tamilnadu',homeTown:'Kangeyam'}
        ]

        }
    ]
    return(
        <>

        <div>
            <table className="table table-bordered border-info table-responsive bg-secondary">
                <tr>
                    {company.map((personName)=>(
                        <>
                        <th>
                            {personName.name}
                            {personName.skills.map((personDetails)=>(
                                <table className="table table-bordered border-info table-responsive bg-secondary">
                                <tr>
                                    <th>{personDetails.dt}</th></tr>
                                    <tr><th>{personDetails.homeTown}</th></tr>
                                    <tr><th>{personDetails.state}</th>
                                </tr>
                                </table>
                            ))}
                        </th>
                        </>
                    ))}
                </tr>
            </table>
        </div>

        </>
    )
}