'use client'
export default function error({error}) {
  console.log(error.message);
  
  return (
    <div>error</div>
  )
}
