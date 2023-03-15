class Emp:
    def __init__(self, e_id, e_name):
        self.e_id = e_id
        self.e_name = e_name
    def __repr__(self):
        return str((self.e_id, self.e_name))

abc = [Emp("abc", 1),
       Emp("zfgf", 7),
       Emp("gdefg", 3),
       Emp("thryuj", 6)]

print(sorted(abc, key=lambda x: x.e_name))