var {pointDistance, point} = require('./util.js');

module.exports = function(state){
	return {
		position: function(data){
			return point(state.players[data.id])
		},
		scan: function(data){
			var player = state.players[data.id];
			return state.systems.map((s)=>{
				s.distance = pointDistance(point(player), point(s))
				return s;
			})
		}
	}
}