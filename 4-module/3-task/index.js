function highlight(table) {
  for (let i=1;i<table.rows.length;i++){
    let trE = table.rows[i]
    if (trE.cells[3].hasAttribute('data-available')){
      if (trE.cells[3].getAttribute('data-available')=='true'){
        trE.classList.add('available')
      } else {
        trE.classList.add('unavailable')
      }
      console.log()
    } else {
      trE.setAttribute("hidden", "hidden");
    }
    if (trE.cells[2].innerText == 'm'){
      
        trE.classList.add('male')
    } else if (trE.cells[2].innerText == 'f'){
        trE.classList.add('female')               
    }
     if (trE.cells[1].innerText < 18){  
       trE.style.textDecoration = 'line-through';
     }
    
  }
}