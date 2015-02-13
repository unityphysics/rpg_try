#pragma strict
public var distance : float = 3;
public var zoomSpeed : float = 2;
private var parent : Transform;

function Start () {
	parent = transform.parent;
	transform.position = Vector3(0, parent.position.y, -distance);
}

function Update () {
	transform.LookAt(parent);
	transform.localPosition.z += Input.GetAxis("Mouse ScrollWheel")*zoomSpeed;
}