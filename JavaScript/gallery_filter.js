let metNamVar= document.getElementsByClassName("met_nam");
let zidKrevVar= document.getElementsByClassName("zid_krev");
let otiraciVar= document.getElementsByClassName("otiraci");
let kancNamVar= document.getElementsByClassName("kanc_nam");
let i;
let metNamFun =()=>{
  document.getElementById("left_pick").style.color = "#fbefe1";
  document.getElementById("left_pick").style.backgroundColor = "#54310c";
  document.getElementById("mid_pick").style.color = "#54310c";
  document.getElementById("mid_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("right_pick").style.color = "#54310c";
  document.getElementById("right_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick_2").style.color = "#54310c";
  document.getElementById("mid_pick_2").style.backgroundColor = "#fbefe1";
  for(i= 0; i< 35; i++){
    metNamVar[i].style.display= "block";
  }
  for(i= 0; i< 3; i++){
    zidKrevVar[i].style.display= "none";
  }
  otiraciVar[0].style.display= "none";
  for(i= 0; i< 5; i++){
    kancNamVar[i].style.display= "none";
  }
}
let otiraciFun =()=>{
  document.getElementById("left_pick").style.color = "#54310c";
  document.getElementById("left_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick").style.color = "#fbefe1";
  document.getElementById("mid_pick").style.backgroundColor = "#54310c";
  document.getElementById("right_pick").style.color = "#54310c";
  document.getElementById("right_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick_2").style.color = "#54310c";
  document.getElementById("mid_pick_2").style.backgroundColor = "#fbefe1";
  otiraciVar[0].style.display= "block";
  for(i= 0; i< 5; i++){
    kancNamVar[i].style.display= "none";
  }
  for(i= 0; i< 35; i++){
    metNamVar[i].style.display= "none";
  }
  for(i= 0; i< 3; i++){
    zidKrevVar[i].style.display= "none";
  }
}
let zidKrevFun =()=>{
  document.getElementById("left_pick").style.color = "#54310c";
  document.getElementById("left_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick").style.color = "#54310c";
  document.getElementById("mid_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("right_pick").style.color = "#fbefe1";
  document.getElementById("right_pick").style.backgroundColor = "#54310c";
  document.getElementById("mid_pick_2").style.color = "#54310c";
  document.getElementById("mid_pick_2").style.backgroundColor = "#fbefe1";
  for(i= 0; i< 3; i++){
    zidKrevVar[i].style.display= "block";
  }
  for(i= 0; i< 5; i++){
    kancNamVar[i].style.display= "none";
  }
  for(i= 0; i< 35; i++){
    metNamVar[i].style.display= "none";
  }
  otiraciVar[0].style.display= "none";
}
let kancNamFun =()=>{
  document.getElementById("left_pick").style.color = "#54310c";
  document.getElementById("left_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick").style.color = "#54310c";
  document.getElementById("mid_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("right_pick").style.color = "#54310c";
  document.getElementById("right_pick").style.backgroundColor = "#fbefe1";
  document.getElementById("mid_pick_2").style.color = "#fbefe1";
  document.getElementById("mid_pick_2").style.backgroundColor = "#54310c";
  for(i= 0; i< 5; i++){
    kancNamVar[i].style.display= "block";
  }
  for(i= 0; i< 3; i++){
    zidKrevVar[i].style.display= "none";
  }
  for(i= 0; i< 35; i++){
    metNamVar[i].style.display= "none";
  }
  otiraciVar[0].style.display= "none";
}
