#pragma strict

private var parentTransform : Transform;
private var parentMovementComponent : PlayerMovement;

function Start () {
	parentTransform = transform.parent;
	parentMovementComponent = transform.GetComponentInParent(PlayerMovement);
}

function Update () {
	if((Input.GetAxis("Mouse X") && !Input.GetButton("Fire2")) || Input.GetButtonUp("Fire2")) {
		parentMovementComponent.RotateYAdd(transform.eulerAngles.y);
		transform.localEulerAngles.y = 0;
	}
}
