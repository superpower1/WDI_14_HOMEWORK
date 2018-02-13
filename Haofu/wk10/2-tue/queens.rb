class Queens
  attr_accessor :white_queen, :black_queen, :board

  def initialize(hash={white:[0,3], black:[7,3]})

    @white_queen = {
      x: hash[:white].first,
      y: hash[:white].last,
    }
    @black_queen = {
      x: hash[:black].first,
      y: hash[:black].last,
    }

    if same_spot?
      raise ArgumentError.new('The two queen can not be in the same spot')
    end

    @board = []
    8.times do |x|
      row = []
      8.times do |y|
        if white_queen[:x] == x && white_queen[:y] == y
          row << "W"
        elsif black_queen[:x] == x && black_queen[:y] == y
          row << "B"
        else
          row << "O"
        end
      end
      @board << row
    end
  end

  def to_s
    rows = board.map do |row|
      row.join(" ")
    end
    rows.join("\n")
  end

  def same_spot?
    if same_row? && same_column?
      return true
    else
      return false
    end
  end

  def same_row?
    if white_queen[:x] == black_queen[:x]
      return true
    else
      return false
    end
  end

  def same_column?
    if white_queen[:y] == black_queen[:y]
      return true
    else
      return false
    end
  end

  def same_diagonal?
    if white_queen[:x] - black_queen[:x] == white_queen[:y] - black_queen[:y]
      return true
    else
      return false
    end
  end

  def attack?
    if same_row? || same_column? || same_diagonal?
      return true
    else
      return false
    end
  end

  def white
    white_queen.values
  end

  def black
    black_queen.values
  end
end
