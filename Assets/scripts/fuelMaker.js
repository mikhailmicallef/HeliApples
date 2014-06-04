#pragma strict
//add a reference to the fuel
var fuel:Rigidbody;


function Start () {
	//call createfuel every 8s econds
	InvokeRepeating("createfuel",8.0,8.0);
}

function createfuel()
{
	var randomY:float;
	
	randomY = Random.Range(-4.9,4.9);
	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(fuel,Vector3(16,randomY,-1),Quaternion.identity);
}


function Update () {

}