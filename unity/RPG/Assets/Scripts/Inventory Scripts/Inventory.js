#pragma strict

public var Slots : int = 20;
public var invObj : GameObject[];
public var invBol : boolean[]	;
private var ult: int = 0;
private var player : GameObject;
function Start () {
	invObj = new GameObject[Slots];
	invBol = new boolean[Slots];
	player   = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	var i : int;
	if(Input.GetKeyDown(KeyCode.R)){
		for(i= 0; i < Slots; ++i){
			if(invBol[i]){ 
				if()player.SendMessage("PlayerEquip",invObj[i]);
			}
		}
	}
}

function addItem ( item : GameObject){
	var i : int;
	var inserted : boolean = false;
	
	for(i= 0; i < Slots && !inserted ; ++i){
		if(!invBol[i]){//comprobar peso
			invObj[i]=item;
			invBol[i]=true;
			inserted=true;
		}
	}
}

function removeItem ( item : GameObject){//iteam ha de existir en el inventario
	var i : int;
	for(i= 0; i < ult ; ++i){
		if(invObj[i] == item){
			invBol[i]=false;
		}		
	}
	ult--;
}


function DrawInventory (){



}