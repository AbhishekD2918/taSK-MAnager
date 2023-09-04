

  
/* Edit parent task */
function edit_parentrecord(button)
 {
  document.getElementById('parenttask').style.display = "block";
  document.getElementById('childtask').style.display = "none";

  const index =  task.findIndex(obj => obj.taskid == button);
  console.log(index);
  
  const editedTask = { ...task[index] };

 

  
  editedTask.taskid = document.getElementById('taskid').value;
  editedTask.taskname = document.getElementById('taskname').value;
  editedTask.taskstartdate = document.getElementById('taskstartdate').value;
  editedTask.taskenddate = document.getElementById('taskenddate').value;
  editedTask.taskstatus = document.getElementById('taskstatus').value;
  let valid = validatetask(editedTask.taskid,editedTask.taskname , editedTask.taskstartdate,editedTask.taskenddate,editedTask.taskstatus);
  if(!valid)
  {
    return;
  }
  
  if(editedTask.taskid==="" || editedTask.taskname===""||editedTask.taskstatus==="")
  {
    return;
  }
  task[index] = editedTask;
 

  

 document.getElementById('taskid').value=null;
document.getElementById('taskname').value=null;
document.getElementById('taskstartdate').value=null;
document.getElementById('taskenddate').value=null;
document.getElementById('taskstatus').value=null;
 showonpage(task);

}






/* Edit child task */
  function edit_record(parentObjectIndex,indexToEdit)
  {


    document.getElementById('childtask').style.display="block";
    document.getElementById('parenttask').style.display="none";
    document.getElementById('subtaskid').value =task[parentObjectIndex].subtask[indexToEdit].subtaskid;
    document.getElementById('subtaskname').value= task[parentObjectIndex].subtask[indexToEdit].subtaskname;
    document.getElementById('subtaskstartdate').value = task[parentObjectIndex].subtask[indexToEdit].subtaskstartdate;
    document.getElementById('subtaskenddate').value =task[parentObjectIndex].subtask[indexToEdit].subtaskenddate;
    document.getElementById('subtaskstatus').value =task[parentObjectIndex].subtask[indexToEdit].subtaskstatus;

  task[parentObjectIndex].subtask.splice(indexToEdit,1);  
}






/* Delete Child task */
function delete_record(parentObjectIndex,indexToDelete)
{

  let confirmation = confirm("do you want to delete subTask ??");
  
  if(confirmation)
  {
 

    task[parentObjectIndex].subtask.splice(indexToDelete,1);
     alert("deleted .. !!");
  }
  showonpage(task);
    

}





/* Delete parent task */
function deleteParent(indexToDelete)
{
    let confirmation = confirm("do you want to delete main Task ??");
    if(confirmation)
    {
    
      task.splice(indexToDelete,1);
      showonpage(task);
      alert("deleted successfully..!");
    }
}





/* faulted function*/

/*
function Validedate(sdate,edate,min,max)
{
  
  document.getElementById('sstartdateerror').style.display="none";
  document.getElementById('senddateerror').style.display="none";
  var error_msg='';
  console.log(sdate,edate,min,max);
  if(sdate<min||sdate>max)
  {
    document.getElementById('sstartdateerror').style.display="block";
    alert("entert valid date");
    return 0;
  }

  if(edate<min||edate>max)
  {
    document.getElementById('senddateerror').style.display="block";
    alert("entert valid date");
    error_msg="error";
    return 0;
  }

  if(error_msg)
  {
    return 0;
  }
  else{
    return 1;
  }
}
*/

  
  
 
 
  
  
  
  
  
  