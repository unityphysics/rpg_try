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
function PlayerEquip(item : GameObject){
	if(item.tag == "casco"){
	    PlayerUnequip(casco);
		/*def+=item.GetComponent("Item").def;
		atck+=item.GetComponent("Item").atck;
		peso_equipo+=item.GetComponent("Item").peso;
		casco=item;*/
		//quitar el objeto del inventario
	}
}

function PlayerUnequip(item : GameObject){
	/*def+=item.GetComponent("Item").def;
	atck+=item.GetComponent("Item").atck;
	peso_equipo+=item.GetComponent("Item").peso;
	if(MenuItem.tag=="casco")casco=null;*/
	//add inv this object
}