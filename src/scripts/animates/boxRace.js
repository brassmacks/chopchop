// require veggies


export function boxrace() {
// take in a rate of propagation and approach 
// track state of targets on playing field
  // score of user/ flow of gameplay

// 

// needs to track square around obj
// needs to track state : chopped / running
// 
// needs to track its identity: visual and mechanical reference points


  let spot = (Math.random(1,9)) / window.height;
  let start = 0;
  let end = Window.width; 
  
  fill(Math.random(255));
  rect(start, spot /(window.height - 900));
  
  start += 1;

  spot += (spot + Math.random(-15,15)); 

  if (start > end) {
    start = 0;
  }

}