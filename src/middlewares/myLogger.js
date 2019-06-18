const myLogger = () => next => action => {
  console.info(`Тип события: ${action.type}`);

  return next(action);
};

export default myLogger;
