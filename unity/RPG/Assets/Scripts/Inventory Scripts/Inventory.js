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
				}
			}
		}
	}
	
	
}


function addItem ( item : GameObject){
	var i : int;
	var inserted : boolean = false;
	
	for(i= 0; i < Slots && !inserted ; ++i){
		if(!invBol[i]){//cabe?
			var newItem : GameObject = Instantiate(item) as GameObject; 
 			newItem.transform.parent = GameObject.Find("Objects").transform;
 			newItem.SetActive(false);
			invObj[i]=newItem;
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
			GameObject.Destroy(item);
		}		
	}
}


function DrawInventory (){



}