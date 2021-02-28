^r::Reload ; reset all running scripts

; Equip Ninja Mask
F1:: 
openEquiptment()
initiateClick(1450, 160)
closeInventory()
return

; Equip Hard Hat
F2:: 
openEquiptment()
initiateClick(1200, 160)
closeInventory()
return

; Equip Heli Hat
F3:: 
openEquiptment()
initiateClick(1500, 160)
closeInventory()
return

; Equip Clear Ballons
^b:: 
openConsumables()
initiateClick(1250, 95)
Sleep, 1000
initiateClick(1250, 95)
Sleep, 1000
initiateClick(1250, 95)
closeInventory()
return

openConsumables() {
  Sleep, 100
  Send, i
  Sleep, 100
  Click, 1350 60 Down Left
  Sleep, 50
  Click, 1350 60 Up Left
  Sleep, 100
}

openEquiptment() {
  Sleep, 100
  Send, i
  Sleep, 100
  Click, 1250 60 Down Left
  Sleep, 50
  Click, 1250 60 Up Left
  Sleep, 100
}

initiateClick(x,y){
  Click, %x% %y% Down Right
  Sleep, 50
  Click, %x% %y% Up Right
}

closeInventory(){
  Sleep, 100
  Click, 1250 60 Down Left
  Sleep, 50
  Click, 1250 60 Up Left
  Send, i
  Sleep, 100
}
