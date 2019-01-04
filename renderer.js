var fs = require("fs");

function mergeValues(values, content) {
  
}

function view(templateName, values, response) {
  // Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + ".html");

  // Insert values into the content
  fileContents = mergeValues(values, fileContents);

  // Write out content to the response
  response.write(fileContents);

}

module.exports.view = view;
