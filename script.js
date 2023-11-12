function addTask() { //funksiya- html'de "elave et"duymesini basdiqda cagiri
    let taskInput = document.getElementById("taskInput"); // istifadecinin daxil etdiyi metni elde et
    let taskList = document.getElementById("taskList");  // listi gosteren ul elementini elde et
    if (taskInput.value.trim() !== "") {  //daxil edilen metnin bosluqlarinin temiz olub-olmadigini yoxla
        let newTask = document.createElement("li"); //yeni tapsiriq ucun li elementi yarat
        newTask.className = "list-group-item";   // bootstrap tetbiq et
        newTask.appendChild(document.createTextNode(taskInput.value));   // yeni tapsiriq ucun  metn elave et
        let deleteButton = document.createElement("button"); // sil duymesi yarat
        deleteButton.className = "btn btn-danger btn-sm float-right";
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.onclick = function () { // sil duymesine klik edende tapsirigi silmek ucun funksiya teyin et
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton); // sil duymesini tapsiriga elave et
        taskList.appendChild(newTask); // yeni tapsiriq elave et
        taskInput.value = ""; // input xanasini temizle
    }
}