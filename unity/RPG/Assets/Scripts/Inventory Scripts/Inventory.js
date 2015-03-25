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
	var equiped : boolean =false;
	if(Input.GetKeyDown(KeyCode.R)){
		for(i= 0; i < Slots; ++i){
			if(invBol[i]){ 
				if(!equiped){
					player.SendMessage("PlayerEquip",invObj[i]);
					equiped=true;
				}
			}
		}
	}
	if(Input.GetKeyDown(KeyCode.T)){
		for(i= 0; i < Slots; ++i){
			if(invBol[i]){ 
				throwItem(invObj[i]);
			}
		}
	}
	
	
}


function addItem ( item : GameObject){
	var i : int;
	var inserted : boolean = false;
	
	for(i= 0; i < Slots && !inserted ; ++i){
		if(!invBol[i]){//cabe?
 			item.transform.parent = GameObject.Find("InventoryObjects").transform;
 			item.SetActive(false);
			invObj[i]=item;
			invBol[i]=true;
			inserted=true;
		}
	}
}

function removeItem ( item : GameObject){//iteam ha de existir en el inventario
	var i : int;
	for(i= 0; i < Slots ; ++i){
		if(invObj[i] == item){
			invBol[i]=false;
		}		
	}
}

function throwItem (item : GameObject ){
	var i : int;
	for(i= 0; i < Slots ; ++i){
		if(invObj[i] == item){
			invBol[i]=false;
			item.transform.parent = null;
			item.transform.position= player.transform.position;
			item.SetActive(true);
		}		
	}
}


function DrawInventory (){



}