let subtaskid=[];


/*call subtask field*/
function add_subtask()
{
  document.getElementById('parenttask').style.display="none";
  document.getElementById('childtask').style.display="block";

}


/*calling subtask*/
function call_subtask(parent_id,parent_sdate,parent_edate)
{
   
    var taskid=document.getElementById('subtaskid').value;
    var taskname = document.getElementById('subtaskname').value;
    var taskstartdate = document.getElementById('subtaskstartdate').value;
    var taskenddate = document.getElementById('subtaskenddate').value;
    var taskstatus = document.getElementById('subtaskstatus').value;
    
    if(taskname==="")
  {
    return;
  }

  console.log(parent_edate,parent_sdate);
   let min=parent_sdate;
   let max=parent_edate;
    document.getElementById('subtaskid').value = Math.floor(Math.random() * 10);

    let valid= checkdate(taskstartdate,taskenddate);
    console.log(valid);
     if(valid)
    {
      adding_subtask(parent_id,taskid,taskname,taskstartdate,taskenddate,taskstatus); 

     }

   // adding_subtask(parent_id,taskid,taskname,taskstartdate,taskenddate,taskstatus);    

}



/*adding subtask*/
function adding_subtask(parent_id,id1,name1,startdate1,enddate1,status1)
{
 
  if(id1==="")
  {
    return;
  }

  var indexofparent=-1;
  for(let i=0;i<task.length;i++)
  {
    if(task[i].taskid == parent_id)
    {
      indexofparent = i;
      break;
    }
  }

  
    let newsubtask = {
        subtaskid:id1,
        subtaskname:name1,
        subtaskstartdate:startdate1,
        subtaskenddate:enddate1,
        subtaskstatus:status1,
        

    };

  
    task[indexofparent].subtask.push(newsubtask);
    subtaskid.push(id1);
   
    document.getElementById('subtaskid').value=null;
    document.getElementById('subtaskname').value=null;
    document.getElementById('subtaskstartdate').value=null;
    document.getElementById('subtaskenddate').value=null;
    document.getElementById('subtaskstatus').value=null;
    
    
    showonpage();
   
}


/*call parent field*/
function parent_task()
{

  document.getElementById('parenttask').style.display="block";
  document.getElementById('childtask').style.display="none";

}




