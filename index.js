// code your solution here
// Function to find the year a team won the Super Bowl from a given record
 superbowlWin = (record) =>{
    // Find the first record where the result is "W" (Win)
    const winningRecord = record.find(record => record.result === "W");
     
    // Return the year of the winning record if found, otherwise return undefined
    return winningRecord ? winningRecord.year : undefined;
   }
   
