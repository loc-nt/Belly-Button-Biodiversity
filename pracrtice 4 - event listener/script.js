// listen to any changes in the body tag:
d3.selectAll("body").on("change", updatePage);

// create function updatePage:
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();  //node() is to return the whole tag
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  // a.k.a
  console.log(d3.selectAll("#selectOption").property("value"));
};