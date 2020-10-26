module.exports = function check(str, bracketsConfig) {

    let tempStr = str

    let bCompare = {}
    bracketsConfig.map(el=>bCompare[el[1]]=el[0])
    let openCount = {}
    bracketsConfig.map(el=>openCount[el[0]]=0)
    let closeCount = {}
    bracketsConfig.map(el=>closeCount[el[1]]=0)
    let isCorrect = true

    for (let i = 0; i < str.length/2; i++) {
        for (let x = 0; x < bracketsConfig.length; x++) {
            let s = (`${bracketsConfig[x][0]}${bracketsConfig[x][1]}`)
            tempStr = tempStr.replace(s, "")
        }
    }

    return tempStr.trim()===""
}
