
module.exports = function (p, a, b, f) {
	rank(p, a, b, f);
}

function rank(p, a, b, f)
{
	if( !a )
	{
		a = "val a " + get( p );
	}

	if( !b )
	{
		b = "val b " + get( p );
	}

	f(a,b);
}

function get(path)
{
	return "x";
}
