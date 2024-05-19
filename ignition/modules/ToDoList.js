const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TaskToDo", (m) => {
  // Deploy the contract
  const Task = m.contract("TaskToDo", [], {});

  // Retrieve the address of the deployed contract
  const taskAddress =  Task.id;

  // Return both the contract instance and its address
  return { Task, address: taskAddress };
});