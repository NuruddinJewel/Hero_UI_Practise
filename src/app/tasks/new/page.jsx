'use client'
import { newTaskAction } from '@/lib/actions';
import { Button, Input, Label, ListBox, Modal, TextField, Select, Form, FieldError } from '@heroui/react';
import React from 'react';

const NewTask = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h2 className="text-5xl">Add a New Task</h2>
            <div>
                {/* Convert form->Form */}
                <Form action={newTaskAction} className="flex flex-col gap-4">
                    <TextField isRequired
                        minLength={5}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Title must be at least 5 characters or longer";
                            }
                        }}
                        className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your Task Title" />
                        <FieldError />
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>Task Description</Label>
                        <Input placeholder="Enter your Task Description" />
                    </TextField>
                    {/* <TextField className="w-full" name="phone" type="tel">
                                    <Label>Phone</Label>
                                    <Input placeholder="Enter your phone number" />
                                  </TextField> */}

                    <Select name="priority" className="w-[256px]" placeholder="Select One" selectionMode="multiple">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox selectionMode="multiple">
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    {/* <TextField className="w-full" name="company">
                                    <Label>Company</Label>
                                    <Input placeholder="Enter your company name" />
                                  </TextField> */}

                    <Select name="status" className="w-[256px]" placeholder="Select One" selectionMode="multiple">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox selectionMode="multiple">
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="Completed">
                                    Completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <TextField className="w-full" name="assignedTo">
                        <Label>Assigned To</Label>
                        <Input placeholder="Task Assigned To" />
                    </TextField>
                    {/* <Modal.Footer> */}
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    {/* <Button slot="close">Send Message</Button> */}
                    <Button slot="close" type="submit">Submit Task</Button>
                    {/* </Modal.Footer> */}
                </Form>
            </div>
        </div>
    );
};

export default NewTask;



// 'use client'
// import { newTaskAction } from '@/lib/actions';
// import { Button, Input, Label, ListBox, TextField, Select } from '@heroui/react';
// import React, { useState } from 'react';

// const NewTask = () => {
//     const [priority, setPriority] = useState('');
//     const [status, setStatus] = useState('');

//     return (
//         <div className='w-1/2 mx-auto'>
//             <h2 className="text-5xl">Add a New Task</h2>
//             <form action={newTaskAction} className="flex flex-col gap-4">

//                 <TextField className="w-full">
//                     <Label>Task Title</Label>
//                     <Input name="title" type="text" placeholder="Enter your Task Title" />
//                 </TextField>

//                 <TextField className="w-full">
//                     <Label>Task Description</Label>
//                     <Input name="description" type="text" placeholder="Enter your Task Description" />
//                 </TextField>

//                 {/* Hidden inputs to capture HeroUI Select values */}
//                 <input type="hidden" name="priority" value={priority} />
//                 <Select
//                     className="w-[256px]"
//                     placeholder="Select Priority"
//                     // onSelectionChange={(val) => setPriority([...val].join(','))}
//                     onSelectionChange={(val) => setPriority(val instanceof Set ? [...val].join(',') : val)}
//                 >
//                     <Label>Priority</Label>
//                     <Select.Trigger>
//                         <Select.Value />
//                         <Select.Indicator />
//                     </Select.Trigger>
//                     <Select.Popover>
//                         <ListBox selectionMode="single">
//                             <ListBox.Item id="low">Low</ListBox.Item>
//                             <ListBox.Item id="medium">Medium</ListBox.Item>
//                             <ListBox.Item id="high">High</ListBox.Item>
//                         </ListBox>
//                     </Select.Popover>
//                 </Select>

//                 <input type="hidden" name="status" value={status} />
//                 <Select
//                     className="w-[256px]"
//                     placeholder="Select Status"
//                     onSelectionChange={(val) => setStatus([...val].join(','))}
//                 >
//                     <Label>Status</Label>
//                     <Select.Trigger>
//                         <Select.Value />
//                         <Select.Indicator />
//                     </Select.Trigger>
//                     <Select.Popover>
//                         <ListBox selectionMode="single">
//                             <ListBox.Item id="pending">Pending</ListBox.Item>
//                             <ListBox.Item id="progress">Progress</ListBox.Item>
//                             <ListBox.Item id="completed">Completed</ListBox.Item>
//                         </ListBox>
//                     </Select.Popover>
//                 </Select>

//                 <TextField className="w-full">
//                     <Label>Assigned To</Label>
//                     <Input name="assignedTo" placeholder="Task Assigned To" />
//                 </TextField>

//                 <Button variant="secondary" type="button">Cancel</Button>
//                 <Button type="submit">Submit Task</Button>

//             </form>
//         </div>
//     );
// };

// export default NewTask;

/* 
Showing Error

<TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>



*/