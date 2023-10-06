let btnDsn = document.querySelector("#btn-design"); 
localStorage.setItem('Name','CLICKED'); 
let name = localStorage.getItem('Name'); 
  
(function (){ 
    btnDsn.onclick = function() { 
        btnDsn.textContent = name; 
    }; 
})();