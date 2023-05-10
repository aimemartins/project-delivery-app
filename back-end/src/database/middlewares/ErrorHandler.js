class ErrorHandler {
  static handle(error, _req, res, next) {
    switch (error.message) {
      case 'User already exists':
        return res.status(409).json({ message: error.message });
    //   case 'Invalid mongo id':
    //     res.status(422).json({ message: error.message });
    //     break;
    //   case 'Motorcycle not found':
    //     res.status(404).json({ message: error.message });
    //     break;
      default:
        res.status(404).json({ message: error.message });
        next();
        break;
      }
  }
}

module.exports = ErrorHandler;