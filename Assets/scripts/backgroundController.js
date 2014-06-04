#pragma strict
var speed:int;

function Start () {

}

function Update () {
	//moves the background to the left at speed 4
	transform.Translate(Vector3.left * speed * Time.deltaTime);
}

//to keep the background image looping.  Only works when the game is maximized
function OnBecameInvisible()
{
	transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x+8;
}