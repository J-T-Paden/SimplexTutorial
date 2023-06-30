 console.log("Hello");
 
 const airlockList = document.getElementById("airlockList");

  airlockList.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.color = "orange";

      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false
  );

  const sevenNineSevenList = document.getElementById("sevenNineSevenList");

  sevenNineSevenList.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.color = "orange";

      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false
  );