module.exports = function check(str, bracketsConfig) {
  // let strNew = "";

  // for (let i = 0; i <= str.length; i++) {
  //   if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
  //     strNew += str[i];
  //   } else if (str[i] === "|") {
  //     !strNew.includes("|")
  //       ? (strNew += str[i])
  //       : (strNew = strNew.slice(0, -1));
  //   } else if (str[i] === ")") {
  //     if (strNew[strNew.length - 1] === "(") {
  //       strNew = strNew.slice(0, -1);
  //     } else {
  //       return false;
  //     }
  //   } else if (str[i] === "}") {
  //     if (strNew[strNew.length - 1] === "{") {
  //       strNew = strNew.slice(0, -1);
  //     } else {
  //       return false;
  //     }
  //   } else if (str[i] === "]") {
  //     if (strNew[strNew.length - 1] === "[") {
  //       strNew = strNew.slice(0, -1);
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // return strNew === "";

  let strNew = "";

  for (let i = 0; i <= str.length; i++) {
    bracketsConfig.map((item) => {
      if (str[i] === item[0] && item[0] !== item[1]) {
        strNew += str[i];
      } else if (str[i] === item[0] && item[0] === item[1]) {
        !strNew.includes(item[0])
          ? (strNew += str[i])
          : (strNew = strNew.slice(0, -1));
      } else if (str[i] === item[1]) {
        if (strNew[strNew.length - 1] === item[0]) {
          strNew = strNew.slice(0, -1);
        } else {
          strNew += str[i];
        }
      }
    });
  }

  return strNew === "";
};
