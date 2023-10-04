const {
  getAllWaist,
  createWaist,
  updateWaist,
} = require("../controllers/waistControllers");

const getAllWaistHandler = async (req, res) => {
  try {
    const allWaist = getAllWaist();
    res.status(200).json(allWaist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createWaistHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const newWaist = await createWaist(name);
    res.status(201).json(newWaist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWaistHandler = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedWaist = updateWaist(id, name);
    res.status(200).json(updatedWaist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllWaistHandler, createWaistHandler, updateWaistHandler };
