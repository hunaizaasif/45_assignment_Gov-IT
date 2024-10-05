

/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
 new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of
 the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are
 inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let Guest_List : string[] =  ["Asif" , "Amber" , "Abdul_salam"];

  for( let i=0 ; i < Guest_List.length  ; i++){ 

  
  console.log(`Dera ${Guest_List[i]}  : \n you are invite to diner! \n`);
  
  }

console.log(`"unfortunately ${Guest_List[1]}, can't come to diner. `);


Guest_List[1] = "Duaa" ;

console.log("\n  NEW LIST OF INVITATION : \n");

for (let k = 0 ; k < Guest_List.length ; k++){
    console.log(`Dear ${Guest_List[k]}  : \n you are invite to diner! \n`);
    
}
