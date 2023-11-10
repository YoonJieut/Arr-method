function findLastDuplicateNameIndex(namesArray) {
  // 이름만 추출하여 새 배열을 만듭니다.
  const firstNames = namesArray.map(fullName => fullName.split(" ")[1]);
  let lastIndex = -1;
  let lastFirstName = "";

  // 각 이름을 순회하면서 마지막으로 나타나는 동명이인의 인덱스를 찾습니다.
  firstNames.forEach((name, index) => {
    if (firstNames.indexOf(name) !== index && firstNames.lastIndexOf(name) === index) {
      lastFirstName = name;
      lastIndex = index;
    }
  });

  // 실제 배열에서의 마지막 동명이인의 위치를 찾기 위해 성+이름 형태로 다시 확인합니다.
  if (lastFirstName) {
    lastIndex = namesArray.lastIndexOf(lastFirstName + " " + lastFirstName);
  }

  return lastIndex;
}

// 예시 사용:
const studentsArray = ["김철수", "이영희", "박철수", "최영희", "김철수"];
const resultIndex = findLastDuplicateNameIndex(studentsArray);
console.log(resultIndex); // 이름 "철수"를 가진 마지막 학생의 위치를 출력합니다.
