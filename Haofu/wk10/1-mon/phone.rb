class Phone
  def initialize(num)
    num = num.gsub(/[^0-9]/, "")
    case num.length
    when 10
      @num = num
    when 11
      if num.split("").first == "1"
        @num = num[1..-1]
      else
        @num = "0000000000"
      end
    else
      @num = "0000000000"
    end
  end

  def number
    @num
  end

  def area_code
    @num[0..2]
  end

  def to_s
    "(#{@num[0..2]}) #{@num[3..5]}-#{@num[6..10]}"
  end
end
