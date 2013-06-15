#pragma strict

function Start () {

}

function Update () {

}

function OnControllerColliderHit( hit:ControllerColliderHit )
{
	if( hit.gameObject.name == "Terrain" )
		return;
	
	Debug.Log( hit.gameObject.name );
	Debug.Log( hit.collider.name );
	Debug.Log( "------------------" );
}
