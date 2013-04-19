
onmessage = function(e) {
  var n = 0;

  var id = setInterval(function(){
    if (++n >= 100) return postMessage({ id: e.id, type: 'complete' });
    postMessage({ type: 'progress', progress: n, id: e.id });
  }, 20);
};
