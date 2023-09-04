
let task=[];
let taskid=[];


/*function to add_maintask*/
function add_task()
{
    

  document.getElementById('iderror').style.display="none";
  document.getElementById('nameerror').style.display="none";
  document.getElementById('startdateerror').style.display="none";
  document.getElementById('enddateerror').style.display="none";
  document.getElementById('statuserror').style.display="none";

    var taskid = document.getElementById('taskid').value;
    var taskname = document.getElementById('taskname').value;
    var taskstartdate = document.getElementById('taskstartdate').value;
    var taskenddate = document.getElementById('taskenddate').value;
    var taskstatus = document.getElementById('taskstatus').value;
   
    let valid= validatetask(taskid,taskname,taskstartdate,taskenddate,taskstatus);
    console.log(valid);

    if(valid)
    {
      adding_task(taskid,taskname,taskstartdate,taskenddate,taskstatus);

    }  
    
  
}



/*adding task to task array */
function adding_task(id1,name1,startdate1,enddate1,status1)
{

    let newtask = {
        taskid:id1,
        taskname:name1,
        taskstartdate:startdate1,
        taskenddate:enddate1,
        taskstatus:status1,
        subtask:[]

    };

    task.push(newtask);
    taskid.push(id1);
    showonpage(task);

document.getElementById('taskid').value=null;
document.getElementById('taskname').value=null;
document.getElementById('taskstartdate').value=null;
document.getElementById('taskenddate').value=null;
document.getElementById('taskstatus').value=null;
    
}


/*to display in table*/
function showonpage(Task) 
{


  var parentTaskRows = '';
  
  task.forEach((task, parentIndex) => {
    console.log(task.taskid);
    parentTaskRows += `<tr>
                            <th>ParentTask id</th>
                            <th>parentTask Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Action</th>
                            
                          </tr>`;

    parentTaskRows += `<tr class="parentRow" >
                            <td  class="parentRowdata">${task.taskid}</td>
                            <td  class="parentRowdata">${task.taskname}</td>
                            <td  class="parentRowdata">${task.taskstartdate}</td>
                            <td  class="parentRowdata">${task.taskenddate}</td>
                            <td class="parentRowdata">${task.taskstatus}</td>
                            <td class="parentTaskAction"> <button id="edit-button" id="edit" class="edit-button" onclick="edit_parentrecord(${task.taskid})" >Edit</button>
                            <button id="delete-button" id ="delete" class ="delete-button" onclick="deleteParent(${parentIndex})"> delete </button>
                            <button id="subtask-button" id ="delete" class ="subtask-button" onclick="add_subtask()"> subtask </button>
                            <button id="subtask-button" id ="delete" class ="subtask-button" onclick="call_subtask(${task.taskid},${task.taskstartdate},${task.taskenddate})"> add</button>
                            </td>
                       
                          </tr>`;

    if (task.subtask.length > 0) {
      parentTaskRows += `<tr>
                            <td>Subtask id</td style="color:green">
                            <td>Subtask Name</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Status</td>
                            <td>Action</td>
                            
                          </tr>`;

    }
    task.subtask.forEach((subtask, subTaskIndex) => {
     
        
          parentTaskRows += `<tr>
          <td >${subtask.subtaskid}</td>
          <td>${subtask.subtaskname}</td>
          <td>${subtask.subtaskstartdate}</td>
          <td >${subtask.subtaskenddate}</td>
          <td >${subtask.subtaskstatus}</td>
          <td> <button id="edit-button" id="edit" class="edit-button" onclick="edit_record(${parentIndex},${subTaskIndex})"" >Edit</button>
          <button id="delete-button" id ="delete" class ="delete-button" onclick="delete_record(${parentIndex},${subTaskIndex})"> delete </button>
          </td>
        </tr>`;
        
     

     


    });
    
  });


  var tableBody = document.querySelector(".taskTable-tbody");
  tableBody.innerHTML = parentTaskRows;


}



/*


 
  function Validatetask(taskid,taskstartdate,taskenddate)
  {
    let id=checkid(taskid);
    let sdate=checkstartdate(taskstartdate);
    let edate=checkenddate(taskenddate,taskstartdate);
    
      if(id && sdate && edate )
      {
        return 1;
      }
      else{
        return 0;
      }
   
  }

  
  
  function checkid(id) 
  {
    var error_msg = "";
   
    document.getElementById('iderror').style.display = "none";
 

      if(taskid.includes(id)) 
      {
            error_msg = " Id already exist";
        
      }
      
   if (error_msg) {
      document.getElementById('iderror').innerHTML = error_msg;
      document.getElementById('iderror').style.display = "block";
  
    }
    else {
      return 1;
    }
  }


  function checkstartdate(sdate)
  {
    
    
    if(error_msg)
    {
      document.getElementById('startdateerror').innerHTML=error_msg;
      document.getElementById('startdateerror').style.display="block";
    }
    else{
      return 1;
    }
   
  }

  function checkenddate(edate,sdate)
  {
    
    error_msg=0;
    

    if(error_msg)
    {
      document.getElementById('startdateerror').innerHTML=error_msg;
    document.getElementById('startdateerror').style.display="block";
   }
    
    else
    {
      return 1;
    }

  }


 
 */


 /*validate subtask date*/

  function validatetask(id, name, sdate,edate,status)
 {

    let v1 = checkId(id);
    let v2 = checkName(name);
    let v3 = checkdate(sdate,edate);
    let v4=checkStatus(status);
    
  console.log(v1,v2,v3,v4);
    if (v1 && v2 && v3 && v4)
     {
      return 1;
    }
    return 0;
  
    
  }
  
  
  var error_msg = "";
 
  function checkId(id)
  {
  
    //id = parseInt(id, 10);   
    document.getElementById('iderror').style.display = "none";
    error_msg = '';
  
    
  
      if (taskid.includes(id)) 
      {
        error_msg = " ID already exist";
      }
      
        
      

      if (error_msg)
      {
       document.getElementById('iderror').innerHTML = error_msg;
       document.getElementById('iderror').style.display = "block";
   
     }
     else {
       return 1;
     }
   
    }
  

   
  
   
  
 
  function checkName(name) 
  {
  
    document.getElementById('nameerror').style.display = "none";
    error_msg = "";
     name = name.trimStart();
    if (name != "") {
  
      if (!/^[a-zA-Z][a-zA-Z\s]+$/.test(name)) {
        error_msg = "Enter only alphabets.";
      }
    }
    else
      error_msg = "Enter task name";
  
    if (error_msg) {
      document.getElementById('nameerror').innerHTML = error_msg;
      document.getElementById('nameerror').style.display = "block";
    }
    else
      return 1;
  
  }
  
 
  function checkStatus(status)
   {
    document.getElementById('statuserror').style.display = "none";
    
    error_msg = "";
  
    if (status != "status")
     {
      return 1;
    }else {
      error_msg = "select  status";
      document.getElementById('statuserror').innerHTML = error_msg;
      document.getElementById('statuserror').style.display = "block";
    }
  
    
    return 0;
  }
  
  
  function checkdate(sdate,edate)
  {
    start=sdate;
    end=edate;
    error_msg = "";
    document.getElementById('startdateerror').style.display = "none";
    document.getElementById('enddateerror').style.display = "none";
    if(end<start)
    {
        error_msg="enter valid date ";
        alert("Enter valid date of subtask");
        
        
    }
        if(error_msg)
        {
            document.getElementById('startdateerror').style.display = "block";
            document.getElementById('endtdateerror').style.display = "block";

        }else
        {
          return 1;
        }
    

  }