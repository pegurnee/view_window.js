function setViewWindow(viewSelector) {
  var holder = document.getElementById(viewSelector);
  var views = document.getElementsByClassName(viewSelector);
  var selector = document.createElement('div');

  selector.id = viewSelector + '-selector';
  holder.insertBefore(selector, holder.firstChild);

  for (var i = 0; i < views.length; i++) {
    var view = views[i];
    var newSelector = document.createElement('div');
    newSelector.id = view.id + '-selector';
    newSelector.innerHTML = view.id.charAt(0).toUpperCase() + view.id.substring(1);
    newSelector.style.display = 'inline-block';

    selector.appendChild(newSelector);
  }
}
