import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tasks : {tasks.length}</h2>
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