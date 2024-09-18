// Import file system module
import { promises as fs } from 'fs';

// Define file path for the tasks JSON file
const filePath = './tasks.json';

// Function to read tasks from the JSON file
async function readTasks() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file does not exist, return an empty array
    return [];
  }
}

// Function to write tasks to the JSON file
async function writeTasks(tasks) {
  try {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

// Function to add a new task
async function addTask(description) {
  const tasks = await readTasks();
  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: 'todo'
  };
  tasks.push(newTask);
  await writeTasks(tasks);
  console.log("Task added successfully!");
}

// Function to update an existing task by ID
async function updateTask(id, newDescription) {
  const tasks = await readTasks();
  const task = tasks.find(t => t.id == id);
  if (task) {
    task.description = newDescription;
    await writeTasks(tasks);
    console.log("Task updated successfully!");
  } else {
    console.error("Task not found.");
  }
}

// Function to delete a task by ID
async function deleteTask(id) {
  let tasks = await readTasks();
  tasks = tasks.filter(t => t.id != id);
  await writeTasks(tasks);
  console.log("Task deleted successfully!");
}

// Function to mark a task with a specific status
async function markTask(id, status) {
  const tasks = await readTasks();
  const task = tasks.find(t => t.id == id);
  if (task && ['todo', 'in-progress', 'done'].includes(status)) {
    task.status = status;
    await writeTasks(tasks);
    console.log(`Task marked as ${status}`);
  } else {
    console.error("Task not found or invalid status.");
  }
}

// Function to list all tasks or tasks filtered by status
async function listTasks(status) {
  const tasks = await readTasks();
  const filteredTasks = status ? tasks.filter(t => t.status === status) : tasks;
  console.log(filteredTasks);
}

// Main CLI logic to handle user input from command line
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'add':
    await addTask(args[1]);
    break;
  case 'update':
    await updateTask(args[1], args[2]);
    break;
  case 'delete':
    await deleteTask(args[1]);
    break;
  case 'mark':
    await markTask(args[1], args[2]);
    break;
  case 'list':
    await listTasks(args[1]);
    break;
  default:
    console.log('Unknown command. Try add, update, delete, mark, or list.');
}

    // node taskTracker.mjs add "New Task"
    // node taskTracker.mjs update 1 "Updated Task Description"
    // node taskTracker.mjs delete 1
    // node taskTracker.mjs list
    // node taskTracker.mjs list done
    // node taskTracker.mjs mark 1 in-progress