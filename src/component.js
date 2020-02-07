export default (text = "Hellow World") => {
  const $element = document.createElement("div");

  $element.innerHTML = text;

  return $element;
}