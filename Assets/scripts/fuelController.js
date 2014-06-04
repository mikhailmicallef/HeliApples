#pragma strict

function Start () {

}

function Update () {
	//moves the fuel to the left at speed 4
	transform.Translate(Vector3.left * 4 * Time.deltaTime);
}