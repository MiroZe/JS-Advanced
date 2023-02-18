function generateReport() {
    let output =  document.getElementById('output');
    let boxes = document.querySelectorAll('thead tr th input');
    let data = document.querySelectorAll('tbody tr')
    let result = [];
    

    for ( let i = 0; i < data.length; i++) {
        let report = {};

        for ( let m = 0; m < boxes.length; m++) {
            if (boxes[m].checked) {
                report[boxes[m].name] = data[i].children[m].textContent;
            }
        }
        result.push(report)

    }
    let outputJSON = JSON.stringify(result);
    output.textContent = outputJSON

}