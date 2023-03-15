class InvalidDateException(Exception):
    pass

try:
    booked_date = input("Enter the booking date:")
    if booked_date not in ["2020-06-18","2020-06-19","2020-06-20","2020-06-21","2020-06-22"]:
        raise InvalidDateException
    else:
        print("Booking date is valid for tickets")
except InvalidDateException:
    print("Exception occured: Invalid Date")
finally:
    print("bye")
