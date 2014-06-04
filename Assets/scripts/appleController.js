#pragma strict
var speed:int;
function Start () {
speed = 4;
}

function Update () {
	//moves the apple to the left at speed 4

	if (Application.loadedLevel == 1)
	{
		speed = 4;
	}
	if (Application.loadedLevel == 2)
	{
		speed = 8;
	}
	if (Application.loadedLevel == 3)
	{
		speed = 12;
	}
	transform.Translate(Vector3.left * speed * Time.deltaTime);
}