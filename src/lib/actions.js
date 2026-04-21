import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

//Created Server Actions(API private) (Inside the function)
export const createATask = async (formData) => {
  'use server'
  // const name = formData.get('name');
  // const title = formData.get('title');
  // const description = formData.get('description');
  // const priority = formData.get('priority');
  // const status = formData.get("status");
  // const assignedTo = formData.get('assignedTo');
  // // console.log('Adding a task with name :', formData)
  // const newTask = { title, description, priority, status, assignedTo };

  // Converting form data to object
  const newTask = Object.fromEntries(formData.entries());
  console.log('Adding a task with name: ', newTask);

  // await postTask(newTask);
  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath('/tasks')
  }
  return res;
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