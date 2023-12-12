const router = require("express").Router();

const List = require("../models/list");

//create
//http://localhost:4000/api/v2/addtask
router.post("/addtask", async (req, res) => {
  try {
    const { title } = req.body;
    const list = new List({ title });
    await list.save().then(() => {
      res.status(200).json({ list });
      list.save();
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.log(error.message);
  }
});
// update
// http://localhost:4000/api/v2/update/:id
router.put("/update/:id", async (req, res) => {
  try {
    const { title } = req.body;
    const list = await List.findByIdAndUpdate(req.params.id, { title });

    if (!list) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "update" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// delete
// http://localhost:4000/api/v2/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTask = await List.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//get task
//http://localhost:4000/api/v2/gettask
router.get("/gettask", async (req, res) => {
  try {
    const tasks = await List.find(); // Retrieve all tasks
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
});

module.exports = router;
