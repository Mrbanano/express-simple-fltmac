const sendMessage = async (req, res) => {
  res.status(200).json({
    success: true,
    count: 1,
    data: {
      message: 'Proximanente',
    },
  });
};

module.exports = {
  sendMessage,
};
