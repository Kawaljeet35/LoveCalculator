document.getElementById("loveCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const loverName = document.getElementById("loverName").value.trim();
    
    const countOfTrue = (name.match(/[true]/gi) || []).length + (loverName.match(/[true]/gi) || []).length;
    const countOfLove = (name.match(/[love]/gi) || []).length + (loverName.match(/[love]/gi) || []).length;
    
    const total = parseInt(countOfTrue.toString() + countOfLove.toString());
    let message;
  
    if (total < 10 || total > 90) {
      message = `You go together like coke and mentos.`;
    } else if (total >= 40 && total <= 50) {
      message = `You are alright together.`;
    } else {
      message = `Your love score is ${total}.`;
    }
  
    document.getElementById("result").innerText = message;
  });
  