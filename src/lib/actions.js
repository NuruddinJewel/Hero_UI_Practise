// import { revalidatePath } from "next/cache";
// import { postTask } from "./tasks";
// import { redirect } from "next/navigation";

//Created Server Actions(API private) (Inside the function)
// export const createATask = async (formData) => {
//   'use server'
//   // const name = formData.get('name');
//   // const title = formData.get('title');
//   // const description = formData.get('description');
//   // const priority = formData.get('priority');
//   // const status = formData.get("status");
//   // const assignedTo = formData.get('assignedTo');
//   // // console.log('Adding a task with name :', formData)
//   // const newTask = { title, description, priority, status, assignedTo };

//   // Converting form data to object
//   const newTask = Object.fromEntries(formData.entries());
//   console.log('Adding a task with name: ', newTask);

//   // await postTask(newTask);
//   const res = await postTask(newTask);
//   if (res.ok) {
//     revalidatePath('/tasks')
//   }
//   return res;
// }

// export const newTaskAction = async (formData) => {
//   'use server'
//   const newTask = Object.fromEntries(formData.entries());

//   console.log('Adding a task with name: ', newTask);

//   const res = await postTask(newTask);
//   if (res.ok) {
//     revalidatePath('/tasks');
//     redirect('/tasks');
//   }
// }
// export const newTaskAction = async (formData) => {
//   'use server'
//   const newTask = Object.fromEntries(formData.entries());
//   console.log('Adding a task:', newTask);

//   const res = await postTask(newTask);

//   console.log('res.ok:', res.ok);

//   if (res.ok) {
//     revalidatePath('/tasks');
//     redirect('/tasks');
//   }
// }




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

'use server' // ← Add this at the very top of the file

import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
  // No need for inline 'use server' anymore
  const newTask = Object.fromEntries(formData.entries());
  console.log('Adding a task with name: ', newTask);

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath('/tasks');
  }
  return res;
}

export const newTaskAction = async (formData) => {
  // No need for inline 'use server' anymore
  const newTask = Object.fromEntries(formData.entries());
  console.log('Adding a task with name: ', newTask);

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath('/tasks');
    redirect('/tasks');
  }

  //Error Handling
  if (!newTask.title) {
    return { success: false, error: 'Title is required' }
  }
  if (newTask.title.length < 5) {
    return { success: false, error: "Title must be at least 5 characters or longer " }
  }

}



