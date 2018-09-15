import React from 'react';
import ReactDom from 'react-dom';
import svg from '../logo.svg';

// class ProductCategoryRow extends React.Component {
//     render() {
//         const category = this.props.category;
//         return (
//             <tr>
//                 <th colSpan="2">
//                     {category}
//                 </th>
//             </tr>
//         );
//     }
// }

// class ProductRow extends React.Component {
//     render() {
//         const product = this.props.product;
//         const name = product.stocked ?
//             product.name : <span style={{color: 'red'}}>{product.name}</span>;
//
//         return (
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         );
//     }
// }

// class ProductTable extends React.Component {
//     render() {
//         const filterText = this.props.filterText;
//         const inStockOnly = this.props.inStockOnly;
//
//         const rows = [];
//         let lastCategory = null;
//
//         this.props.products.forEach((product) => {
//             if (product.name.indexOf(filterText) === -1) {
//                 return;
//             }
//             if (inStockOnly && !product.stocked) {
//                 return;
//             }
//             if (product.category !== lastCategory) {
//                 rows.push(
//                     <ProductCategoryRow
//                         category={product.category}
//                         key={product.category}/>
//                 );
//             }
//             rows.push(
//                 <ProductRow
//                     product={product}
//                     key={product.name}
//                 />
//             );
//             lastCategory = product.category;
//         });
//
//         return (
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                 </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// }

// class SearchBar extends React.Component {
//
//     handleFilterTextChange = (e) => {
//         this.props.onFilterTextChange(e.target.value);
//     };
//     handleInStockChange = (e) => {
//         this.props.onInStockChange(e.target.checked);
//
//     };
//
//     render() {
//         return (
//             <form>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     value={this.props.filterText}
//                     onChange={this.handleFilterTextChange}
//                 />
//                 <p>
//                     <input
//                         type="checkbox"
//                         checked={this.props.inStockOnly}
//                         onChange={this.handleInStockChange}
//                     />
//                     {' '}
//                     Only show products in stock
//                 </p>
//             </form>
//         );
//     }
// }

// class SomeComponent extends React.Component {
//     state = {
//         someVal: 335343
//     };
//
//     render() {
//         <div>{this.props.render(this.state)}</div>
//     }
//
// }

// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <img src='logo.svg' width='30px' height='30px'
//                  style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
//         );
//     }
// }

// class Mouse extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = (event) => {
//             this.setState({
//                 x: event.clientX,
//                 y: event.clientY
//             });
//         };
//
//         this.state = {x: 0, y: 0};
//     }
//
//
//     render() {
//         return (
//             <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
//
//                 {/*
//           Instead of providing a static representation of what <Mouse> renders,
//           use the `render` prop to dynamically determine what to render.
//         */}
//                 {this.props.render(this.state)}
//             </div>
//         );
//     }
// }


// class SomeComponent extends React.Component {
//     render() {
//         return this.props.children
//     }
//
// }

// export default class FilterableProductTable extends React.Component {
//     render() {
//         return (
//             <div>
//                 <SomeComponent>
//                     <p>ertrhrthrthrthrt</p>
//                     <Mouse render={() => (
//                         <div>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur
//                                 distinctio error ex laudantium magni provident quia quisquam tempore.</p>
//                         </div>
//                     )}/>
//                     <p>ertrhrthrthrthrt</p>
//                 </SomeComponent>
//             </div>
//         );
//     }
//
//
// }

// export default class FilterableProductTable extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filterText: '',
//             inStockOnly: false
//         };
//
//         this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//         this.handleInStockChange = this.handleInStockChange.bind(this);
//     }
//
//     handleFilterTextChange(filterText) {
//         this.setState({
//             filterText: filterText
//         });
//     }
//
//     handleInStockChange(inStockOnly, event) {
//         this.setState({
//             inStockOnly: inStockOnly
//         });
//         console.log(event);
//
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <SearchBar
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}
//                     onFilterTextChange={this.handleFilterTextChange}
//                     onInStockChange={this.handleInStockChange}
//                 />
//                 <ProductTable
//                     products={this.props.products}
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}
//                 />
//             </div>
//         );
//     }
// }


// const PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS}/>,
//     document.getElementById('container')
// );
