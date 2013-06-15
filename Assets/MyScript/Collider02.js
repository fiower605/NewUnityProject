#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( hit:Collider )
{
	if( hit.gameObject.name == "Terrain" )
		return;
	
	Debug.Log( hit.gameObject.name );
	Debug.Log( hit.collider.name );
	Debug.Log( "------------------" );
}
