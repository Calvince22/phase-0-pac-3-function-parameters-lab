function introduction(name){
    return `Hi, my name is ${name}.`

}
function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

}
function introductionWithLanguageOptional(name,language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
//function introductionWithLanguage(name,language = "JavaScript"){
//
//}
//console.log(introductionWithLanguageOptional("john"))
//console.log(introductionWithLanguage("john","CSS"))
//console.log(introduction("john"))