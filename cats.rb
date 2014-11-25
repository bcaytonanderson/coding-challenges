module Challenge

	def self.createcats(number)
		number.times do |x|
			x = Cat.new
		end
	end

	class Cat

		class << self
			attr_accessor :allcats
		end

		attr_accessor :hat
		def initialize
			@hat = true
			(Cat.allcats ||= []) << self
		end

		def switch
			@hat = !@hat
		end

		def iterate(times)
			for i in 1..@allcats.size
				@allcats.each do |x|
					adjustedindex = x.index + 1
					if adjustedindex == 1
						x.switch
					elsif adjustedindex % i == 0
						x.switch
					end
				end
			end
		end

	end



end