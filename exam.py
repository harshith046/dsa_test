class ListNode:
    def __init__(self,val=0):
        self.val=val
        self.next=None
        
l=ListNode()
def Merge_linkedlists(self,lis2):
    temp1=l
    temp2=lis2
    while temp1 and temp2:
        if temp1.val<=temp2.val:
            temp1.next=temp1
            temp1=temp1.next
        else:
            temp1.next=temp2    
            temp2=temp2.next
    temp1.next=temp2
    l=temp1

def main():
    lists=ListNode()
    #lists=[[1,4,5],[1,3,4],[2,6]]
    k=int(input())
    for _ in range(k):
        l=int(input())
        inner_l=ListNode()
        for _ in range(l):               
            a=int(input())
            inner_l.val=a
            inner_l=inner_l.next
        lists=lists.next
        
    for lis in lists:
        Merge_linkedlists(lis)
        
    while l:
        print(l.val)
        l=l.next
        
main()