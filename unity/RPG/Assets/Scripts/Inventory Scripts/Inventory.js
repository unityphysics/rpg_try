#pragma strict

public var Slots : int = 20;
public var invObj : GameObject[];
public var invBol : boolean[]	;
private var ult: int = 0;

function Start () {
	invObj = new GameObject[Slots];
	invBol = new boolean[Slots];
}

function Update () {

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