// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.




// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//  Example 1:

//

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
// Accepted
// 2,701,295
// Submissions
// 7,010,132

// 1. LinkedLists
class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

// Generate a linked list from an array
function generateList(arr) {
  if (arr.length === 0) { return null; }
  
  let head = new ListNode(arr[0]);

  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

/* Let's build the following LinkedList:

  1 --> 5 --> 7 --> 10 --> null

*/

let array = [1,5,7,10];
let linkedList = generateList(array);
// console.log(linkedList);
// it's a good idea to remeber or store this for interview!




let results = [];
let remainder = 0


const ReverseLinkList = (list) =>{
      //base case list1 === null
    if(list === null)  return;

    ReverseLinkList(list.next)

  console.log('r',remainder)
  remainder = (list.value % 10 )? 0 : list.value / 10 ;
   
    // Take the reminder add it to or end of list 

    results.push(list.value)
  // [10 , 7 , 5 , 1]
  // add the number and push remainder to current.next
  
    console.log('running recurively ',results)
    // recusive case f(list1.next)
    // return Number(arr.push(list1).splice())
// 
}

recursive(linkedList);

var addTwoNumbers = function(list1, list2) {
  // let results = [];

// helper f(x) that checks the length and then reverses it 
    //base case list1 === null
    // recusive case f(list1.next)
    // return Number(arr.push(list1).splice())
// 

  // let list recursive(linkedList);
  // recursive(linkedList);
  // counter = 0
    //loop (list1 !== null)
    // list1 = list1.next


  
// returns the reversed linked list as a number 
// make both f(x) calls, add numbers
// flip numbers and add to new array 
  //return new array
  
};