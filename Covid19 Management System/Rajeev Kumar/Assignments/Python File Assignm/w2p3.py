file = open("text.txt", "r")
data = file.read()
words = data.split()
print('Number of words in text file :', len(words))