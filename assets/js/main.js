document.documentElement.addEventListener(
  "touchstart",
  function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  false
);

function attachEvent(element, evtId, handler) {
  if (element.addEventListener) {
    element.addEventListener(evtId, handler, false);
  } else if (element.attachEvent) {
    var ieEvtId = "on" + evtId;
    element.attachEvent(ieEvtId, handler);
  } else {
    var legEvtId = "on" + evtId;
    element[legEvtId] = handler;
  }
}
function getSender(evt, local) {
  if (!evt) {
    evt = window.event;
  }
  var sender;
  if (evt.srcElement) {
    sender = evt.srcElement;
  } else {
    sender = local;
  }
  return sender;
}
function onBeforeZoom(evt) {
  var zoom = 320 / window.innerWidth;
  var element = getSender(evt);
  element.style.fontSize = Math.ceil(16 / zoom) + "px";
}
function onAfterZoom(evt) {
  var element = getSender(evt);
  element.style.fontSize = "";
}
function disableZoom() {
  // Search all relevant input elements and attach zoom-events
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    attachEvent(inputs[i], "focus", onBeforeZoom);
    attachEvent(inputs[i], "blur", onAfterZoom);
  }
}
if (navigator.userAgent.match(/iPhone/i)) {
  attachEvent(window, "load", disableZoom);
}
