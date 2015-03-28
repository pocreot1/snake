class Food extends GameObject
  color: '#774E28'
  count: 0

  constructor: (@game) ->
    @points = []
    do @respawn

  respawn: ->
    free = @game.map.free
    if free.length > 0
      do @game.map.change_color unless @count % 5
      @count += 1
      @set @game.map.free[random_int 0, free.length-1]
      do @unset if @points.length > 1
    else @game.win = yes
    return
