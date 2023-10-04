const {
  getAllTypes,
  createType,
  updateType,
  deleteType,
} = require("../controllers/typesControllers");

const getAllTypesHandlers = async (req, res) => {
  try {
    const allTypes = await getAllTypes();
    res.status(200).json(allTypes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createTypeHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const newType = await createType(name);
    res.status(201).json(newType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatedTypeHandler = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedType = await updateType(id, name);
    res.status(200).json(updatedType);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const deleteTypeHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deteledType = await deleteType(id);
    res.status(200).json(deleteType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllTypesHandlers,
  createTypeHandler,
  updatedTypeHandler,
  deleteTypeHandler,
};
