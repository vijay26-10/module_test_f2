var myArray = fetch('MOCK_DATA.json').then(response => response.json()).then(data => {
    // console.log(data);

    var button = document.getElementById("sortButtonAtoZ");
    button.addEventListener("click", sortTableAtoZ);

    function sortTableAtoZ() {
        console.log(data);

        data = data.sort((a, b) => {
            if (a.first_name < b.first_name) {
                return -1;
            }
        });
        buildTable(data);

    }

    var button = document.getElementById("sortButtonZtoA");
    button.addEventListener("click", sortTableZtoA);

    function sortTableZtoA() {
        data = data.sort((a, b) => {
            if (a.first_name > b.first_name) {
                return -1;
            }
        });
        buildTable(data);

    }

    var button = document.getElementById("sortButtonMarks");
    button.addEventListener("click", sortTableMarks);

    function sortTableMarks() {
        data = data.sort((a, b) => {
            if (a.marks < b.marks) {
                return -1;
            }
        });
        buildTable(data);

    }

    var button = document.getElementById("sortButtonClass");
    button.addEventListener("click", sortTableClass);

    function sortTableClass() {
        data = data.sort((a, b) => {
            if (a.class < b.class) {
                return -1;
            }
        });
        buildTable(data);

    }
    var button = document.getElementById("sortButtonPass");
    button.addEventListener("click", sortTablePass);
    function sortTablePass() {
        var results = data.filter(obj => obj.passing == true);
        buildTable(results);

    }

    var button = document.getElementById("sortButtonGender");
    button.addEventListener("click", sortTableGender);
    function sortTableGender() {
        document.getElementById('table2').style.display = 'block !important';
        var results = data.filter(obj => obj.gender == 'Female');
        buildTable(results);

        var results1 = data.filter(obj => obj.gender == 'Male');
        buildTable2(results1);




    }


    buildTable(data);
    function buildTable(data) {


        var table = document.getElementById('myTable');

        table.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].passing == true) {
                var val = 'passing';
            }
            else {
                val = 'failed';
            }
            var row = `<tr>
                        <td>${data[i].id}  </td>
                        <td><img src="${data[i].img_src}" >  ${data[i].first_name} ${data[i].last_name}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].class}</td>
                        <td>${data[i].marks}</td>
                        <td>${val}</td>
                        <td>${data[i].email}</td>

                  </tr>`
            table.innerHTML += row


        }
    }

    function buildTable2(data) {


        var table = document.getElementById('myTable2');
        table.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].passing == true) {
                var val = 'passing';
            }
            else {
                val = 'failed';
            }
            var row = `<tr>
                        <td>${data[i].id}  </td>
                        <td><img src="${data[i].img_src}" >  ${data[i].first_name} ${data[i].last_name}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].class}</td>
                        <td>${data[i].marks}</td>
                        <td>${val}</td>
                        <td>${data[i].email}</td>

                  </tr>`
            table.innerHTML += row


        }
    }

})
const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        let td1 = tr[i].getElementsByTagName('td')[6];
        if (td) {
            let txtvalue = td.textContent || td.innerHTML;
            console.log(txtvalue);
            if (txtvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
                if (td1) {
                    let txtvalue1 = td1.textContent || td1.innerHTML;
                    if (txtvalue1.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }

}





