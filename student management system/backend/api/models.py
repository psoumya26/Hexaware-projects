from django.db import models


class Profile(models.Model):
  name= models.CharField(max_length=100)
  email = models.EmailField()
  dob = models.DateField(auto_now=False, auto_now_add=False)
  gender= models.CharField(max_length=100)