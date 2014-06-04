#pragma strict
//add a reference to the apple
var bittenapple:Rigidbody;


function Start () {
	//call createApple every second
	InvokeRepeating("createbittenapple",6.0,6.0);
}

function createbittenapple()
{
	var randomY:float;
	
	randomY = Random.Range(-4.9,4.9);
	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(bittenapple,Vector3(16,randomY,-1),Quaternion.identity);
}


function Update () {

}