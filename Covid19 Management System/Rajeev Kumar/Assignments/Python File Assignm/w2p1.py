from collections import Counter
def word_count(name):
        with open(name) as f:
                return Counter(f.read().split())
print("Number of words :",word_count("text.txt"))