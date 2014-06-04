#pragma strict
//add a reference to the apple
var apple:Rigidbody;


function Start () {
	//call createApple every second
	InvokeRepeating("createApple",1.0,1.0);
}

function createApple()
{
	var randomY:float;
	
	randomY = Random.Range(-4.9,4.9);
	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(apple,Vector3(16,randomY,-1),Quaternion.identity);
}


function Update () {

}