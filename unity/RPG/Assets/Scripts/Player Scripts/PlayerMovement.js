#pragma strict
public var walkingSpeed : float = 3;
public var fallSpeed : float = 4;
public var rotationSpeed : float = 2;
private var controller : CharacterController;
private var centerTransform : Transform;

function Start () {
	controller = gameObject.GetComponent(CharacterController);
	centerTransform = transform.Find("Center");
}

function Update () {
	var direction : Vector3 = Vector3.zero;
	if(Input.GetKey("w") || Input.GetKey("up")) direction += transform.forward;
	if(Input.GetKey("s") || Input.GetKey("down")) direction -= transform.forward;
	if(Input.GetKey("a") || Input.GetKey("left")) direction -= transform.right;
	if(Input.GetKey("d") || Input.GetKey("right")) direction += transform.right;
	direction.Normalize();
	if(!controller.isGrounded) direction += -transform.up*fallSpeed;
	controller.SimpleMove(direction*walkingSpeed);
	if(!Input.GetButton("Fire2")) {
		if(Input.GetKey("q")) {
			transform.Rotate(Vector3(0, -rotationSpeed*Time.deltaTime,0));
		}
		else if (Input.GetKey("e")) {
			transform.Rotate(Vector3(0,rotationSpeed*Time.deltaTime,0));
		}
	}
}

function RotateYAdd (y : float) {
	transform.eulerAngles.y = y;
}