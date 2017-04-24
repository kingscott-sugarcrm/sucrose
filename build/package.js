export var name = "sucrose";
export var version = "0.5.3";
export var description = "Interactive Charts for Business Applications";
export var keywords = ["charts","d3","visualization","svg","mobile","canvas"];
export var homepage = "http://sucrose.io/";
export var license = "Apache-2.0";
export var author = {"name":"Henry Rogers","url":"https://github.com/hhrogersii"};
export var contributors = [{"name":"Travis Hubbard","url":"https://github.com/tshubbard"}];
export var main = "sucrose.node.js";
export var browser = "build/sucrose.js";
export var module = "index";
export var repository = {"type":"git","url":"https://github.com/sugarcrm/sucrose.git"};
export var scripts = {"package":"json2module package.json > build/package.js","test":"tape 'test/**/*-test.js'"};
export var dependencies = {"d3":"^4.2.1","d3fc-rebind":"^4.0.1","topojson":"^1.6.26"};
export var devDependencies = {"clean-css":"^3.4.8","jshint":"^2.9.4","json2module":"0.0.3","less":"^2.6.0","less-plugin-clean-css":"^1.5.1","rollup":"^0.36.3","rollup-plugin-eslint":"^3.0.0","rollup-plugin-node-resolve":"^2.0.0","rollup-plugin-replace":"^1.1.1","tape":"^4.6.2","uglify-js":"2.6.1"};
