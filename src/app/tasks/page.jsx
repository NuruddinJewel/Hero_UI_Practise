import AddTask from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/actions';
import { getTasks } from '@/lib/tasks';
import { Button, Link } from '@heroui/react';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tasks : {tasks.length}</h2>
            <AddTask createATask={createATask}></AddTask>
            <Link href='/tasks/new'>
                <Button variant="secondary">Add Task</Button>
            </Link>
            <div className="grid grid-cols-3 gap-4">
                {
                    tasks.map(task => <TasksCard key={task.id}
                        task={task}>

                    </TasksCard>

                    )
                }
            </div>
        </div>
    );
};

export default TasksPage;

// Settings Cards here grid grid-cols-3 gap-4 where data is fetched
// Data fetched process
//tasks.js-> tasks folder->page.jsx-> Components(folder)->TasksCard.jsx