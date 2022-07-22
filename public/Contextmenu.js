document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
})
document.onkeydown = function (e) {
    if (Event.KeyCode === 123)
    {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.KeyCode === "I".charCodeAt(0))
    {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.KeyCode === "C".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.KeyCode ==="J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.KeyCode === "U".charCodeAt(0)) {
      return false;
    }
}