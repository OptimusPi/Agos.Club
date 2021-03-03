^r::Reload ; reset all running scripts

; Equip Ninja Mask
F1:: 
Position := randomXY(1450, 160)
openEquiptment()
initiateClick(Position.X, Position.Y)
closeInventory()
return

; Equip Hard Hat
F2:: 
Position := randomXY(1200, 160)
openEquiptment()
initiateClick(Position.X, Position.Y)
closeInventory()
return

; Equip Heli Hat
F3:: 
Position := randomXY(1500, 160)
openEquiptment()
initiateClick(Position.X, Position.Y)
closeInventory()
return

; Equip Clear Ballons
^b:: 
openConsumables()
Position1 := randomXY(1250, 95)
Position2 := randomXY(1250, 95)
Position3 := randomXY(1250, 95)
Wait1 := randomWait(1000)
Wait2 := randomWait(1000)
Wait3 := randomWait(1000)
initiateClick(Position1.X, Position1.Y)
Sleep, Wait1
initiateClick(Position2.X, Position2.Y)
Sleep, Wait2
initiateClick(Position3.X, Position3.Y)
Sleep, Wait3
closeInventory()
return

openConsumables() {
  Send, i
  Position := randomXY(1350, 60)
  Wait1 := randomWait(100)
  Wait2 := randomWait(100)
  Wait3 := randomWait(100)
  Sleep, Wait1
  MouseClick, left, Position.X, Position.Y, 1, 0, D
  Sleep, Wait2
  MouseClick, left, Position.X, Position.Y, 1, 0, U
  Sleep, Wait3
}

openEquiptment() {
  Send, i
  Position := randomXY(1250, 60)
  Wait1 := randomWait(100)
  Wait2 := randomWait(100)
  Wait3 := randomWait(100)
  Sleep, Wait1
  MouseClick, left, Position.X, Position.Y, 1, 0, D
  Sleep, Wait2
  MouseClick, left, Position.X, Position.Y, 1, 0, U
  Sleep, Wait3
}

initiateClick(x,y){
  MouseClick, right, x, y, 1, 0, D
  Wait1 := randomWait(100)
  Sleep, Wait1
  MouseClick, right, x, y, 1, 0, U
  Wait2 := randomWait(100)
  Sleep, Wait2i
}

closeInventory(){
  Position := randomXY(1250, 60)
  Wait1 := randomWait(100)
  Wait2 := randomWait(100)
  Wait3 := randomWait(100)
  Sleep, Wait1
  MouseClick, left, Position.X, Position.Y, 1, 0, D
  Sleep, Wait2
  MouseClick, left, Position.X, Position.Y, 1, 0, U
  Send, i
  Sleep, Wait3
}

randomXY(xBase, yBase){
  Random, randX, -5, 5
  Random, randY, -5, 5
  X := xBase + randX
  Y := yBase + randY
  Return {X: X, Y: Y}
}

randomWait(base){
  Random, rand, -25, 25
  num := base + rand
  Return num
}