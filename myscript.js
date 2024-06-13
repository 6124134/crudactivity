var UniqueIDV, FirstNameV, MiddlenameV, SurnameV, addressV, emailV;

function readFom() {
  UniqueIDV = document.getElementById("ID").value;
  FirstNameV = document.getElementById("firstname").value;
  MiddlenameV = document.getElementById("middlename").value;
  SurnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  console.log(UniqueIDV, FirstNameV, MiddlenameV, SurnameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .set({
      UniqueID: UniqueIDV,
      FirstNameV: FirstNameV,
      MiddlenameV: MiddlenameV,
      SurnameV: SurnameV,
      addressV: addressV,
      emailV: emailV,
    });
  alert("Data Inserted");
  document.getElementById("Unique ID").value = "";
  document.getElementById("First name").value = "";
  document.getElementById("Middle name").value = "";
  document.getElementById("Surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .on("value", function (snap) {
      document.getElementById("Unique ID").value = snap.val().UniqueIDV;
      document.getElementById("First Name").value = snap.val().FirstNameV;
      document.getElementById("Middle Name").value = snap.val().MiddlenameV;
      document.getElementById("SurName").value = snap.val().SurnameV;
      document.getElementById("address").value = snap.val().addressV;
      document.getElementById("email").value = snap.val().emailV;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .update({
      //   uniqueID: UniqueIDV,
      Firstname: FirstNameV,
      Middlename: MiddlenameV,
      Surname: SurnameV,
      address: addressV,
      email: emailV,
    });
  alert("Data Update");
  document.getElementById("uniqueID").value = "";
  document.getElementById("First Name").value = "";
  document.getElementById("Middle Name").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UniqueIDV)
    .remove();
  alert("Data Deleted");
  document.getElementById("uniqueID").value = "";
  document.getElementById("First name").value = "";
  document.getElementById("Middle Name").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
