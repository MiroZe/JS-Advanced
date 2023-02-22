function requestValidator(obj) {
  let patttern = /^[\w.]+$/g;
  let method = ["GET", "POST", "DELETE", "CONNECT"];
  let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let patern2 = /^[^<>\\&\'\"]+$/g;

  if (!(obj.hasOwnProperty("method") && method.includes(obj.method))) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (
    !(obj.hasOwnProperty("uri") && (obj.uri === "*" || patttern.test(obj.uri)))
  ) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!(obj.hasOwnProperty("version") && version.includes(obj.version))) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (
    !(
      obj.hasOwnProperty("message") &&
      (obj.message === "" || patern2.test(obj.message))
    )
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return obj;
}
console.log(
  requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  )
);
