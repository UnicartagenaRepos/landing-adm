'use client';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import React from 'react';

// export default async function weatherApi() {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589`);
//     const data = await res.json();
//     return  data
// }



async function getData() {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()




  }

// type Repo = {
//     weather: string[],
//     main: string
// }


 
//   export const getStaticProps = (async (context) => {
//     const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.4195841&lon=-75.5271224&lang=es&units=metric&appid=cc8411344583128d1ea0437c84b2f589')
//     const repo = await res.json()
//     console.log(repo)
//     return { props: { repo } }
//   }) satisfies GetStaticProps<{repo: Repo}>

  export default async function Weather() {

    // const [hydrated, setHydrated] = React.useState(false);
	// React.useEffect(() => {
	// 	// This forces a rerender, so the date is rendered
	// 	// the second time but not the first
	// 	setHydrated(true);
	// }, []);
	// if (!hydrated) {
	// 	// Returns null on first render, so the client and server match
	// 	return null;
	// }

    
    const data = await getData()
    const we = data.weather[0].description
    console.log(data.weather[0].description)
    return(<div>{data.weather}</div>)
 
    // return <main>{data.weather[0].description}</main>
  }