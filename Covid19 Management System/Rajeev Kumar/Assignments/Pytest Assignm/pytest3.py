import unittest

def check_element(input_tuple, element):
    for x in input_tuple:
        if element in x:
            return True
    return False

class TestElementInTuple(unittest.TestCase):
    def test_element_in_tuple(self):
        input_tuple = (('Red', 'White', 'Blue'), ('Green', 'Pink', 'Purple'), ('Orange', 'Yellow', 'Lime'))
        self.assertTrue(check_element(input_tuple, 'White'))
        self.assertFalse(check_element(input_tuple, 'Olive'))

if __name__ == '__main__':
   unittest.main()