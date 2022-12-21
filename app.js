// ReactDOM.render(<h1>Hello my first React!!</h1>, document.getElementById("root"))

/**************************/
// ReactDOM.render(
// <div>
//    <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//    </ul>
// </div>
// , document.getElementById("root"))

/**************************/

// function Navigation() {  ///функциональный компонент
//    return (
//       <nav>
//          <div className="link">Home</div>
//          <div className="link">Products</div>
//          <div className="link">Biography</div>
//          <div className="link">Contacts</div>
//       </nav>
//    )
// }
// ReactDOM.render(<Navigation />, document.getElementById("root"))

/**************************/
const link1Name = 'Home'
const link2Name = "Products"
const link3Name = "Biography"
const link4Name = "Contacts"

function Navigation() {  ///функциональный компонент
   return (
      <nav className="navigation">
         <div className="link">link1Name</div>
         <div className="link">link2Name</div>
         <div className="link">link3Name</div>
         <div className="link">link4Name</div>
      </nav>
   )
}
ReactDOM.render(<Navigation />, document.getElementById("root"))