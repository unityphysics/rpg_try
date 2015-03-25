#pragma strict

//stats del psj (solo algunos de ejemplo)
public var  hp          : float; 
public var  basehp      : float;
public var  damage      : float;
public var  stamina     : float;
public var  velocity    : float;
public var  money       : int;
public var  peso_equipo : float;
public var  def			: float;
public var  atck        : float;

//privates modo batalla
private var enemmy : GameObject;
private var combate : boolean = false;


//publics equipo psj
public var casco      :GameObject;
public var pechera    :GameObject;
public var pantalones :GameObject;
public var botas      :GameObject;
public var arma       :GameObject;


function Start () {
	//al emepezar cargamos los stats del psj si ha existido alguno 
	
	//si nunca hemos jugado nuevas variables
}

function Update () {
	if(hp <=0 || transform.position.y < -10){
		Application.LoadLevel(Application.loadedLevel);
	}
}

//funciones interaccion con el psj
function PlayerReciveDamege(){

}

function PlayerDealDamage (){

}

//funciones interaccion inventario
function PlayerEquip (item : GameObject ) {
    var aux : Item =item.GetComponent("Item");
			if(aux.itemTag == "casco" || aux.itemTag == "pechera" || aux.itemTag == "pantalones" || aux.itemTag == "botas" || aux.itemTag == "arma"){
		   		if(aux.itemTag == "casco" && casco != null){
		   			Debug.Log("Pene");
	 				PlayerUnequip(casco);
					casco=item;
				}
				else casco=item;
		   		def+=aux.def;
				atck+=aux.atck;
				peso_equipo+=aux.slots;
				item.transform.parent = GameObject.Find("EquipedObjects").transform;
		 		item.SetActive(false);
		 		GameObject.FindGameObjectWithTag("Inventory").SendMessage("removeItem",item);
	 	
		//quitar el objeto del inventario
		}
	}

function PlayerUnequip(item : GameObject){
 		var aux : Item =item.GetComponent("Item");
		def-=aux.def;
		atck-=aux.atck;
		peso_equipo-=aux.slots;
		
		if(casco==item)casco=null;
		if(pechera==item)pechera=null;
		if(pantalones==item)pantalones=null;
		if(botas==item)botas=null;
		if(arma==item) arma=null;
		
 		item.transform.parent = GameObject.Find("InventoryObjects").transform;
 		item.SetActive(false);
 		GameObject.FindGameObjectWithTag("Inventory").SendMessage("addItem",item);
}