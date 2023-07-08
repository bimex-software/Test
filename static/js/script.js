
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  
  


sendButton.addEventListener("click",async()=>{
    // alert("Hey you clicked")
    questionInput=document.getElementById("questionInput").value;
    document.getElementById("questionInput").value="";
    document.querySelector(".right2").style.display="block"
    document.querySelector(".right1").style.display="none"

    question1.innerHTML = questionInput;
    question2.innerHTML = questionInput;


    //Get the answer
    let result = await postData("/api",{"question":questionInput})
    solution.innerHTML = result.answer
})

postData("/api",{"question":questionInput})