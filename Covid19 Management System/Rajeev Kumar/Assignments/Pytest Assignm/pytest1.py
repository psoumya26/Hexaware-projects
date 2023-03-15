import pytest

@pytest.fixture
def sample_tuple():
    return ("a",1,"b","c",3,"e",5,9)

def test_element(sample_tuple):
    assert 1 in sample_tuple

def test_element1(sample_tuple):
    assert 7 in sample_tuple

def test_element3(sample_tuple):
    assert 'a'  in sample_tuple

def test_element4(sample_tuple):
    assert 5  in sample_tuple

def test_element5(sample_tuple):
    assert 'd' in sample_tuple