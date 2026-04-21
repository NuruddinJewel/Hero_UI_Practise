"use client";
import React from 'react';
// import { Envelope } from "@gravity-ui/icons";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { ListBox, Select } from "@heroui/react";
const AddTask = ({ createATask }) => {
  return (
    <Modal>
      <Button variant="secondary">Add Some Tasks</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add a Task</Modal.Heading>
              {/* <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p> */}
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                {/* <form className="flex flex-col gap-4"> */}
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your Task Title" />
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
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    {/* <Button slot="close">Send Message</Button> */}
                    <Button slot="close" type="submit">Submit Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            {/* <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddTask;

/* 

"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function WithForm() {
  return (
    <Modal>
      <Button variant="secondary">Open Contact Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="company">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

*/

/* Hero UI Select



import {Label, ListBox, Select} from "@heroui/react";

export function MultipleSelect() {
  return (
    <Select className="w-[256px]" placeholder="Select countries" selectionMode="multiple">
      <Label>Countries to Visit</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox selectionMode="multiple">
          <ListBox.Item id="argentina" textValue="Argentina">
            Argentina
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="venezuela" textValue="Venezuela">
            Venezuela
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="japan" textValue="Japan">
            Japan
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="france" textValue="France">
            France
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="italy" textValue="Italy">
            Italy
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="spain" textValue="Spain">
            Spain
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="thailand" textValue="Thailand">
            Thailand
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="new-zealand" textValue="New Zealand">
            New Zealand
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="iceland" textValue="Iceland">
            Iceland
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}











*/