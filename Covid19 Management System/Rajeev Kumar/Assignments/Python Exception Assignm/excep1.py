class InvalidIDPasswordException(Exception):
    pass

try:
    input_id = input("Enter the ID:")
    input_pwd = input("Enter the password:")
    if len(input_pwd) < 8 or len(input_id) == 0:
        raise InvalidIDPasswordException
    else:
        print("ID and password accepted")
except InvalidIDPasswordException:
    print("Exception occured: Invalid ID or Password")
finally:
    print("bye")
