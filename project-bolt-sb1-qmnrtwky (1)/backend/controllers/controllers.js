const getExamples = (req, res) => {
  res.status(200).json({ message: "Get all examples" });
};

const createExample = (req, res) => {
  const data = req.body;
  res.status(201).json({ message: "Example created", data });
};

module.exports = { getExamples, createExample };
