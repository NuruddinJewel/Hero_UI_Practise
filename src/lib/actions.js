//Created Server Actions(API private) (Inside the function)
export const createATask = async (formData) => {
  'use server'
  const name = formData.get('name');
  console.log('Adding a task with name :', formData)
}

/* 

'use server' //server actions different file
//send to client component
 
import { auth } from '@/lib/auth'
 
export async function createPost(formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Mutate data
  // Revalidate cache
}


*/