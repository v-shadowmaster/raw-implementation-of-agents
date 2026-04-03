console.log("Converted to JavaScript");

const add = new Function("string1", "string2", `console.log(string1 + " " + string2)`)

add("Vinay", "Kumar");

