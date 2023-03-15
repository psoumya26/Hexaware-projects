class InvalidTicketAgeException (Exception):
    pass
try:
    age = int(input("Enter your age: "))
    if(age<3 or age>80):
        print("You can get free ticket")
    else:
        raise InvalidTicketAgeException
except InvalidTicketAgeException:
    print("Exception occured: Invalid Valid Age");
except ValueError:
  print("Please enter a valid age!")
finally:
    print("Thank you!")
