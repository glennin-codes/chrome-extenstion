
     
     let myleads=[]//assigning  an empty .. using myleads variable.
     
      const  inputbtn=document.getElementById("input-btn")//innitialising variable btn to capture the input button.
      const inputEl=document.getElementById("input-el")//innitialising variable inputEl to grasp the next input
      const ulEl=document.getElementById("ul-el")     //grabing the ul and storing it in variable ulEl
      const leadsfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))//converts the string my leads in the local storage to an array
        const deletebtn=document.getElementById("delete-btn")//initialise deletebtn variable to capture the delete function for the leads 
        const tabbtn=document.getElementById("tab-btn") 

        
           tabbtn.addEventListener("click", function(){
             //getting the current chrome tab
            chrome.tabs.query({ active:true , currentWindow: true },function (tabs){
              myleads.push(tabs[0].url)
              localStorage.setItem("myleads", JSON.stringify(myleads))
               render(myleads)      
               
            })
               
           })
 
             //passing out an event listener
             inputbtn.addEventListener("click" ,function (){

              myleads.push(inputEl.value)//get a value from the input.*document.getElmentById("blablabla..").value*
    
              inputEl.value=""//this clears out the input fields
     
    //storing our array inputs in the local storage in form of a string
           
           localStorage.setItem("myleads",JSON.stringify(myleads))
                  
        render(myleads)//call the function upon clicking the button to log out the list items inputed.
      
 })
            deletebtn.addEventListener("dblclick", function(){

              localStorage.clear()//clears out the localstorage
              myleads=[]//clears out the array list
              render(myleads)

            })
                  //check if leadfromloacalstorage is truth
            //if so call function render list() to print out fully the leads from the storage
                          if (leadsfromlocalstorage)
                          {
                            myleads=leadsfromlocalstorage
                            render(myleads)
                          }  

      // initialise function renderlist() to
                  function render(leads){
                    //a for lop to to render out  the values from the array
                    let listItems="" //initialise the varriable to grab the list items from the array
                    for (let i=0; i<leads.length; i++){
                     
                     //introdusing templetes strings 
                              listItems+=`
                              <li>
                              <a target="_blank" href=" ${leads[i]}">
                              ${leads[i]}
                              </a>
                              </>
                              
                              `                  
      
                    }

                    ulEl.innerHTML=listItems // loging out an html code  using inner.html function. 
                  }
            
      //practise conner
      
const prac=document.getElementById("practise")
const reharse=document.getElementById("reharse")
const del=document.getElementById("del")
const coursesTaken=document.getElementById("courses")
    
      
      let mycourses=[]
            

      function courses(arr){
        let list=""
        
      for (let i=0 ;i<arr.length;i++){
        list+=`
           <ul>
           <li>
              ${arr[i]}
           </li>

           </ul>


        `
      }
      prac.innerHTML=list
      }
      




          

