import json
Json = {"id" : 1, "name" : "value2", "age" : 29}

with open("json1.json", "w") as write_file:
    json.dump(Json, write_file, indent=4, sort_keys=True)
print("Successfully done!")