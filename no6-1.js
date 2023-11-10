const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기"
];

let nameArray = []
studentList.forEach((element)=>{
  nameArray.push(element.slice(1))
})



// 같은 index만 빼고 배열을 만든다.
function createArrayWithoutIndex(originalArray,indexToRemove){
  let a = [];
  for(let i=0; i< originalArray.length; i++){
    
    if(i !==indexToRemove ){
      a.push(originalArray[i])
    }
  }
  return a
}
// const newArray = createArrayWithoutIndex(nameArray, 0)
// console.log(newArray)
  let sameNameArray=[]
  for(i=0; i<nameArray.length; i++){
    if(createArrayWithoutIndex(nameArray,i).includes(nameArray[i])===true){
      sameNameArray.push(i);
    }
  }
  console.log(sameNameArray[sameNameArray.length-1] +1);