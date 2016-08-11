var exectuable = true;
function Alert(_alert) {
  if(exectuable == true){
  alert(_alert);
  exectuable = false;
  }
}

function Prompt(_prompt, _placeholder) {
  if(exectuable == true){
  var answer = prompt(_prompt, _placeholder);
  exectuable = false;
  return answer;
  }
}

function Confirm(_confirm) {
  if(exectuable == true){
  var conf = confirm(_confirm);
  exectuable = false;
  return conf;
  }
}
setTimeout(function() {
  exectuable = true;
}, 3000)
