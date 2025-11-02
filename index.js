


module.exports = function(css) {
    this.cacheable && this.cacheable();

    return "module.exports = (function(d) {\n\
        var head = d.head || d.getElementsByTagName('head')[0];\n\
        if (head) {\n\
            var style = d.createElement('style');\n\
            style.type = 'text/css';\n\
            style.textContent = " + JSON.stringify(css) + ";\n\
            head.appendChild(style);\n\
            return style;\n\
        }\n\
        return null;\n\
    })(document);\n";
};

