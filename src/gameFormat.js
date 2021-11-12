//This function helps check the format
function checkFormat(a, b, c, d) 
{
  return a === b && a === c && a === d;
}

//This function helps set the dimensions of the board, as well as vertically/horizontally checks the slots on the board
export function checkWin(slots) 
{
  let winCondition = 4;
  let numSlots = 7;
  for (let i = 0; i < slots.length - numSlots * 3; i++) 
  {
    if 
    (
      slots[i] !== null &&
      checkFormat
      (
        slots[i],
        slots[i + numSlots],
        slots[i + numSlots * 2],
        slots[i + numSlots * 3]
      )
    ) 
    {
      return slots[i];
    }
  }
  for (let i = 0; i < slots.length; i++) 
  {
    if 
    (
      i === winCondition ||
      i === winCondition + numSlots ||
      i === winCondition + numSlots * 2 ||
      i === winCondition + numSlots * 3 ||
      i === winCondition + numSlots * 4 ||
      i === winCondition + numSlots * 5
    ) 
    {
      i += 2;
    } 
    else 
    {
      //This checks if the slot at the index is the same
      if (slots[i] === slots[i + 1]) 
      {
        if 
        (
          slots[i] !== null &&
          checkFormat(slots[i], slots[i + 1], slots[i + 2], slots[i + 3])
        ) 
        {
          return slots[i];
        }
      }
    }
  }

  //This checks if all the slots are occupied
  for (let i = 0; i < slots.length; i++) 
  {
    if (!slots[i]) 
    {
      break;
    }
    if (i === slots.length - 1) 
    {
      return -1;
    }
  }
  return null;
}
