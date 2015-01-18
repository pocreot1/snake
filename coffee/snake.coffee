class Snake extends GameObject
  head_color: "#e77"
  color: "#ccc"

  UP: 1
  RIGHT: 2
  DOWN: 3
  LEFT: 4

  constructor: (@game) ->
    x = Math.floor @game.width/2
    y = Math.floor @game.height/2
    @points = [
      [x,y-1],
      [x,y],
      [x,y+1]
    ]
    @tail = [x-1,y+1]
    @direction = @RIGHT
    do @draw

  move: ->
    first = @points[0]
    switch @direction
      when @UP
        if (first[1] > 0) then next = [first[0],first[1]-1]
        else  next = [first[0], @game.height-1]
      when @RIGHT
        if (first[0] < @game.width-1) then next = [first[0]+1,first[1]]
        else  next = [0, first[1]]
      when @DOWN
        if (first[1] < @game.height-1) then next = [first[0],first[1]+1]
        else  next = [first[0], 0]
      when @LEFT
        if (first[0] > 0) then next = [first[0]-1,first[1]]
        else  next = [@game.width-1, first[1]]
    free_points = intersec_arrays @game.map.points, @points, arr_comp
    for free in free_points
      if next[0] is free[0] and next[1] is free[1]
        next_is_free = yes
    if next_is_free and next[0] is @game.food.points[0][0] and next[1] is @game.food.points[0][1]
      @points.unshift next
      do @game.food.respawn
      do @game.score.next
    else if next_is_free
      @tail = do @points.pop
      @points.unshift next
    else @game.over = yes
    return

  turn_left: ->
    if @direction > 1 then @direction--
    else @direction = @LEFT

  turn_right: ->
    if @direction < 4 then @direction++
    else @direction = @UP

  draw: ->
    super [@tail], @game.map.color
    super
    super [@points[0]], @head_color