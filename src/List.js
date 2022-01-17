import {Component} from "react"
import deleteIcon from "./delete-button.svg"
import cancelIcon  from "./cancel.png"


export default class List extends Component {

   constructor(){

    super()
     this.state={
        userInput: "",
        groceryList: [],
        bucketList: []
     }

   }

 
   onChangeInput(e){
    this.setState({userInput: e})
   }
   
   onClickAdd(input) {

      if (input === "") alert("Oops... empty field. Enter a grocery item")
      else {       let listArray = this.state.groceryList
       listArray.push(input)
      
      this.setState({
         userInput: "",
         groceryList: listArray
      })}
   
     }
   
     onClickDeleteGrocery() {

      this.setState({groceryList: []})
      this.setState({bucketList: []})
     }
     onClickDeleteBucket() {

      this.setState({bucketList: []})
     }
      crossedWord(e) {
      
         let buckList = this.state.bucketList;
         buckList.push(e.target.innerText);
         
        let grocList = this.state.groceryList
         grocList.splice(  grocList.indexOf(e.target.innerText), 1)
         this.setState({
            bucketList: buckList,
            groceryList: grocList
         })
        
      }

      unCrossedWord(e) {
         console.log(e.target.innerText)
        let grocList = this.state.groceryList;
        grocList.push(e.target.innerText);
        
    let buckList = this.state.bucketList
    

     buckList.splice(  buckList.indexOf(e.target.innerText), 1)
     
        this.setState({
           bucketList: buckList,
           groceryList: grocList
        })
     }

     onClickCancelLi(e){
      let grocList = this.state.groceryList
      grocList.splice(  grocList.indexOf(e.target.innerText), 1)
       console.log(grocList)
         this.setState({
            groceryList: grocList
         })

     }
     onClickCancelLi1(e){
      let bascketList = this.state.bucketList
      bascketList.splice(  bascketList.indexOf(e.target.innerText), 1)
      
         this.setState({
          bucketList: bascketList
         })

     }


  onFormSubmit(e) {
      e.preventDefault();

   }

   render() {


    return(
     <div>
       <form onSubmit={(e) => {this.onFormSubmit(e)}}>  
     <div className="contRow" >
     <input 
     type="text" 
     className="textInput"
     placeholder="What do you want to buy"
      onChange={(e) => {this.onChangeInput(e.target.value)}}
      value={this.state.userInput}/>
     <button onClick={() => {this.onClickAdd(this.state.userInput)}} className="btnAdd"> +</button>
     <button onClick={()=> this.onClickDeleteGrocery()} 
     className="btnDelete"><img className="iconImg"
      src={deleteIcon} alt="delete Icon" width="16" height="24"/> </button>
      
     </div>
     </form> 
      <div>
    
         <ul>
            {this.state.groceryList.map((item, index) => ( <div className="liCont">
            <li key ={index} onClick={(e) => {this.crossedWord(e)}}> {item} </li>
            <button className="btn" 
            onClick={(e)=> this.onClickCancelLi(e)}>
               <img src={cancelIcon} alt="delete Icon" width="20" height="20"/></button>
             </div>))}
         </ul>
      </div>

      <div>
      <div>
         <div className="contRow" >
      <p className="par">In a shopping cart</p>  
        <button className="btn par" 
        
        onClick={()=> this.onClickDeleteBucket()}>
           <img className="iconImg" src={deleteIcon} alt="delete Icon" width="20" height="30"/>
           </button>
      </div>
         
         <ul>
       {this.state.bucketList.map (  (item, index) => (
       <div className="liCont">
       <li className="crossed" onClick={(e) => {this.unCrossedWord(e)}} key={index}>{item}</li>
       <button className="btn" onClick={(e)=> this.onClickCancelLi1(e)}><img src={cancelIcon} alt="delete Icon" width="20" height="20"/></button>
       </div>)
       )
       }
         </ul>
         
      </div>
     </div>
      
     </div>
     )}
    

    }