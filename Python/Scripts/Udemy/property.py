# # Python program to explain property() function
# # Alphabet class

# class Alphabet:
# 	def __init__(self, value): # !Sempre iniciar uma classe com uma função init
# 		self._value = value

# 	# getting the values
# 	def getValue(self):
# 		print('Getting value')
# 		return self._value

# 	# setting the values
# 	def setValue(self, value):
# 		print('Setting value to ' + value)
# 		self._value = value

# 	# deleting the values
# 	def delValue(self):
# 		print('Deleting value')
# 		del self._value

# 	value = property(getValue, setValue,
# 					delValue, )


# # passing the value
# x = Alphabet('GeeksforGeeks')
# print(x.value)

# x.value = 'GfG'

# del x.value

# ################

# # Python program to explain property()
# # function using decorator

# class Alphabet:
# 	def __init__(self, value): #! Sempre iniciar uma classe com uma função init
# 		self._value = value

# 	# getting the values
# 	@property
# 	def value(self):
# 		print('Getting value')
# 		return self._value

# 	# setting the values
# 	@value.setter
# 	def value(self, value):
# 		print('Setting value to ' + value)
# 		self._value = value

# 	# deleting the values
# 	@value.deleter
# 	def value(self):
# 		print('Deleting value')
# 		del self._value


# # passing the value
# x = Alphabet('Peter')
# print(x.value)

# x.value = 'Diesel'

# del x.value

# #################

# # declare a class
# class Employee:

# 	# class attribute
# 	count = 0

# 	# define a method
# 	def increase(self):
# 		Employee.count += 1

# # create an Employee
# # class object
# a1 = Employee()

# # calling object's method
# a1.increase()

# # print value of class attribute
# print(a1.count)

# a2 = Employee()

# a2.increase()

# print(a2.count)

# print(Employee.count)

###############

# create a class
class gfg:
	
	# constructor
	def __init__(self, value): #! Sempre iniciar uma classe com uma função init
		self._value = value
			
	# getting the values
	def getter(self):
		print('Getting value')
		return self._value
			
	# setting the values
	def setter(self, value):
		print('Setting value to ' + value)
		self._value = value
			
	# deleting the values
	def deleter(self):
		print('Deleting value')
		del self._value
	
	# create a properties
	value = property(getter, setter, deleter, )
	
# create a gfg class object
x = gfg('Happy Coding!')
print(x.value)
	
x.value = 'Hey Coder!'
	
# deleting the value
del x.value

