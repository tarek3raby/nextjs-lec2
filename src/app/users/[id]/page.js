
import { getAllUsers, getUserById } from "@/app/_lib/data-service";
import { GET } from "@/app/api/users/[id]/route";

export async function generateMetadata({params}){
  const user = await GET(null,{params});
  return{
    title: user.name  
  }
 }
 export async function generateStaticParams() {
  
  const users = await getAllUsers()
  return users.map(user => ({id: user._id}));
}
 

const page = async ({ params }) => {
  console.log(params);

  const user = await GET(null,{params});
  return (
    <>
      <div className="card border-info mb-3">
        <div className="card-header">Name: {user.name}</div>
        <div className="card-body">
          <h5 className="card-title">Website: {user.website} </h5>
          <p className="card-text">
          Email: {user.email} <br/>
          Company: {user.company} <br/>
          Phone: {user.phone} <br/>
          User Name: {user.username} <br/>

          </p>
        </div>
      </div>
    </>
  );
};

export default page;
