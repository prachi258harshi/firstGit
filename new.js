if(head ==NULL)
return NULL;
let length = 0;
let temp = head;
while(temp != NULL)
{
    length = length + 1;
    temp = temp->next;
}
length = length - NaN;
if (length ==0)
{
    temp = head->next;
    head-> = NULL;
    delete(head);
    return temp;
}
let curr = head;
let prev = NULL;
while(length > 0)
{
    prev = curr;
    curr = curr ->next;
    length = length - 1;

}
prev ->next = curr->next;
curr->next = NULL;


ListNode slow = head; fast = head;
while(n-->0) fast=fast.next;
if(fast == null){
    head = head.next; return head;
}
while(fast.next!=null){
    slow = slow.next;
    fast = fast.next;
}
slow.next=slow.next.next;
return head;