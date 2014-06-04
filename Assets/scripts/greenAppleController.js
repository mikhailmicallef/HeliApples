#pragma strict
var greenApples:int;


function Start () {

}

//function that is triggered when laser hits the enemy
//function OnTriggerEnter(other:Collider)
//{
//	//if the laser hits a UFO, we will do the following two things:
//	//Destroy the laser
//	//Destroy the UFO
//	if (other.gameObject.tag == "alien")
//	{
//		//increase the score
//		rocketshipController.score++;
//		
//		var remainder = 0;
//		
//		//calculate the remainder division by ten
//		remainder = rocketshipController.score % 10;
//		//if the remainder is 0, the score can be divided by 10
//		if (remainder == 0)
//		{
//			//increase lives by 10
//			rocketshipController.lives++;
//		}
//		
//		//destroy the ufo
//		Destroy(other.gameObject);
//		//destroy thelaser
//		Destroy(this.gameObject);
//	}
//}

function Update () {
	//move the laser FORWARD
	transform.Translate(Vector3.down *
		greenApples * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}