function replaceAll(str, model) {
    for (var key in model) {
        var rKey = "{{" + key + "}}";
        str = str.replace(new RegExp(rKey, 'g'), model[key]); 
    }

    return str;
}
