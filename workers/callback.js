
onmessage = function(e) {
  setTimeout(function(){
    postMessage({ id: e.data.id, value: e.data.value.toUpperCase() });
  }, 500);
};
