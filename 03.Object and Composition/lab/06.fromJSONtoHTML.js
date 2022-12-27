function  JSONtoHTML(input) {

    let arr = JSON.parse(input);
    
    let output = ['<table>'];
    output.push(makeKeyRow(arr))
    arr.forEach(object => {
        output.push(makeValueRow(object))
    });
    output.push(['</table>']);
    console.log(output.join('\n'));

    function makeKeyRow(arr) {
        let result = '   <tr>';
        Object.keys(arr[0]).forEach(key => {result += `<th>${escapeHtml(key)}</th>`;});
        result += '</tr>';
        return result;
    }
    function makeValueRow(obj) {
        let result =  '   <tr>';
        Object.values(obj).forEach(value => {result += `<td>${escapeHtml(value)}</td>`;});
        result += '</tr>';
        return result;
    }
    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }


}
JSONtoHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`

)