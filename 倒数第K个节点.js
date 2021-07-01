const getKth=function(head,k){
    let fast = head
    let slow =head
    let n=0
    while(fast){
        if(n=k) slow=slow.next
        fast = fast.next
        n++
    }
    return slow
}