def extract_string(str_list, b):
    result = list(filter(lambda a: len(a) == b, str_list))
    return result

str_list = ['Python', 'list', 'exercises', 'practice', 'solution'] 
print("Original list:")
print(str_list)
b = 8
print("\nlength of the string to extract:")
print(b)
print("\nAfter extracting strings of specified length from the said list:")
print(extract_string(str_list , b))