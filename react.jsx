function Dresses(props){
  return(
  <div className="Dresses">
      <h1>Name:{props.name}</h1>
      <h3>price:{props.price}</h3>
      </div>
    );
}
var app=(
<div>
  <Dresses name="shirts" price="200"/>
  <Dresses name="sarees" price="500"/>    
  </div>
    )
};
ReactDom.render(<Dresses name="shirts"
price="200"/> ,
  document.querySelector('#p1'));
ReactDom.render(<Dresses name="shirts"
price="200"/>,
  document.querySelector('#p2'));
