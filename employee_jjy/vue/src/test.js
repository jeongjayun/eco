function getTest(param, success, fail) {
  api.get("").then(success).catch(fail);
}
export { getTest };
