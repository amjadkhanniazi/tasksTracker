# Task Tracker CLI Application

This is a simple command-line interface (CLI) application for managing tasks. It allows you to add, update, delete, list, and mark tasks with different statuses. The tasks are stored in a JSON file (`tasks.json`).

## Features

- **Add tasks** with a description.
- **Update tasks** by their ID.
- **Delete tasks** by their ID.
- **Mark tasks** with different statuses (`todo`, `in-progress`, `done`).
- **List tasks**, either all tasks or filtered by status.

## Requirements

- Node.js (v14+)
- The Node.js `fs` module (already built-in with Node.js)

## Installation

1. Clone this repository or download the script to your local machine.
2. Make sure Node.js is installed on your system.
3. No additional dependencies are needed.

## Usage

Run the CLI application using the following syntax in your terminal:

```
node taskTracker.mjs <command> [arguments]
```

### Commands

#### Add a Task
Add a new task with a description.

```bash
node taskTracker.mjs add "Task description"
```

#### Update a Task
Update the description of an existing task by its ID.

```bash
node taskTracker.mjs update <id> "New task description"
```

Example:
```bash
node taskTracker.mjs update 1 "Updated task description"
```

#### Delete a Task
Delete a task by its ID.

```bash
node taskTracker.mjs delete <id>
```

Example:
```bash
node taskTracker.mjs delete 1
```

#### Mark a Task with a Status
Mark a task with one of the following statuses: `todo`, `in-progress`, `done`.

```bash
node taskTracker.mjs mark <id> <status>
```

Example:
```bash
node taskTracker.mjs mark 1 done
```

#### List All Tasks
List all tasks, or filter tasks by status.

```bash
node taskTracker.mjs list [status]
```

If no status is provided, all tasks will be listed. You can also filter by `todo`, `in-progress`, or `done`.

Example:
```bash
node taskTracker.mjs list
node taskTracker.mjs list done
```

## File Structure

- **`tasks.json`**: A JSON file where all the tasks are stored. The file will be created automatically if it does not exist.
- **`taskTracker.mjs`**: The main script file containing the logic for managing tasks.

## Example Workflow

1. Add a task:
    ```bash
    node taskTracker.mjs add "Write the project documentation"
    ```

2. List all tasks:
    ```bash
    node taskTracker.mjs list
    ```

3. Mark the task as `in-progress`:
    ```bash
    node taskTracker.mjs mark 1 in-progress
    ```

4. Update the task description:
    ```bash
    node taskTracker.mjs update 1 "Finish writing the documentation"
    ```

5. List tasks filtered by `in-progress`:
    ```bash
    node taskTracker.mjs list in-progress
    ```

6. Delete a task:
    ```bash
    node taskTracker.mjs delete 1
    ```

## Error Handling

- If a task ID is not found, an error message will be displayed.
- If you try to mark a task with an invalid status, an error message will appear.
- If there are no tasks available, the `list` command will return an empty array.

## Contributing

Feel free to fork this project, submit issues, or contribute to its development.
