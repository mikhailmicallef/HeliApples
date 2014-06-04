#pragma strict
//add a reference to the apple
var orangeApple:Rigidbody;


function Start () {
	//call createApple every second
	InvokeRepeating("createorangeApple",5.0,5.0);
}

function createorangeApple()
{
	Debug.Log("orange apple");
	var randomY:float;
	
	randomY = Random.Range(-4.9,4.9);
	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(orangeApple,Vector3(16,randomY,-1),Quaternion.identity);
}


function Update () {

}