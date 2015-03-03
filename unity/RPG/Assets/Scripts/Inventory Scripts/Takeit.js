#pragma strict
private var player : GameObject; 
private var inv    : GameObject;
private var nearItem : GameObject;

function Start () {
	player   = GameObject.FindGameObjectWithTag("Player");
	nearItem = GameObject.FindGameObjectWithTag("Item");
}

function Update () {
	nearItem = GameObject.FindGameObjectWithTag("Item");
	if(nearItem != null){
		if((nearItem.transform.position.x-player.transform.position.x) < 10){
			if(Input.GetKeyDown(KeyCode.E)){
				SendMessage("addItem",nearItem);
				nearItem.SetActive(false);
			}			
		}	
	}
}