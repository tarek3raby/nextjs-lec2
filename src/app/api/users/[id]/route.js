import { getAllUsers, getUserById } from '@/app/_lib/userfetch';

export async function generateStaticParams() {
  
    const users = await getAllUsers()
    return users.map(user => ({id: user._id.toString()}));
  }

export async function GET(request, { params }) {
    const id  = params.id;
    

    try {
        const user = await getUserById(id)

        if (user) {
            return new Response(JSON.stringify(user), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }
    } catch (error) {
        // console.error('Error fetching user:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
