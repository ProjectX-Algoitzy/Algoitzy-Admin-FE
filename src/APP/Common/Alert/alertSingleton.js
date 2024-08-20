let alertFunction = () => new Promise((_, reject) => reject());

export function setAlertFunction(fn) {
  alertFunction = fn;
}

export function getAlertFunction() {
  return alertFunction;
}