module Anagrams

	def self.are_they?(word1, word2)
		hash1 = hashify(word1)
		hash2 = hashify(word2)
		hash1 == hash2
	end

	def self.hashify(word)
		hash = Hash.new(0)
		word.chars.each {|x| hash[x] += 1}
		hash
	end

end