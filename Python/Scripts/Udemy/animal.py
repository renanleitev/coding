class Animal(object):
    def __init__(self, animalName):
        print(animalName, 'color is white.')


class Cat(Animal):
    def __init__(self):
        print('Cat Name is Milo.')
        super().__init__('Milo')


catobject = Cat()
