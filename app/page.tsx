

const data = async()=>{
  const res = await fetch("http://localhost:3000/data/" ,{next:{
    revalidate:60,
  }  } )
  return await res.json()
}

export default async function Home() {
  
  const about = await data()

  return (
    <div >
      <p>
        {about}
      </p>
    </div>
  );
}
