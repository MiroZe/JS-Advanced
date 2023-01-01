function extract(content) {
let contentElement =  document.getElementById('content');
let text = contentElement.textContent;
const pattern = /\((?<name>[^).]+)\)/g
let matches = text.matchAll(pattern);
let result = []
for ( let match of matches) {
    result.push(match.groups.name)
}
return result.join('; ')
}