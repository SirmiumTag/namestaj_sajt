let metNamVar= document.getElementsByClassName("met_nam");
let zidKrevVar= document.getElementsByClassName("zid_krev");
let otiraciVar= document.getElementsByClassName("otiraci");
let i;
let metNamFun =()=>{
  for(i= 0; i< 3; i++){
    metNamVar[i].style.display= "block";
    zidKrevVar[i].style.display= "none";
    otiraciVar[i].style.display= "none";
  }
  document.getElementById("left_pick").style.color = "#fbefe1";
  document.getElementById("left_pick").style.backgroundColor = "#54310c";
  document.getElementById("mid_pick").style.color = "#54310c";
  document.getElementById("mid_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("right_pick").style.color = "#54310c";
  document.getElementById("right_pick").style.backgroundColor = "#fbefe1";
}
let otiraciFun =()=>{
  for(i= 0; i< 3; i++){
    metNamVar[i].style.display= "none";
    zidKrevVar[i].style.display= "none";
    otiraciVar[i].style.display= "block";
  }
  document.getElementById("left_pick").style.color = "#54310c";
  document.getElementById("left_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick").style.color = "#fbefe1";
  document.getElementById("mid_pick").style.backgroundColor = "#54310c";
  document.getElementById("right_pick").style.color = "#54310c";
  document.getElementById("right_pick").style.backgroundColor = "#fbefe1";
}
let zidKrevFun =()=>{
  for(i= 0; i< 3; i++){
    metNamVar[i].style.display= "none";
    zidKrevVar[i].style.display= "block";
    otiraciVar[i].style.display= "none";
  }
  document.getElementById("left_pick").style.color = "#54310c";
  document.getElementById("left_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick").style.color = "#54310c";
  document.getElementById("mid_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("right_pick").style.color = "#fbefe1";
  document.getElementById("right_pick").style.backgroundColor = "#54310c";
}
