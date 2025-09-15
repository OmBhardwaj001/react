import React,{useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data,setData] = useState();
  // useEffect(() => {
  //   fetch('https://api.github.com/users/OmBhardwaj001')
  //   .then((response) => response.json())
  //   .then((data) => setData(data))
  //   .catch((error)=> console.log("error fetching data", error ));
  // }, [])

 
  return (
    <div className='bg-black text-white text-center p-6 text-3xl'> Github Followers : {data?.followers} 
    <img src={data?.avatar_url} width='300px' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/OmBhardwaj001');
  return response.json();
}