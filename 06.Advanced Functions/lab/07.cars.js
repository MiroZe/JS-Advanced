function cars(input) {

    let actions = {
        create: (name, word, parentName) => {
            if (parentName === undefined) {
                result[name] = {}
            } else {
                if (word = 'inherits') {
                    let parentObj = Object.create(result[parentName]);
                     result[name] = parentObj;
                }
            }

        },
        set: (name, property, value) => {
            result[name][property] = value
        },
        print: (name) => {
            let printOutArray = [];
            for (let key in result[name]) {
                printOutArray.push(`${key}:${result[name][key]}`)

            }

            console.log(printOutArray.join(','));
        }
    }

    let result = {};
    for (let line of input) {
        let [command, name, word, parentName] = line.split(' ');
        actions[command](name, word, parentName)

    }

}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);
