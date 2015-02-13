#pragma strict

private var parentTransform : Transform;
private var parentMovementComponent : PlayerMovement;

function Start () {
	parentTransform = transform.parent;
	parentMovementComponent = transform.GetComponentInParent(PlayerMovement);
}

function Update () {
	Debug.DrawRay(transform.position, transform.forward*5, Color.blue);

	if(Input.GetButton("Fire2")) {
		parentMovementComponent.RotateYAdd(transform.eulerAngles.y);
		transform.localEulerAngles.y = 0;
	}
}