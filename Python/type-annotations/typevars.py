from typing import TypeVar

T = TypeVar('T')

def get_item(list: list[T], index: int) -> T:
    return list[index]

list_int = get_item([1, 2, 3], 1)
print(list_int)
# 2

list_str = get_item(['a', 'b', 'c'], 1)
print(list_str)
# b