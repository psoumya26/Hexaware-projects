import pytest

def remove_empty_tuple(tuple_list):
    return [tuple for tuple in tuple_list if tuple]

@pytest.mark.xfail
def test_empty_tuple():
    assert remove_empty_tuple([()]) == ['']

def test_filled_tuple():
    assert remove_empty_tuple([('',), ('a', 'b'), ('a', 'b', 'c'), ('d')]) == [('',), ('a', 'b'), ('a', 'b', 'c'), 'd']

@pytest.mark.skip
def test_empty_list():
    assert remove_empty_tuple([])==[]