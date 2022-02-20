// ReactDOM.render(
//   <h1>THIS HEADING IS THROUGN REACT</h1>,
//   document.getElementById("heading")
// );
function btnClr() {
  BtnClr.style.background = "bisque";
  DeleteBtn.style.background = "none";
  ReactDOM.render(
    <h1> this heading is through react-DOM manuplation</h1>,
    document.getElementById("heading")
  );
}
function deleteBtn() {
  DeleteBtn.style.background = "bisque";
  BtnClr.style.background = "none";
  ReactDOM.render(<h1></h1>, document.getElementById("heading"));
}
