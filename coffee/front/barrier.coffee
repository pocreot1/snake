class Barrier extends GameObject
  color: '#2F7728'

  constructor: (@game) ->
    @points = []
    points = window.barrier or []
    for p in points
      @set @get p[0], p[1]
