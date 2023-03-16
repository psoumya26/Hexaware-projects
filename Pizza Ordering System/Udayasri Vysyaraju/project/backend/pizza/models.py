from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=120)
    price = models.TextField()
    pimage=models.ImageField(upload_to='pimages',blank=True)

class Register(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField() 
    password = models.CharField(max_length=50)
   
class Login(models.Model):
    email = models.EmailField() 
    password = models.CharField(max_length=50)
   
    