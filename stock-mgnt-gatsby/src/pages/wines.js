import * as React from 'react'

const winesImage = {
    height: '10rem'
}

export default function Wines() {
    /*
    1. Fetch from https://api.sampleapis.com/wines/reds
    2. Trsnsform into JSX
    */
   let items = []
   let [WinesTitles, setWinesTitles] = React.useState([])

    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/wines/reds
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()
        for(let i=0; i<wines.length;i++) {
            console.log(wines[i].winery)
            items.push(<li>
                <div style={{ width:"40rem", overflow: "hidden" }} >
                    <div style={{ width: "11rem", float: "left" }}> 
                        <img style={winesImage} src={wines[i].image} /> 
                    </div>
                    <div >  
                        <b>{wines[i].winery}</b> - {wines[i].wine} 
                    </div>
                    <div >  
                        Rating-Average: {wines[i].rating.average} 
                    </div>
                    <div>
                        Rating-reviews: {wines[i].rating.reviews}
                    </div>
                    <div>
                        Location: {wines[i].location}
                    </div>

                </div>
            </li>)
        }

        setWinesTitles(items)
    }, [])

    return (
        <>
            <h1>Wines</h1>
            <ul>
                {WinesTitles}
            </ul>
        </>
    )
}

