class ErrorHandler {
  static handle(error, _req, res, next) {
    // switch (error.message) {
    //   case '"email" must be a valid email':
    //     res.status(404).json({ message: error.message });
    //     break;
    //   case 'Invalid mongo id':
    //     res.status(422).json({ message: error.message });
    //     break;
    //   case 'Motorcycle not found':
    //     res.status(404).json({ message: error.message });
    //     break;
    //   default:
    //     res.status(500).json({ message: error.message });
    // }
    res.status(404).json({ message: error.message });
    next();
  }
}

module.exports = ErrorHandler;